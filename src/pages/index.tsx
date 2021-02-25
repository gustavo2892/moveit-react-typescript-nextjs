import Head from 'next/head';

import ExperienceBarComponent from '../components/ExperienceBarComponent';
import ProfileComponent from '../components/ProfileComponent';
import CompletedChallengesComponent from '../components/CompletedChallengesComponent';
import CountdownComponent from '../components/CountdownComponent';
import ChallengeBoxComponent from '../components/ChallengeBoxComponent';

import { Container } from '../styles/pages/Home/styles';

const HomePage = () => (
  <Container className="container">
    <Head>
      <title>Início | Move.it</title>
    </Head>

    <ExperienceBarComponent />

    <section>
      <div>
        <ProfileComponent />
        <CompletedChallengesComponent />
        <CountdownComponent />
      </div>

      <div>
        <ChallengeBoxComponent />
      </div>
    </section>
  </Container>
);

export default HomePage;