import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router'
import NProgress from 'nprogress'

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false })
  
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
