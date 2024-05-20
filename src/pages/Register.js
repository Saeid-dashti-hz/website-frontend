import React, { useState } from "react";
import "../assets/styles/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    family: "",
    insuranceType: "",
    age: "",
    postalCode: "",
    additionalInfo: "",
    problems: Array(10).fill(false),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (index) => {
    const newProblems = [...formData.problems];
    newProblems[index] = !newProblems[index];
    setFormData({
      ...formData,
      problems: newProblems,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
  };

  const problems = [
    "Aging in Place",
    "Post-Hospital Recovery",
    "Disability Support",
    "Dementia Care",
    "Chronic Disease Management",
    "Respite Care",
    "Housework and Errands",
    "Companionship",
    "End-of-Life Care",
    "Maternity Support",
  ];

  const myStyle = {
    width: '60px',
  };

  function handleAgeChange(event) {
    const { value } = event.target;
    const inputElement = document.getElementById('age');
    inputElement.style.width = `${value.length * 12}px`;
    if (value.length > 3) {
      // Handle the error or display a message
      return;
    }
    // Update the formData state with the new value
    setFormData(prevFormData => ({
      ...prevFormData,
      age: value,
    }));
  }

  function handlePostalCodeChange(event) {
    const { value } = event.target;
    if (value.length > 5) {
      // Handle the error or display a message
      return;
    }
    // Update the formData state with the new value
    setFormData(prevFormData => ({
      ...prevFormData,
      postalCode: value,
    }));
  }

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="family">Family:</label>
            <input
              type="text"
              id="family"
              name="family"
              value={formData.family}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="insuranceType">Insurance Type:</label>
            <select
              id="insuranceType"
              name="insuranceType"
              value={formData.insuranceType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="private">Private</option>
              <option value="normal">Normal</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input style={myStyle}
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleAgeChange}
              max="999"
              className="age-input"
              inputMode="numeric"
            />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code:</label>
            <input style={myStyle}
              className="postal-code-input"
              type="number"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handlePostalCodeChange}
              max="99999"
              inputMode="numeric"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Info:</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Problems:</label>
          <div className="problems">
            {problems.map((problem, index) => (
              <div key={index} className="checkbox-group">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={formData.problems[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label for={`checkbox-${index}`}>{problem}</label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
