import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './NewsletterVerification.module.css';

const Unsubscribe = () => {
  const [message, setMessage] = useState('Processing unsubscribe request...');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = async () => {
      const searchParams = new URLSearchParams(location.search);
      const token = searchParams.get('token');
      const email = searchParams.get('email');

      if (!token || !email) {
        setMessage('Invalid unsubscribe link');
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get('/api/unsubscribe', {
          params: { token, email }
        });
        setMessage(response.data.message || 'You have been successfully unsubscribed.');
      } catch (error) {
        setMessage(error.response?.data?.error || 'Unsubscribe failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    unsubscribe();
  }, [location]);

  return (
    <div className={styles.container}>
      <h1>Newsletter Unsubscribe</h1>
      <p>{message}</p>
      {!isLoading && (
        <button onClick={() => navigate('/')} className={styles.button}>
          Return to Home
        </button>
      )}
    </div>
  );
};

export default Unsubscribe;