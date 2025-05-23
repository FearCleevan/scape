import React, { useState } from 'react';
import styles from './GetQuote.module.css';
import { useNavigate } from 'react-router-dom'; // If using react-router v6

const GetQuote = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submittedAt, setSubmittedAt] = useState({ date: '', time: '' });
    const navigate = useNavigate(); // If not using react-router, replace with window.location

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const url = 'https://script.google.com/macros/s/AKfycby31IdUVTtEZ1VaKoy76AsERyU79iXCtaOYf84Gzp1RMOb_5VnMJRAeZcKcHRVdmvp-Ug/exec';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: (
                `FirstName=${encodeURIComponent(e.target.firstName.value)}`
                + `&LastName=${encodeURIComponent(e.target.lastName.value)}`
                + `&Email=${encodeURIComponent(e.target.email.value)}`
                + `&Phone=${encodeURIComponent(e.target.phone.value)}`
            )
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            if (data.success) {
                setSubmittedAt({ date: data.date, time: data.time });
                setShowSuccess(true);
                // Don't auto-close; let user choose action
            }
        })
        .catch(error => {
            setLoading(false);
            setIsOpen(false);
            alert('There was a problem submitting the form.', error);
        });
    };

    const handleClose = () => {
        setShowSuccess(false);
        setIsOpen(false);
    };

    const handleNext = () => {
        setShowSuccess(false);
        setIsOpen(false);
        navigate('/contact'); // or: window.location.href = '/contact';
    };

    return (
        <>
            <div className={styles.quoteContainer}>
                <button
                    onClick={() => setIsOpen(true)}
                    className={styles.quoteButton}
                    aria-label="Get a Quote"
                >
                    Get a Quote
                </button>
            </div>

            {isOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        {loading ? (
                            <div className={styles.loadingSpinner}>
                                <div className={styles.spinner}></div>
                                <div>Submitting...</div>
                            </div>
                        ) : showSuccess ? (
                            <div className={styles.successMessage}>
                                <div>
                                    Thank you! Your request was submitted successfully.<br />
                                    <span style={{ fontSize: '0.95em', color: '#e3e3e3' }}>
                                        Submitted on {submittedAt.date} at {submittedAt.time}
                                    </span>
                                </div>
                                <div style={{ marginTop: 28, display: 'flex', gap: 10, justifyContent: 'center' }}>
                                    <button
                                        className={styles.successButton}
                                        onClick={handleClose}
                                    >Close</button>
                                    <button
                                        className={styles.successButton}
                                        onClick={handleNext}
                                    >Next: Full Quote Form</button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h3 className={styles.modalTitle}>Get a Free Quote</h3>
                                <p className={styles.modalSubtitle}>Start with the quick form below. You'll be taken to the full form next!</p>
                                <form className={styles.quoteForm} onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name*"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name*"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email*"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone/Mobile*"
                                        required
                                    />
                                    <button type="submit" className={styles.submitButton}>
                                        Submit
                                    </button>
                                </form>
                                <button
                                    className={styles.closeButton}
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close quote form"
                                >
                                    &times;
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default GetQuote;