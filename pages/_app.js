import React from 'react'
import GlobalStyles from '../components/GlobalStyles'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
