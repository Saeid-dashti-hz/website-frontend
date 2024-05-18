import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    insurance: '',
    age: '',
    problems: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const problems = checked
        ? [...prevState.problems, value]
        : prevState.problems.filter((problem) => problem !== value);
      return { ...prevState, problems };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', formData);
      console.log(response.data);
      // Handle successful registration
    } catch (error) {
      console.error(error);
      // Handle error during registration
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Family:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="insurance">Insurance Type:</label>
          <input
            type="text"
            id="insurance"
            name="insurance"
            value={formData.insurance}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            max="999"
            required
          />
        </div>
        <div className="form-group">
          <label>Problems:</label>
          {[...Array(10).keys()].map((num) => (
            <div key={num}>
              <label>
                <input
                  type="checkbox"
                  value={`problem${num + 1}`}
                  checked={formData.problems.includes(`problem${num + 1}`)}
                  onChange={handleCheckboxChange}
                />
                Problem {num + 1}
              </label>
            </div>
          ))}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
