import React, { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

const COOKIE_KEY = 'cookieConsentChoice';

const defaultPreferences = {
  functional: false,
  advertising: false,
  performance: false,
  necessary: true // Always active
};

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setShowConsent(true);
  }, []);

  const saveChoice = (choice) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(choice));
    setShowConsent(false);
    setShowSettings(false);
  };

  const handleAllowAll = () => {
    const all = { ...defaultPreferences, functional: true, advertising: true, performance: true };
    setPreferences(all);
    saveChoice({ accepted: true, preferences: all });
  };

  const handleRejectAll = () => {
    const none = { ...defaultPreferences, functional: false, advertising: false, performance: false };
    setPreferences(none);
    saveChoice({ accepted: false, preferences: none });
  };

  const handleConfirm = () => {
    saveChoice({ accepted: true, preferences });
  };

  const handleToggle = (key) => {
    if (key === 'necessary') return;
    setPreferences(p => ({ ...p, [key]: !p[key] }));
  };

  if (!showConsent && !showSettings) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      {showConsent && (
        <div className={styles.cookieConsentBL}>
          <div className={styles.cookieBox}>
            <p>
              By clicking "Accept All Cookies", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
            </p>
            <button className={`${styles.cookieBtn} ${styles.accept}`} onClick={handleAllowAll}>Accept All Cookies</button>
            <button className={`${styles.cookieBtn} ${styles.reject}`} onClick={handleRejectAll}>Reject All</button>
            <button className={`${styles.cookieBtn} ${styles.settings}`} onClick={() => setShowSettings(true)}>Cookies Settings</button>
          </div>
        </div>
      )}

      {/* Settings Panel */}
      {showSettings && (
        <div className={styles.cookieSettingsSlidein}>
          <div className={styles.cookieSettingsContent}>
            <button className={styles.cookieClose} onClick={() => setShowSettings(false)}>×</button>
            <div className={styles.cookieSettingsHeader}>
              <h2>Privacy Preference Center</h2>
              <p>
                When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.
                <br />
                <a href="https://scape.thelaunchpadteam.com/" target="_blank" rel="noopener noreferrer" className={styles.privacyLink}>scape privacy notice</a>
              </p>
            </div>
            <button className={`${styles.cookieBtn} ${styles.allowall}`} onClick={handleAllowAll}>Allow All</button>
            <div className={styles.cookieSettingsSection}>
              <h3>Manage Consent Preferences</h3>
              <div className={styles.cookieSettingRow}>
                <span>Functional Cookies</span>
                <label className={styles.cookieSwitch}>
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={() => handleToggle('functional')}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.cookieSettingRow}>
                <span>Strictly Necessary Cookies</span>
                <span className={styles.alwaysActive}>Always Active</span>
              </div>
              <div className={styles.cookieSettingRow}>
                <span>Advertising Cookies</span>
                <label className={styles.cookieSwitch}>
                  <input
                    type="checkbox"
                    checked={preferences.advertising}
                    onChange={() => handleToggle('advertising')}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.cookieSettingRow}>
                <span>Performance Cookies</span>
                <label className={styles.cookieSwitch}>
                  <input
                    type="checkbox"
                    checked={preferences.performance}
                    onChange={() => handleToggle('performance')}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
            <button className={`${styles.cookieBtn} ${styles.reject}`} onClick={handleRejectAll}>Reject All</button>
            <button className={`${styles.cookieBtn} ${styles.confirm}`} onClick={handleConfirm}>Confirm My Choices</button>
          </div>
        </div>
      )}
    </>
  );
}