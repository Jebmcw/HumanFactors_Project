import React from "react";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import "../pagescss/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            {/* Navigation Bar */}
            <nav className="navbar">
                <span className="company-name">Smart Budget</span>
                <ul className="nav-links">
                    <li><a href="Dashboard" className="nav-item">Dashboard</a></li>
                    <li><Link to="/Budget_Tools" className="nav-item">Budget Tools</Link></li>
                    <li><Link to="/Financial_Basics" className="nav-item">Financial Basics</Link></li>
                    <li><Link to="/Support" className="nav-item">Support</Link></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content enhanced-hero">
                    <h1 className="hero-title">Take Control of Your Finances</h1>
                    <p className="hero-description">Manage your budget smarter with intuitive and easy-to-use financial tools.</p>
                    <button className="hero-button" aria-label="Get Started">Get Started</button>
                    {/* Social Media Icons */}
                    <div className="social-icons">
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="TikTok"><FaTiktok /></a>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="features">
                <div className="feature feature-card">
                    <img src={require("../icons/Analytics.png")} alt="Analytics Icon" className="feature-icon" />
                    <h3 className="feature-title">Financial Insights</h3>
                    <p className="feature-description">Gain a deeper understanding of your spending habits with real-time analytics.</p>
                </div>
                <div className="feature feature-card">
                    <img src={require("../icons/security.png")} alt="Security Icon" className="feature-icon" />
                    <h3 className="feature-title">Secure Transactions</h3>
                    <p className="feature-description">Keep your financial data safe with industry-leading encryption.</p>
                </div>
                <div className="feature feature-card">
                    <img src={require("../icons/budge.jpg")} alt="Budgeting Icon" className="feature-icon" />
                    <h3 className="feature-title">Smart Budgeting</h3>
                    <p className="feature-description">Plan and manage your finances effortlessly with AI-powered tools.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;



