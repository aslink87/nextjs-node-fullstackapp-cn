import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.scss';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
