import React from 'react';

const privacyPolicyStyles = {
  container: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.5',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
};

const PrivacyPolicy = () => {
  return (
    <div>
      <div style={privacyPolicyStyles.container}>
        <h1 style={privacyPolicyStyles.title}>NYC High School Hunt</h1>
        <h2 style={privacyPolicyStyles.subtitle}>Privacy Policy:</h2>
        <p style={privacyPolicyStyles.paragraph}>
          NYC High School Hunt does not collect, store, or share any personal information.
          Our app is designed to display information from an external API.
          It does not require any user data to function.
        </p>
        <p style={privacyPolicyStyles.paragraph}>
          If you have any questions or concerns, please contact us at 
          <a href="mailto:mkingqwe@yahoo.com" style={privacyPolicyStyles.link}> mkingqwe@yahoo.com</a>.
        </p>
      </div>

      <div style={privacyPolicyStyles.container}>
        <h1 style={privacyPolicyStyles.title}>Workout Weaver</h1>
        <h2 style={privacyPolicyStyles.subtitle}>Privacy Policy:</h2>
        <p style={privacyPolicyStyles.paragraph}>
          Workout Weaver does not collect, store, or share any personal information.
          This app is designed to display information from local data.
          It does not require any user data to function.
        </p>
        <p style={privacyPolicyStyles.paragraph}>
          If you have any questions or concerns, please contact us at 
          <a href="mailto:mkingqwe@yahoo.com" style={privacyPolicyStyles.link}> mkingqwe@yahoo.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
