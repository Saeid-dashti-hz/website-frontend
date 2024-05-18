// src/pages/Register.js
import React, { useState } from 'react';
import userService from '../services/UserService';
import '../styles/Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        // Add other form fields here
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        userService.register(formData)
            .then((response) => {
                console.log('User registered successfully:', response.data);
            })
            .catch((error) => {
                console.error('There was an error registering the user!', error);
            });
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {/* Add other form fields here */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
