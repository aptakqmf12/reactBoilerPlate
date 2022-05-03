import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from './style';

const Header = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link to={'/counter'}>counter</Link>
                </li>
                <li>
                    <Link to={'/chart'}>chart</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

export default Header;
