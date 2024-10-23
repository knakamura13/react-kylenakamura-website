import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <Link to="/">
                <h2>Kyle Nakamura</h2>
            </Link>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/sample">Sample Page</Link>
            </nav>
        </header>
    );
}

export default Header;