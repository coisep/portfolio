import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Audiowide} from 'next/font/google'
 
const inter = Audiowide
({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: '400'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={`${inter.variable} font-sans`} >
  <Component  {...pageProps} />
  </main>
  )
}
