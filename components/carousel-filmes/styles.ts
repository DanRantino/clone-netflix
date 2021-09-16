import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${() => css`
        display: flex;
        flex-direction: row;
        margin-left: 2%;
        margin-right: 2%;
        div {
            width: 25%;
        }
    `}
`;
