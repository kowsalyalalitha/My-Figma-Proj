// MessageForm.js
import React, { useState } from 'react';

function MessageForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log(formData);

    // Clear form data after submission (optional)
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Close modal after submission
    onClose();
  };

  return (
    <div className="message-form">
      <h2>Send Message</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default MessageForm;
