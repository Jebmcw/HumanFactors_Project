import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "../pagescss/Budget_Tools.css";

// Register datalabels plugin
Chart.register(ChartDataLabels);

const Budget_Tools = () => {
    const [formData, setFormData] = useState({
        food: '',
        rent: '',
        entertainment: '',
        savings: '',
        other: ''
    });
    const [showChart, setShowChart] = useState(false);
    const [percentageData, setPercentageData] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = Object.values(formData).map(v => parseFloat(v) || 0);
        const total = values.reduce((sum, val) => sum + val, 0);

        if (total === 0) {
            alert("Please enter some values.");
            return;
        }

        const percentages = values.map(val => ((val / total) * 100).toFixed(1));
        setPercentageData(percentages);
        setShowChart(true);
        setSuggestions([]);

        // Save to backend
        fetch("http://localhost:5000/api/budget", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                Object.fromEntries(
                    Object.entries(formData).map(([k, v]) => [k, parseFloat(v) || 0])
                )
            )
        })
        .then(res => res.json())
        .then(data => console.log("Saved to backend:", data))
        .catch(err => console.error("Error saving:", err));
    };

    const generateSuggestions = () => {
        const values = Object.values(formData).map(v => parseFloat(v) || 0);
        const categories = Object.keys(formData);

        const newSuggestions = values.map((amount, i) => {
            const dropAmount = amount * 0.02;
            const newAmount = amount - dropAmount;
            return {
                category: categories[i],
                from: amount.toFixed(2),
                to: newAmount.toFixed(2)
            };
        });

        setSuggestions(newSuggestions);
    };

    const chartData = {
        labels: ["Food", "Rent", "Entertainment", "Savings", "Other"],
        datasets: [
            {
                data: percentageData,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF"
                ],
                borderWidth: 1
            }
        ]
    };

    const chartOptions = {
        plugins: {
            datalabels: {
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 14
                },
                formatter: (value) => `${value}%`
            },
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 14
                    }
                }
            }
        }
    };

    return (
        <div className="budget-tools-container">
            <h2>Budget Tracker</h2>
            <form onSubmit={handleSubmit} className="budget-form">
                <input type="number" name="food" placeholder="Food" value={formData.food} onChange={handleChange} />
                <input type="number" name="rent" placeholder="Rent" value={formData.rent} onChange={handleChange} />
                <input type="number" name="entertainment" placeholder="Entertainment" value={formData.entertainment} onChange={handleChange} />
                <input type="number" name="savings" placeholder="Savings" value={formData.savings} onChange={handleChange} />
                <input type="number" name="other" placeholder="Other Expenses" value={formData.other} onChange={handleChange} />
                <button type="submit">Confirm</button>
            </form>

            {showChart && (
                <div className="chart-container">
                    <h3>Spending Breakdown (Percentages)</h3>
                    <Pie data={chartData} options={chartOptions} />

                    <button className="research-button" onClick={generateSuggestions}>
                        Changing Spending Habits (From Our Research)
                    </button>

                    {suggestions.length > 0 && (
                        <div className="suggestions">
                            <h4>Suggested Adjustments</h4>
                            <ul>
                                {suggestions.map((s, idx) => (
                                    <li key={idx}>
                                        Drop <strong>{s.category}</strong> by 2% → From <strong>${s.from}</strong> to <strong>${s.to}</strong>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Budget_Tools;



