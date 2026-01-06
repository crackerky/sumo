import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore the ancient art of Sumo wrestling - Japan's sacred sport and cultural tradition spanning over 1,500 years" />
        <meta name="theme-color" content="#333C3D" />
        <link rel="icon" href="/favicon.ico" />
        <title>SUMO - Japanese Cultural Heritage</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
