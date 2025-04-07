import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './RegisterUser.css'; // Ensure this matches the file's actual name

const RegisterUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const navigate = useNavigate();  // Initialize the navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset message and loading state before making the request
        setMessage('');
        setMessageType('');
        setLoading(true); // Start loading

        try {
            const response = await axios.post('http://localhost:8000/api/register/', {
                username,
                email,
                first_name: firstName,
                last_name: lastName,
                password
            });

            if (response.status === 201) {
                setMessage('Registration successful!');
                setMessageType('success');

                // Redirect to home screen after a successful registration
                setTimeout(() => {
                    navigate('/');  // Redirect to the home screen
                }, 2000);  // Delay to allow the success message to be shown
            }
        } catch (error) {
            setMessage('Error creating user: ' + (error.response ? error.response.data.detail : 'Please try again.'));
            setMessageType('error');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>

            {loading && <div className="loading-spinner"></div>}

            {message && (
                <p className={messageType === 'success' ? 'success-message' : 'error-message'}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default RegisterUser;
