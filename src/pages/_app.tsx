import '@/styles/globals.css'
import NavBar from '../component/navbar/NavBar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    </> 
  );
}
