import Container from 'constructicon/container'
import Head from 'next/head'
import Links from '../components/links'

const Index = () => (
  <div>
    <Head>
      <title>Leaderboard Examples</title>
    </Head>
    <Container width={30}>
      <Links
        title='Leaderboard Examples'
        links={[
          { name: 'Fundraisers', route: 'fundraisers' },
          { name: 'Teams', route: 'teams' },
          { name: 'Events', route: 'events'}
        ]}
      />
    </Container>
  </div>
)

export default Index
