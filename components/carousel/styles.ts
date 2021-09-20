import styled, { css } from 'styled-components';

interface props {
    url?: string;
    state?: string;
    Quantidade: string;
    mov?: string;
}

export const DivPoster = styled.div<props>`
    ${({ url, state, Quantidade, mov }) => css`
        background: url('https://image.tmdb.org/t/p/original${url}');
        width: 25%;
        height: 100%;
        background-size: cover;
        cursor: pointer;
        transition: 0.3s;
        display: ${Quantidade};
        opacity: ${state === 'entering'
            ? 0
            : state !== 'exited' && state !== 'exiting' && state === 'entering'
            ? 0
            : 1};
        transform: translateX(
            ${state === 'entering' || state === 'entered' ? mov : 0}px
        );
        transform: translateX(
            ${state === 'exiting' || state === 'exited' ? 0 : mov}px
        );
    `}
`;
