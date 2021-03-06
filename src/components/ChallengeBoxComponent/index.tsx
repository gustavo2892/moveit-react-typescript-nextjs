import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import { LayoutContext } from '../../contexts/LayoutContext';

import {
  Container,
  ChallengeNotActive,
  ChallengeActive,
  ChallengeButton,
} from './styles';

const ChallengeBoxComponent = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext);

  const { isDarkTheme } = useContext(LayoutContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container isDarkTheme={isDarkTheme}>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} XP</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Ganhe XP" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeButton onClick={handleChallengeFailed} result={'failed'}>
              Falhei
            </ChallengeButton>
            <ChallengeButton
              onClick={handleChallengeSucceeded}
              result={'succeeded'}
            >
              Completei
            </ChallengeButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando os desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
};

export default ChallengeBoxComponent;