import Head from 'next/head'
import { Header, Intro } from '../components'
import { MainContainer } from '../components/ui'

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
    <MainContainer>
      <Intro />
    </MainContainer>
  </>
)

export default Home
