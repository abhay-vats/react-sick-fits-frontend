// External dependencies
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

// Local dependencies
import Page from '../components/Page';

// Styles
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// Main component
const App = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default App;
