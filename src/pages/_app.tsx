import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from '@/lib/Appcontext'
import Script from 'next/script'
import "../../public/bootstrap-5.2.3-dist/css/bootstrap.min.css"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src='/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js'></Script>
      
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
    </>
  )
}
