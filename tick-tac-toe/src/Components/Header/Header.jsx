import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import HeaderWrapper from './Header.styled'; 
import Logo from '../../assets/svgs/tic-tac-toe.svg?react';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <HeaderWrapper>
            <Logo />
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </HeaderWrapper>
            
    );
};

export default Header