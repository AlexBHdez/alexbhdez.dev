import Head from 'next/head'
import { Header, Intro, WorkList } from '../components'
import { Container, MainContainer, WorkInProgress } from '../components/ui'
import { getAllWorks } from '../lib/api'

const Home = ({ works }) => (
  <>
    <Head>
      <title>AlexBHdez.dev | Personal portfolio of a frontend developer</title>
    </Head>

    <Container>
      <WorkInProgress />
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
