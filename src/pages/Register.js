import React from 'react';
import '../assets/styles/Register.css'; // Adjust the path

function Register() {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Family:
          <input type="text" name="family" />
        </label>
        <label>
          Insurance Type:
          <input type="text" name="insuranceType" />
        </label>
        <label>
          Age:
          <input type="number" name="age" max="999" />
        </label>
        <div className="problems">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index}>
              <label>
                Problem {index + 1}:
                <input type="radio" name={`problem${index + 1}`} value="yes" /> Yes
                <input type="radio" name={`problem${index + 1}`} value="no" /> No
              </label>
            </div>
          ))}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
