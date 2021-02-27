import { useContext } from 'react';

import { CountdownContext } from '../../contexts/CountdownContext';
import { LayoutContext } from '../../contexts/LayoutContext';
import { Container, CountdownButton } from './styles';

const CountdownComponent = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const { isDarkTheme } = useContext(LayoutContext);

  const [minutesLeft, minutesRight] = `0${minutes}`.slice(-2).split('');
  const [secondsLeft, secondsRight] = `0${seconds}`.slice(-2).split('');

  return (
    <>
      <Container isDarkTheme={isDarkTheme}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <CountdownButton disabled active={isActive}>
          Ciclo encerrado
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton active={isActive} onClick={resetCountdown}>
              Abandonar ciclo
            </CountdownButton>
          ) : (
            <CountdownButton active={isActive} onClick={startCountdown}>
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </>
  );
};

export default CountdownComponent;