import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    border-bottom: 1px black solid;
`;

export const StyledNav = styled.nav`
    ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        padding: 10px;
        li {
            a {
                display: block;
                padding: 10px;
                &:hover {
                    background-color: #eee;
                }
            }
        }
    }
`;
