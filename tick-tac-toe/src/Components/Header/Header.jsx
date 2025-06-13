import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from './Header.styled'; 
import Logo from '../../assets/svgs/tic-tac-toe.svg?react';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <HeaderWrapper>
            <Logo />
            <span onClick={toggleTheme}>{theme === "light" ?  <LightModeIcon /> : <DarkModeIcon /> }</span>
        </HeaderWrapper>     
    );
};

export default Header
