import Head from 'next/head'
import { Header, Intro, WorkList } from '../components'
import { Container, MainContainer } from '../components/ui'
import { getAllWorks } from '../lib/api'

const Home = ({ works }) => (
  <>
    <Head>
      <title>AlexBHdez.dev | Personal portfolio of a frontend developer</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;800&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Container>
      <Header />
      <MainContainer>
        <Intro />
        <WorkList works={works} />
      </MainContainer>
    </Container>
  </>
)

export default Home

export const getStaticProps = async () => {
  const works = JSON.parse(await getAllWorks())

  return {
    props: {
      works
    }
  }
}
