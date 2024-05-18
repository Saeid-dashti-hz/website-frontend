// src/pages/Register.js
import React, { useState } from 'react';
import '../assets/styles/Register.css';
import UserService from '../services/UserService';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    family: '',
    insurance: 'public',
    age: '',
    additionalInfo: '',
    problems: Array(10).fill(false),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (index) => {
    const updatedProblems = [...formData.problems];
    updatedProblems[index] = !updatedProblems[index];
    setFormData({ ...formData, problems: updatedProblems });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserService.registerUser(formData)
      .then((response) => {
        console.log(response.data);
        // Handle successful registration (e.g., show a success message or redirect)
      })
      .catch((error) => {
        console.error(error);
        // Handle registration error (e.g., show an error message)
      });
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group input-inline">
          <div>
            <label className="label-inline">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label className="label-inline">Family:</label>
            <input type="text" name="family" value={formData.family} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group input-inline">
          <div>
            <label className="label-inline">Insurance Type:</label>
            <select type="text" name="insurance" value={formData.insurance} onChange={handleChange}>
              <option type="text" value="public">Public</option>
              <option type="text" value="private">Private</option>
            </select>
          </div>
          <div>
            <label className="label-inline">Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} max="150" />
          </div>
        </div>
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.problems[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              {index === 0 && "Aging in Place"}
              {index === 1 && "Post-Hospital Recovery"}
              {index === 2 && "Disability Support"}
              {index === 3 && "Dementia Care"}
              {index === 4 && "Chronic Disease Management"}
              {index === 5 && "Respite Care"}
              {index === 6 && "Housework and Errands"}
              {index === 7 && "Companionship"}
              {index === 8 && "End-of-Life Care"}
              {index === 9 && "Maternity Support"}
            </label>
          </div>
        ))}
        <div className="form-group">
          <label className="label-inline">Additional Information:</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
