import React, { useState } from 'react';
import styles from './GetQuote.module.css';
import { useNavigate } from 'react-router-dom'; // If using react-router v6

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5wUCBQK2F_dZYV8ANvLVmbOgxuu5Z32BrrqHrPKoqOlo7c91sBiZ_4IY52t-w_zZnSA/exec';

const GetQuote = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submittedAt, setSubmittedAt] = useState({ date: '', time: '' });
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate(); // If not using react-router, replace with window.location

    // Copy format from TeamFirst handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');
        setShowSuccess(false);

        const formData = new FormData(e.target);
        const params = new URLSearchParams();
        for (const [key, value] of formData.entries()) {
            params.append(key, value);
        }

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
            });
            const data = await response.json();
            setLoading(false);
            if (data.success) {
                setSubmittedAt({ date: data.date, time: data.time });
                setShowSuccess(true);
                // Optionally reset form fields if you want
                e.target.reset();
            } else {
                setErrorMsg("Submission failed. Please try again.");
            }
        } catch (error) {
            setLoading(false);
            setErrorMsg("Submission failed. Please try again.", error);
        }
    };

    const handleClose = () => {
        setShowSuccess(false);
        setIsOpen(false);
        setErrorMsg('');
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
                                        disabled={loading}
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name*"
                                        required
                                        disabled={loading}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email*"
                                        required
                                        disabled={loading}
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone/Mobile*"
                                        required
                                        disabled={loading}
                                    />
                                    <button type="submit" className={styles.submitButton} disabled={loading}>
                                        {loading ? "Submitting..." : "Submit"}
                                    </button>
                                    {errorMsg && (
                                        <div className={styles.errorMsg}>{errorMsg}</div>
                                    )}
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