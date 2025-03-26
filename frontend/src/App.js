import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Budget_Tools from "./pages/Budget_Tools"; // Make sure this matches the actual file location
import Support from "./pages/Support";
import Financial_Basics from "./pages/Financial_Basics";
import Dashboard from "./pages/Dashboard";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Budget_Tools" element={<Budget_Tools />} />
                {/* Add more routes here, like: */}
                { <Route path="/Dashboard" element={<Dashboard />} /> }
                { <Route path="/Financial_Basics" element={<Financial_Basics />} /> }
                { <Route path="/Support" element={<Support />} /> }
            </Routes>
        </Router>
    );
}

export default App;

