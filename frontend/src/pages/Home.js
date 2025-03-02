import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/users")
            .then(response => {
                console.log("API Response:", response.data);  // Debugging
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                setError("Failed to connect to backend. Make sure Flask is running.");
            });
    }, []);

    return (
        <div>
            <h1>Welcome to My Homepage</h1>
            {error ? <p style={{ color: "red" }}>{error}</p> : null}
            <h2>Users:</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

