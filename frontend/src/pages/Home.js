import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(() => {
                // Handle errors
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="home-container">
            {/* Navigation Bar */}
            <nav className="navbar">
                <span className="company-name">Company Name</span>
                <ul className="nav-links">
                    <li><a href="#" className="nav-item">Dashboard</a></li>
                    <li><a href="#" className="nav-item">Budget Tools</a></li>
                    <li><a href="#" className="nav-item">Financial Basics</a></li>
                    <li><a href="#" className="nav-item">Support</a></li>
                </ul>
            </nav>

            {/* Main Content Section */}
            <div className="content">
                <div className="left-section">
                    <h1 className="title">Smart Budgeting</h1>
                    <p className="description">Take control of your finances with intuitive tools designed for you.</p>
                    <button className="primary-button" aria-label="Get Started">Get Started</button>
                </div>
            </div>

            {/* User Data Display */}
            <div className="user-list">
                {loading ? (
                    <p className="loading-text">Loading users...</p>
                ) : users.length > 0 ? (
                    <ul>
                        {users.map(user => (
                            <li key={user.id} className="user-item">
                                <span className="username">{user.username}</span>
                                <span className="email">{user.email}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="empty-text"></p>
                )}
            </div>
        </div>
    );
};

export default Home;


