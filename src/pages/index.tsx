import { useContext } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { LayoutContext } from '../contexts/LayoutContext';
import ExperienceBarComponent from '../components/ExperienceBarComponent';
import ProfileComponent from '../components/ProfileComponent';
import CompletedChallengesComponent from '../components/CompletedChallengesComponent';
import CountdownComponent from '../components/CountdownComponent';
import ChallengeBoxComponent from '../components/ChallengeBoxComponent';
import { CountdownProvider } from '../contexts/CountdownContext';
import ToggleSwitchComponent from '../components/ToggleSwitchComponent';

import { Container, ToogleBox } from '../styles/pages/Home/styles';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const HomePage = (props: HomeProps) => {
  const {
    isDarkTheme,
  } = useContext(LayoutContext); 

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <ToogleBox>
        <ToggleSwitchComponent />
      </ToogleBox>
      <Container className="container" isDarkTheme={isDarkTheme}>
        <Head>
          <title>Início | Move.it</title>
        </Head>
        <ExperienceBarComponent />
        <CountdownProvider>
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
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};