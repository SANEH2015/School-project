import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('');
  const [grade, setGrade] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log('Form submitted:', {
      firstName,
      lastName,
      phoneNumber,
      email,
      province,
      grade,
      message,
    });
  };

  return (
    <>
    <div className="form"  style={{
       
        display:"flex",
        justifyContent:"center"
      }}>

        <div style={{ width: '40%',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',}}>

 <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Interested? Send us a message and we'll get back to you.</h2>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px' }}>First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px' }}>Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '5px' }}>Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="province" style={{ display: 'block', marginBottom: '5px' }}>Province:</label>
        <select
          id="province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          {/* Add province options here */}
          <option value="">Select Province</option>
          <option value="KwaZulu-Natal">KwaZulu-Natal</option>
          {/* Add other provinces */}
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="grade" style={{ display: 'block', marginBottom: '5px' }}>Grade:</label>
        <select
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          {/* Add grade options here */}
          <option value="">Select Grade</option>
          <option value="1">1</option>
          {/* Add other grades */}
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Your Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', height: '100px' }}
        ></textarea>
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>SEND</button>
    </form>
    </div>
    </div>
    </>
  );
};

export default Form;