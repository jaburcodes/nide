import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: "Poppins";
    font-size: 0.8rem;
    color: #D8D8D8;
`;

const LinkWraper = ({ children, to }: any) => {
    const match = window.location.pathname === to;

    return (
        <div className={match ? 'active' : ''}>
            {match ? '>' : ''}
            <StyledLink to={to}>
                {children}
            </StyledLink>
        </div>
    )
}

export default LinkWraper;
