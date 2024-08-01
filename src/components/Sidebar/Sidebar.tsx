import React from 'react';
import './Sidebar.css';

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul>
                <li><a href="/sale_amon">Sale Amon</a></li>
                <li><a href="/no">test</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;