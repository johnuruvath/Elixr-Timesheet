import React from 'react';
import './index.scss';

const Header = () => {
    return (
        <div className='header-wrap'>
            <div className='timesheet-container'>
                Time Sheet
            </div>
            <nav>
                <div className='menu-container'>
                    <ul>
                        <div className='menu-item'>
                            <span className="material-symbols-outlined">
                                visibility
                            </span> <span> View </span>
                        </div>
                        <div className='menu-item'>
                            <span className="material-symbols-outlined">
                                add_circle
                            </span>
                            <span> Add </span>
                        </div>
                        <div className='menu-item'>
                            <span className="material-symbols-outlined">
                                date_range
                            </span>
                            <span>  My Timesheet </span>
                        </div>
                        <div className='menu-item'>
                            <span className="material-symbols-outlined account" style={{ color: "var(--color-secondary)" }}> account_circle </span>
                        </div>
                    </ul>
                </div>
            </nav>

        </div>
    );
}

export default Header;