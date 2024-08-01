import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import './components/global.css';
import Home from './pages/Home';
import Sale_Amon from './pages/Sale_Amon';

const App: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="app">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="main-content">
                <Sidebar isOpen={isOpen} />
                <div className="content">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/sale_amon" element={<Sale_Amon />} />

                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
