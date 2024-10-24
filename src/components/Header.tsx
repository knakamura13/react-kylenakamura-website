import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <div className="header-leading">
                <h2 className="nav-item home link link--zoomies">
                    <Link to="/">Kyle Nakamura</Link>
                </h2>
            </div>

            <div className="header-trailing">
                <a
                    className="nav-item font-medium link link--underline"
                    href="https://linkedin.com/in/kylenakamura"
                    target="_blank"
                >
                    LinkedIn
                </a>
                <a
                    className="nav-item font-medium link link--underline"
                    href="https://github.com/knakamura13"
                    target="_blank"
                >
                    GitHub
                </a>
            </div>
        </header>
    );
};

export default Header;
