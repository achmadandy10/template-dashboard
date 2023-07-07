import { ErrorBoundary, Font } from '@/components';
import { persistor, wrapper } from '@/redux/app/store';
import '@/styles/global.css';
import { AppPropsWithLayout, theme } from '@/utils';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App: FC<AppPropsWithLayout> = ({
  Component,
  router,
  ...rest
}): JSX.Element => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const getLayout = Component.getLayout ?? (page => page);

  nProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    nProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    nProgress.done();
  });

  return (
    <ChakraProvider theme={theme} resetCSS>
      <AnimatePresence mode={'wait'} initial>
        <Font />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundary>
              {getLayout(
                <Component {...pageProps} key={router.route} />,
                router,
              )}
            </ErrorBoundary>
          </PersistGate>
        </Provider>
      </AnimatePresence>
    </ChakraProvider>
  );
};

export default App;
