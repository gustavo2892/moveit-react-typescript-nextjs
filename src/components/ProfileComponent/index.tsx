import { Container } from './styles';

const ProfileComponent = () => (
  <Container>
    <img src="https://github.com/gustavo2892.png" alt="Gustavo Freitas" />

    <div>
      <strong>Gustavo Freitas</strong>
      <p>
        <img src="icons/level.svg" alt="Level" />
        Level 1
      </p>
    </div>
  </Container>
);

export default ProfileComponent;