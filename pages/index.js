import Head from 'next/head'

import Layout from '../components/Layout'
import Header from '../components/Header'

const Home = () => (
  <>
    <Head>
      <title>AlexBHdez.dev | Personal portfolio of a frontend developer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <Header />
    </Layout>
  </>
)

export default Home
