import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'Ubuntu', sans-serif;
    }
    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: hsl(235, 21%, 11%);
    }
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;
