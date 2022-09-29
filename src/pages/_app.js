import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: normal;
        vertical-align: baseline;
        background: transparent;
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        font-size: 1rem;
        font-family: 'Open sans', sans-serif;
        height: 100%;

        @media (max-width: 1024px) {
            font-size: calc(1rem - 10%);
        }

        @media (max-width: 768px) {
            font-size: calc(1rem - 20%);
        }
    }

    body, select, input, textarea {
        color: #333;
    }

    a {
        color: #03f;
    }

    a:hover {
        color: #69f;
    }

    #__next {
        height: 100%;
    }
`;

const MyApp = ({ Component, pageProps }) => (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
);

export default MyApp;
