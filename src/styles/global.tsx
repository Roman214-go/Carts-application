import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: Inter, system-ui, sans-serif;
        background-color: #dfe0ea;
        color: black;
      }

      button {
        font-family: inherit;
        cursor: pointer;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);
