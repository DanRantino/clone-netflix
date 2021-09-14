import styled, { css } from 'styled-components';

export const Logo = styled.h2`
    ${() => css`
        margin-left: 5px;
        color: #e50914;
        font-family: 'Arial Black', Times;
        font-size: 40px;
        align-items: center;
    `}
`;

export const A = styled.a`
    ${() => css`
        text-decoration: none;
        color: #aaa;
        margin-right: 10px;

        &:hover {
            color: #fff;
        }
    `}
`;

export const HeaderContainer = styled.div`
    ${() => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `}
`;
