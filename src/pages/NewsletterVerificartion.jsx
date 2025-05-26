import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './NewsletterVerification.module.css';

const NewsletterVerification = () => {
  const [message, setMessage] = useState('Verifying your subscription...');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifySubscription = async () => {
      const searchParams = new URLSearchParams(location.search);
      const token = searchParams.get('token');
      const email = searchParams.get('email');

      if (!token || !email) {
        setMessage('Invalid verification link');
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get('/api/verify-newsletter', {
          params: { token, email }
        });
        setMessage(response.data.message || 'Email verified successfully!');
      } catch (error) {
        setMessage(error.response?.data?.error || 'Verification failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    verifySubscription();
  }, [location]);

  return (
    <div className={styles.container}>
      <h1>Newsletter Subscription</h1>
      <p>{message}</p>
      {!isLoading && (
        <button onClick={() => navigate('/')} className={styles.button}>
          Return to Home
        </button>
      )}
    </div>
  );
};

export default NewsletterVerification;