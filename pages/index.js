import Head from 'next/head'

import { Header } from '../components'

const Home = () => (
  <>
    <Head>
      <title>AlexBHdez.dev | Personal portfolio of a frontend developer</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;800&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Header />
  </>
)

export default Home
