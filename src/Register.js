import React from 'react';
import './Register.css';

function Register() {
    return (
        <div className="register-container">
            <form className="register-form">
                <h1>Register</h1>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="family">Family:</label>
                    <input type="text" id="family" name="family" />
                </div>
                <div className="form-group">
                    <label htmlFor="insurance">Insurance Type:</label>
                    <input type="text" id="insurance" name="insurance" />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" max="999" />
                </div>
                <div className="form-group">
                    <label>Problems:</label>
                    <div className="problems">
                        {Array.from({ length: 10 }, (_, i) => (
                            <div key={i} className="problem">
                                <label>Problem {i + 1}</label>
                                <input type="radio" name={`problem${i + 1}`} value="yes" /> Yes
                                <input type="radio" name={`problem${i + 1}`} value="no" /> No
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
