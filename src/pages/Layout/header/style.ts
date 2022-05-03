import styled from 'styled-components';

export const StyledNav = styled.nav`
    ul {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        list-style: none;

        li {
            &:first-child {
                margin-left: 0;
            }
            margin-left: 10px;
        }
    }
`;
