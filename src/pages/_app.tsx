import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { LayoutProvider } from '../contexts/LayoutContext';
import GlobalStyles from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  </ThemeProvider>
);

export default MyApp;