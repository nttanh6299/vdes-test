import React from 'react';
import { AppProps } from 'next/app';
import { storeWrapper } from '@store/store';

import '@common/css/style.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default storeWrapper.withRedux(App);
