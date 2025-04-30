import React, { useState } from 'react';
// import ContactUs from './ContactUs';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('All fields are required.');
      return;
    }

    setError('');

    // Simulate POST request or connect to backend here
    try {
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      {submitted ? (
        <p style={styles.success}>Thank you for contacting us! We will get back to you soon.</p>
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
          {/* <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={styles.input}
          /> */}
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
  );
};

// Basic inline styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    background: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  textarea: {
    padding: '10px',
    height: '100px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    fontSize: '14px'
  },
  success: {
    color: 'green',
    fontSize: '16px'
  }
};

export default ContactUs;
