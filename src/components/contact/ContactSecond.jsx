import React, { useState } from 'react';
import styles from './ContactSecond.module.css';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const squareFootOptions = [
  'Under 1,000 sq ft',
  '1,000 - 2,500 sq ft',
  '2,500 - 5,000 sq ft',
  '5,000 - 10,000 sq ft',
  '10,000+ sq ft'
];

const budgetOptions = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $30,000',
  '$30,000 - $50,000',
  '$50,000+'
];

const timeFrameOptions = [
  'Immediately',
  '1-3 months',
  '3-6 months',
  '6-12 months',
  '1 year+'
];

const ContactSecond = () => {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const form = e.target;
    const formData = new FormData(form);

    // convert FormData to application/x-www-form-urlencoded
    const params = new URLSearchParams();
    for (let [key, value] of formData.entries()) {
      params.append(key, value);
    }

    // Google Apps Script endpoint
    const url = "https://script.google.com/macros/s/AKfycbx5u74Ht1SpqqIMqtSl3TWr_HkHK7egW4YZndZOsPs6LXN7Bz60uxgN2XsaCWJErEquIQ/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
      });
      const data = await response.json();
      if (data.success) {
        setSuccessMsg(`Thank you! Your request was submitted successfully on ${data.date} at ${data.time}.`);
        form.reset();
      } else {
        setErrorMsg("Submission failed. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Submission failed. Please try again.", err);
    }
    setLoading(false);
  };

  return (
    <div className={styles.contactSecondContainer}>
      <div className={styles.contactSecondContent}>
        <div className={styles.mapSection}>
          <div className={styles.mapContainer}>
            {/* Google Map Embed */}
            <iframe
              title="Scape Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.96574092203!2d-111.7321382!3d40.2975386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9b339f7826c1%3A0x70f8823243fb1c27!2s1420%20W%20Center%20St%2C%20Orem%2C%20UT%2084057%2C%20USA!5e0!3m2!1sen!2sus!4v1716396220000"
              width="600"
              height="861"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className={styles.map}
            />

            {/* Map Info Card */}
            <div className={styles.mapInfoCard}>
              <h3>Scape</h3>
              <div className={styles.rating}>
                <span style={{ marginRight: '10px' }}>4.8</span>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < 5 ? styles.starFilled : styles.starEmpty} />
                  ))}
                </div>
                <span>142 reviews</span>
              </div>
              <a
                href="https://www.google.com/maps/place/1420+W+Center+St,+Orem,+UT+84057,+USA/@40.2975386,-111.7321382,17z/data=!3m1!4b1!4m5!3m4!1s0x874d9b339f7826c1:0x70f8823243fb1c27!8m2!3d40.2975386!4d-111.7295579?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewLargerLink}
              >
                <FaMapMarkerAlt /> View Larger Map
              </a>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <p className={styles.sectionSubtitle}>Our Contact</p>
          <h2 className={styles.sectionTitle}>Get a Free Quote Now!</h2>
          <p className={styles.sectionDescription}>
            Our award-winning team is dedicated to bringing your dream outdoor space to life,
            offering both beauty and functionality with a warranty that guarantees satisfaction.
          </p>

          <form className={styles.contactForm} autoComplete="off" onSubmit={handleSubmit}>
            {/* Row 1: First Name, Last Name */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formInputLabel}>First Name*</label>
                <input type="text" name="firstName" placeholder="Enter your first name" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formInputLabel}>Last Name*</label>
                <input type="text" name="lastName" placeholder="Enter your last name" required />
              </div>
            </div>

            {/* Row 2: Email, Phone/Mobile */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formInputLabel}>Email*</label>
                <input type="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formInputLabel}>Phone/Mobile*</label>
                <input type="tel" name="phone" placeholder="(555) 555-5555" required />
              </div>
            </div>

            {/* Own Home or Lot */}
            <div className={styles.formRow}>
              <div className={styles.formGroupFull}>
                <label className={styles.formLabel}>Do you currently own your home or lot?*</label>
                <div className={styles.radioGroup}>
                  <label><input type="radio" name="ownHome" value="Yes" required /> Yes</label>
                  <label><input type="radio" name="ownHome" value="No" /> No</label>
                </div>
              </div>
            </div>

            {/* Lot Location */}
            <div className={styles.formRow}>
              <div className={styles.formGroupFull}>
                <label className={styles.formInputLabel}>Where is your lot located or what is your desired location?*</label>
                <input
                  type="text"
                  name="lotLocation"
                  placeholder="e.g. Orem, UT or another location"
                  required
                />
              </div>
            </div>

            {/* Home Size (select), Yard Size (select) */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formInputLabel}>Home Size*</label>
                <select name="homeSize" required defaultValue="">
                  <option value="" disabled>Select size</option>
                  {squareFootOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formInputLabel}>Yard Size*</label>
                <select name="yardSize" required defaultValue="">
                  <option value="" disabled>Select size</option>
                  {squareFootOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget (select) */}
            <div className={styles.formRow}>
              <div className={styles.formGroupFull}>
                <label className={styles.formInputLabel}>Landscaping Budget*</label>
                <select name="budget" required defaultValue="">
                  <option value="" disabled>Select budget</option>
                  {budgetOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Timeframe (select) */}
            <div className={styles.formRow}>
              <div className={styles.formGroupFull}>
                <label className={styles.formInputLabel}>When would you like to begin your landscape project?*</label>
                <select name="timeframe" required defaultValue="">
                  <option value="" disabled>Select timeframe</option>
                  {timeFrameOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Already have design plans? */}
            <div className={styles.formRow}>
              <div className={styles.formGroupFull}>
                <label className={styles.formLabel}>Do you already have design plans for your landscape project?*</label>
                <div className={styles.radioGroup}>
                  <label><input type="radio" name="hasDesignPlans" value="Yes" required /> Yes</label>
                  <label><input type="radio" name="hasDesignPlans" value="No" /> No</label>
                </div>
              </div>
            </div>

            {/* Additional Comments */}
            <div className={styles.formRow}>
              <div className={styles.formGroupFull}>
                <label className={styles.formInputLabel}>What else should we know about your landscape project?*</label>
                <textarea
                  name="additionalInfo"
                  placeholder="Tell us about your vision, features, or questions"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT FORM"}
            </button>
            {successMsg && <div className={styles.successMsg}>{successMsg}</div>}
            {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSecond;