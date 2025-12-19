import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    NProgress.configure({ showSpinner: false })
    
    const handleRouteChangeStart = () => NProgress.start()
    const handleRouteChangeComplete = () => NProgress.done()
    const handleRouteChangeError = () => NProgress.done()
    
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)
    Router.events.on('routeChangeError', handleRouteChangeError)
    
    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
      Router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [])

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
