import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </header>
    );
};

export default Header