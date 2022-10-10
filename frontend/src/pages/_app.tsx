import { AppProps } from 'next/app';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../services/store';
import '../styles/globals.css';

type ComponentWithLayout = AppProps & {
  Component: AppProps['Component'] & {
    Layout?: React.ComponentType;
  };
};

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

const App = ({ Component, pageProps }: ComponentWithLayout) => {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
