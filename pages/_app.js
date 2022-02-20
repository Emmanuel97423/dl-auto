import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../components/layout/layout';
import Loading from '../components/ui/loadingRouter';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import nProgress from "nprogress";
import "../styles/nprogress.css";

nProgress.configure({ showSpinner: false })

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);






// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {



  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [loadingState, setLoadingState] = useState(false);
  const [loadingSucessState, setLoadingSucessState] = useState(false);

  useEffect(() => {
    const handleRouteStart = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${shallow ? 'with' : 'without'
        } shallow routing`
      );
      setLoadingState(true)

    };
    const handleRouteFinish = (url, { shallow }) => {
      // setTimeout(() => {
      //   setLoadingState(false)

      // }, 200)
      setLoadingState(false)
    }

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteFinish);



    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    // return () => {
    //   router.events.off('routeChangeStart', handleRouteStart)
    // }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          {/* <Loading /> */}

          {loadingState ? <Loading /> : <Component {...pageProps} />}
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
};



MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
