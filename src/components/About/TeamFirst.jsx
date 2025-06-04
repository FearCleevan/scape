import React, { useState } from 'react';
import styles from './TeamFirst.module.css';

// Import team images
import Kent from '../../assets/teams/Kent Christensen-CF CCO.jpg';
import Peter from '../../assets/teams/Peter J. Novak-CEO.jpg';
import Steve from '../../assets/teams/Steve Mortensen-CF CVO.jpg';
import Ryan from '../../assets/teams/Ryan Kerekes-CFO.jpeg';
import Andrew from '../../assets/teams/Andrew James-DO.jpg';
import Troy from '../../assets/teams/Troy Clark-LLD.jpg';
import Rene from '../../assets/teams/Rene Ignacio-LPD.jpg';

// Social icons
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  // ...team members array as before
  // (omitted here for brevity, unchanged from your input)
  {
    name: 'Steve Mortensen',
    role: 'Co-Founder and Chief Vision Officer',
    image: Steve,
    email: 'info@scapedbm.com',
    bio: (
      <>
        <p>
          Steve Mortensen is a co-founder of scape, a premier landscape design company dedicated to transforming outdoor spaces into stunning, sustainable environments. With over 20 years of experience in landscape design and builds under his company Peak Property Services, LLC, he brings a unique blend of creativity, technical expertise, and a deep passion for creating livable outdoor spaces to every homestead he touches.
        </p>
        <p>
          Steve was born and raised in Utah County and holds a Bachelor of Science (B.S.) degree in Business Administration from Utah Valley University. Steve has worked on a diverse range of projects, from intimate residential gardens to expansive commercial landscapes. His landscape philosophy centers on harmonizing functionality with aesthetic beauty; creating spaces that not only captivate the eye but also become usable environments for the family to entertain in and grow.
        </p>
        <p>
          When Steve’s not creating new landscape master pieces, or consulting with clients, he enjoys spending time with his family and friends, golfing and creating music. He is also is an active participant in the construction community along the Wasatch Front and enjoys networking with local business leaders.
        </p>
        <p>
          At scape Steve continues to inspire his team and clients alike, crafting landscapes that help build relationships and leave a lasting impact.
        </p>
      </>
    ),
  },
  {
    name: 'Kent Christensen',
    role: 'Co-Founder and Chief Construction Officer',
    image: Kent,
    email: 'info@scapedbm.com',
    bio: (
      <>
        <p>
          Kent Christensen is a co-founder of scape a premier landscape design company dedicated to transforming outdoor spaces into stunning, sustainable environments. He has over 30 years of experience in the construction industry, along several disciplines, including plumbing, excavating, landscape design, build and maintenance. He is a licensed general contractor and understands the in-and-outs of commercial and residential construction projects, including operating his own construction and landscaping company called KC Property Services, Inc.
        </p>
        <p>
          Kent was born and raised in Boise Idaho and relocated to Utah County in 2002. He played baseball at University of Southern California and later completed his Bachelor of Science (B.S.) degree in Business Management from the University of Phoenix. He has spent his career on diverse range of projects including large scale apartment communities such as Wolverine Crossing in Orem, Utah and several estate sized homesteads across the Wasatch Front.
        </p>
        <p>
          When Kent’s not devoting his time to his obligations at scape, he enjoys spending time with his grandkids, street touring his motorcycle, mountain biking and golfing. He has completed several Iron Man triathlons competitions, ran the New York marathon five times and completed several century rides (over 100 miles) on his street bike. He is an active member in several construction trade associations and groups in northern Utah.
        </p>
        <p>
          At scape, Kent prides himself on investing the necessary time and cultivating the relationships with his clients in order to execute their vision of their dream estate through his construction team.
        </p>
      </>
    ),
  },
  {
    name: 'Ryan Kerekes',
    role: 'Chief Financial Officer',
    image: Ryan,
    email: 'Finance@scapedbm.com',
    bio: (
      <>
        <p>
          Ryan Kerekes comes to scape with over 20 years of experience in the private sector working in both accounting and financial management. Ryan holds a Bachelor’s of Science (B.S.) degree in accounting and a Master’s degree in business administration from the University of Utah.
        </p>
        <p>
          Ryan has built a career grounded in strategic leadership and operational excellence by overseeing and managing the financial analysis, reporting, risk management, cash management, shareholder communication, strategic financial leadership, and overall financial health of IC Group.  He has served as the Chief Financial Officer of IC Group for the past six years and currently contributes to the company's long-term vision and governance as a member of its Board of Directors.
        </p>
        <p>
          Ryan was born and raised in Utah and currently resides in Bluffdale. Outside of the office, he enjoys spending time in the mountains fly fishing and hunting with his three sons, supporting his daughter at dance competitions, and making memories with his wife, Britney.
        </p>
        <p>
          At scape, Ryan focuses his energy in providing financial management and oversight to benefit both the enterprise and all its stakeholders, especially its clients.
        </p>
      </>
    ),
  },
  {
    name: 'Andrew James',
    role: 'Director of Operations',
    image: Andrew,
    email: 'info@scapedbm.com',
    bio: (
      <>
        <p>
          Andrew James is the dedicated Director of Operations of scape, with a knack for bringing complex visions to life—on time, on budget, and with an eye for detail that elevates every project. With over a decade of experience managing high-impact initiatives across construction and operational development, he thrives at the intersection of strategy, coordination, and boots-on-the-ground problem-solving.
        </p>
        <p>
          Andrew moved to Utah over 20 years ago and earned a Bachelor’s of Science degree in political science from Brigham Young University and has spent much of his career overseeing projects throughout the Mountain West. Whether leading multi-site expansions or fine-tuning internal workflows, he is known for building strong teams, clear communication, and delivering lasting results.
        </p>
        <p>
          Outside the office, Andrew is most at home in the outdoors—carving fresh powder at Sundance, hiking the Uintas, or camping with friends and family. A firm believer that balance fuels performance, he brings the same focus and energy to the trailhead as he does to the jobsite.
        </p>
        <p>
          At every stage, Andrew’s leadership is grounded in integrity, efficiency, and a love for managing projects that stand the test of time.
        </p>
      </>
    ),
  },
  {
    name: 'Troy Clark',
    role: 'Lead Landscape Designer',
    image: Troy,
    email: 'Design@scapedbm.com',
    bio: (
      <>
        <p>
          Troy Clark serves as the Lead Project Designer at scape and is known for his creativity and passion for landscape design. With several years of experience in landscape architecture and, he has cultivated a reputation for transforming client visions into breathtaking, functional landscapes that harmonize with their natural surroundings. His vision is what helps shapes client’s ideas into design realities.
        </p>
        <p>
          Troy is known for his ability to understand client’s desired outcomes and his communication, responsiveness and overall approach to the landscape design process is what sets him apart.
        </p>
        <p>
          Troy is a long-time resident of Utah County and achieved a Bachelor of Science (B.S.) degree in Business Administration from Utah Valley University and has been working in several client focused roles for nearly 20 years. When Troy’s not creating new design master pieces, or consulting with clients, he enjoys playing basketball, golfing and watching his four kids compete in dance and a variety of different sports.
        </p>
        <p>
          At scape, Troy focuses all his efforts to collaborate and communicate with his clients in order to enable them to fully express their vision on their landscape design.
        </p>
      </>
    ),
  },
  {
    name: 'René Ignacio',
    role: 'Lead Project Manager',
    image: Rene,
    email: 'Projects@scapedbm.com',
    bio: (
      <>
        <p>
          René Ignacio brings 15+ years of project management expertise to scape, ensuring seamless execution from design to completion. With a background in civil engineering and construction, he excels at coordinating teams and delivering high-quality results on schedule.
        </p>
        <p>
          At scape, René's commitment to excellence ensures that every project is completed with precision, on time, and to the highest standards. For inquiries to René, please email to Projects@scapedbm.com.
        </p>
      </>
    ),
  },
];

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby5wUCBQK2F_dZYV8ANvLVmbOgxuu5Z32BrrqHrPKoqOlo7c91sBiZ_4IY52t-w_zZnSA/exec";

const TeamFirst = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function handleMemberClick(index) {
    setSelectedIndex(index);
    setTimeout(() => {
      const el = document.getElementById('profileDetailView');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  function handleBack() {
    setSelectedIndex(null);
    setTimeout(() => {
      const el = document.getElementById('teamListView');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Updated handleSubmit to use application/x-www-form-urlencoded and Google Apps Script
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    // Convert form data to URLSearchParams for x-www-form-urlencoded
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(form)) {
      params.append(key, value);
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      const data = await response.json();
      if (data.success) {
        setSuccessMsg(`Thank you! Your message was submitted successfully on ${data.date} at ${data.time}.`);
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        });
      } else {
        setErrorMsg("Submission failed. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Submission failed. Please try again.", err);
    }
    setLoading(false);
  }

  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamContent}>
        <h2 className={styles.teamHeading}>The Team</h2>
        {selectedIndex === null ? (
          <div id="teamListView" className={styles.teamMembers}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={styles.memberCard}
                onClick={() => handleMemberClick(index)}
                tabIndex={0}
                role="button"
                aria-label={`View profile for ${member.name}`}
              >
                <div className={styles.memberImageContainer}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div id="profileDetailView" className={styles.profileDetailSection}>
            <button className={styles.backButton} onClick={handleBack}>
              ← Back to Team
            </button>
            <div className={styles.profileContactWrapper}>
              {/* Left: Profile */}
              <div className={styles.profileCard}>
                <img
                  src={teamMembers[selectedIndex].image}
                  alt={teamMembers[selectedIndex].name}
                  className={styles.profileImage}
                />
                <div className={styles.profileContent}>
                  <h3 className={styles.profileName}>
                    {teamMembers[selectedIndex].name}
                  </h3>
                  <p className={styles.profileRole}>
                    {teamMembers[selectedIndex].role}
                  </p>
                  <div className={styles.profileBio}>
                    {teamMembers[selectedIndex].bio}
                  </div>
                  <p className={styles.profileEmail}>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${teamMembers[selectedIndex].email}`}>
                      {teamMembers[selectedIndex].email}
                    </a>
                  </p>
                </div>
              </div>
              {/* Right: Contact Us */}
              <div className={styles.contactCard}>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <h3>Contact Us</h3>
                  <div className={styles.inputRow}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone/Mobile"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  <button type="submit" className={styles.submitButton} disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                  {successMsg && <div className={styles.successMsg}>{successMsg}</div>}
                  {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
                  <span className={styles.contactOrText}>or Contact us on</span>
                </form>
                <div className={styles.socialIcons}>
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamFirst;