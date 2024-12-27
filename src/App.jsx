import React, { useState, Suspense } from 'react'; // Added Suspense import
import { lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // Correct react-router-dom import
import './App.css';

const Dashboard = lazy(() => import('./Components/Dashboard'));
const Landing = lazy(() => import('./Components/Landing'));
import { AppBar as MUIAppBar } from '@mui/material'; // Rename imported AppBar to avoid conflict

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <NavigationBar /> {/* Using NavigationBar instead of AppBar */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

// Renamed AppBar to NavigationBar to avoid conflict
function NavigationBar() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => navigate("/")}>Landing Page</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      </div>
    </div>
  );
}

export default App;
