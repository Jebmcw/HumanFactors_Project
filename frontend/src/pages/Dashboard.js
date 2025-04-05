import React, { useEffect, useState } from "react";
import "../pagescss/Dashboard.css";

const Dashboard = () => {
    const [budget, setBudget] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/budget/latest")
            .then(res => res.json())
            .then(data => {
                if (!data.message) setBudget(data);
            })
            .catch(err => console.error("Failed to load budget:", err));
    }, []);

    return (
        <div className="dashboard-container">
            <h2>Welcome Back!</h2>

            {budget && (
                <section className="summary">
                    <div className="summary-card">
                        <h3>Total Budget</h3>
                        <p>${(budget.food + budget.rent + budget.entertainment + budget.savings + budget.other).toFixed(2)}</p>
                    </div>
                    <div className="summary-card">
                        <h3>Total Spent</h3>
                        <p>${(budget.food + budget.entertainment + budget.other).toFixed(2)}</p>
                    </div>
                </section>
            )}

            {/* ...rest of dashboard content */}
        </div>
    );
};

export default Dashboard;

