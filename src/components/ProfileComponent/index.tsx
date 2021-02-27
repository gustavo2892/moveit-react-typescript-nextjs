import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { LayoutContext } from '../../contexts/LayoutContext';

import { Container } from './styles';

const ProfileComponent = () => {
  const { level } = useContext(ChallengesContext);
  const { isDarkTheme } = useContext(LayoutContext);

  return (
    <Container isDarkTheme={isDarkTheme}>
      <img src="https://github.com/gustavo2892.png" alt="Gustavo Freitas" />

      <div>
        <strong>Gustavo Freitas</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default ProfileComponent;