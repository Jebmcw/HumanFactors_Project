import React from "react";
import "../pagescss/Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2>Welcome Back!</h2>

            <section className="summary">
                <div className="summary-card">
                    <h3>Total Budget</h3>
                    <p>$2,000</p>
                </div>
                <div className="summary-card">
                    <h3>Total Spent</h3>
                    <p>$1,200</p>
                </div>
            </section>

            <section className="dashboard-grid">
                <div className="widget">
                    <h4>Spending Breakdown</h4>
                    <p>[Pie Chart Preview Placeholder]</p>
                </div>
                <div className="widget">
                    <h4>Smart Tip</h4>
                    <p>You’ve spent 60% of your entertainment budget this week.</p>
                </div>
                <div className="widget">
                    <h4>Upcoming Bill</h4>
                    <p>Rent due on April 1st: $1200</p>
                </div>
                <div className="widget">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/Budget_Tools">Budget Tools</a></li>
                        <li><a href="/Financial_Basics">Financial Basics</a></li>
                        <li><a href="/Support">Support</a></li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
