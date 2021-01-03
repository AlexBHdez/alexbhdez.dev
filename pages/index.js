import Head from 'next/head'
import { Header, Intro, Works } from '../components'
import { MainContainer } from '../components/ui'
import { getAllWorks } from '../lib/api'

const Home = ({ workList }) => (
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
      <Works workList={workList} />
    </MainContainer>
  </>
)

export default Home

export const getStaticProps = async () => {
  const workList = JSON.parse(await getAllWorks())

  return {
    props: {
      workList,
    },
  }
}
