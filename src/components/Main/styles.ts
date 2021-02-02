import styled, { css } from 'styled-components';

export const Main = styled.main`
    ${({ theme }) => css`
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: ${theme.colors.mainBg};
        color: ${theme.colors.white};
    `}
`;

export const Logo = styled.div`
    ${({ theme }) => css`
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid ${theme.colors.white};

        & img {
            width: 50px;
            height: 50px;
        }

    `}
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        margin-top: 20px;
    `}
`;

export const List = styled.div`
    ${({ theme }) => css`
        margin-top: 20px;
        & ul {
            margin-top: 10px;
            margin-left: 20px;

            & li {
                font-size: 16px;
                line-height: 1.4rem;
            }
        }
    `}
`;