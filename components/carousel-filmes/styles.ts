import styled, { css } from 'styled-components';

interface Container {
    Quantidade: Array<number>;
}

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
