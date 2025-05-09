import React, { useState } from 'react';
import '../styles/font.css'; // Import the font styles
import bgpic from "../assets/download2.jpg"
import { Typography } from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const backgroundImageUrl = '/cont.jpg'; // Check the path to your image

  return (
    <div
      style={{
        ...styles.page,
         backgroundImage: `url(${bgpic})`, // Applying the background image
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        backgroundPositionX: 'calc(50% - 280px)', // Move image ~70px to the left
        backgroundPositionY: 'center',
       // backgroundPosition: 'center'
      }}
    >
      <div style={styles.overlay}>
        <div style={styles.container}>
          <Typography variant="h4" sx={{ mb: 2, color: " #9cb6d1" }}>
                             CONTACT US
                        </Typography>
          {submitted ? (
            <p style={styles.success}>
              Thank you for contacting us! We will get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              {error && <p style={styles.error}>{error}</p>}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
              />
              <button type="submit" style={styles.button}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'HostGrotesk, sans-serif', // Use custom font
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    width: '90%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    textAlign: 'center',
    color: '#4a7ca8',
    marginBottom: '20px',
    fontSize: '28px',
    fontFamily: 'HostGrotesk, sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px'
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    fontFamily: 'HostGrotesk, sans-serif',
    outline: 'none',
    color: '#122C4F',
    '&:focus': {
      borderColor: '#4a7ca8'
    }
  },
  textarea: {
    padding: '12px',
    height: '120px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    resize: 'vertical',
    fontFamily: 'HostGrotesk, sans-serif',
    outline: 'none',
    color: '#122C4F',
    '&:focus': {
      borderColor: '#4a7ca8'
    }
  },
  button: {
    padding: '14px',
    backgroundColor: '#4a7ca8',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontFamily: 'HostGrotesk, sans-serif'
  },
  error: {
    color: '#d32f2f',
    fontSize: '14px',
    backgroundColor: '#fdecea',
    padding: '10px',
    borderRadius: '4px',
    fontFamily: 'HostGrotesk, sans-serif'
  },
  success: {
    color: '#388e3c',
    fontSize: '16px',
    backgroundColor: '#e8f5e9',
    padding: '10px',
    borderRadius: '4px',
    fontFamily: 'HostGrotesk, sans-serif'
  }
};

export default ContactUs;
