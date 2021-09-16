import styled, { css } from 'styled-components';

type prop = {
    url: string;
};

export const Container = styled.div`
    ${() => css`
        margin-left: 20px;
        width: 60%;
    `}
`;

export const Wrapper = styled.div<prop>`
    ${({ url }) => css`
        font-size: 16px;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
            url('https://image.tmdb.org/t/p/original${url}');

        height: 400px;
        background-size: cover;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    `}
`;

export const H3 = styled.h3`
    ${() => css`
        background: none;
        margin-top: 15%;
        font-size: 40px;
        font-family: 'Trebuchet MS', Arial, sans-serif;
    `}
`;

export const P = styled.p`
    ${() => css`
        background: none;
        margin-top: 0.5%;
        margin-bottom: 40px;
    `}
`;

export const Btn = styled.button`
    ${() => css`
        background-color: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(0, 0, 0, 0.3);
        color: white;
        padding: 15px 30px;
        margin-right: 15px;
        font-size: 12px;
        transition: 0.3s ease all;
        justify-content: space-evenly;
        &:active {
            border: 1px solid white;
        }
        &:hover {
            background-color: white;
            border: 1px solid white;
            color: black;
        }
        cursor: pointer;
        i {
            padding-right: 8px;
        }
    `}
`;
