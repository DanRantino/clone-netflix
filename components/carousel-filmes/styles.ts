import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${() => css`
        display: flex;
        width: 95%;
        height: 100%;
        flex-direction: column;
        margin-left: 2%;
        margin-right: 2%;
        padding-top: 2%;
        justify-content: center;
        @media (max-width: 800px) {
            width: 95%;
            height: 28%;
        }
        @media (max-width: 768px) {
            width: 95%;
            height: 35%;
        }
        @media (max-width: 414px) {
            width: 95%;
            height: 25%;
        }
        @media (max-width: 375px) {
            width: 95%;
            height: 20%;
        }
    `}
`;

export const WrapperCarousel = styled.div`
    ${() => css`
        display: flex;
        width: 100%;
        height: 100%;
    `}
`;

export const ContainerCarousel = styled.div`
    ${() => css`
        margin-left: 2%;
        margin-right: 2%;
        padding-top: 2%;
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: row;
    `}
`;

export const ButtonCarousel = styled.button`
    ${() => css`
        background: none;
        border: none;
        cursor: pointer;
        color: white;

        i {
            &:hover {
                opacity: 0.5;
            }
        }

        :active {
            transition: 1s ease;
        }
    `}
`;
