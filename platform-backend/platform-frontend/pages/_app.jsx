import { ThemeProvider } from '@emotion/react';
import { useRouter } from 'next/router';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import useAmplitudeInit from '@/hooks/useAmplitudeInit';

import GlobalProvider from '@/providers/GlobalProvider';
import theme from '@/theme/theme';

import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  const { query } = useRouter();

  useAmplitudeInit();

  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <GoogleAnalytics
          trackPageViews
          gaMeasurementId={process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}
        />
        {getLayout(<Component {...pageProps} />, query)}
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;