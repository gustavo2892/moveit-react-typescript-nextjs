import styled, { css } from 'styled-components';

interface ContainerProps {
  isDarkTheme: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  ${props =>
    !props.isDarkTheme &&
    css`
      background: ${({ theme }) => theme.colors.backgroundThemeLight};
      color: ${({ theme }) => theme.colors.textThemeLight};
    `}

  padding: 2.5rem 10rem;

  @media (min-width: 1400px) {
    padding: 2.5rem 22rem;
  }

  height: 100vh;
  width: 100%;
  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;

    @media (max-width: 1500px) {
      margin-top: 5rem;
    }
  }
`;

export const ToogleBox = styled.header`
  width: 100%;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  text-align: right;
`;