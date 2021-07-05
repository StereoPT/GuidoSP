import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../../styles/theme';
import { Global, css } from '@emotion/react';
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={ css`
          html {
            min-width: 356px;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #1B1B1E;
          }
          ::-webkit-scrollbar {
            width: 8px;
            background: #080808;
          }
          ::-webkit-scrollbar-thumb {
            background: #A9BCD0;
            border-radius: 8px;
          }
        ` }
      />
      { children }
    </>
  );
};

// TODO:
// Add Global Style
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={ customTheme }>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
