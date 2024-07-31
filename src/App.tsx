import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import './components/global.css';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
