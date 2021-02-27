import styled, { css } from 'styled-components';

interface StyleProps {
  isDarkTheme: boolean;
}
interface CountdownButtonProps {
  active: boolean;
}

export const Container = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  ${props =>
    !props.isDarkTheme &&
    css`
      color: ${({ theme }) => theme.colors.titleThemeLight};
    `}

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 8.5rem;
    text-align: center;
    background: ${({ theme }) => theme.colors.backgroundLight};

    ${props =>
    !props.isDarkTheme &&
    css`
      background: ${({ theme }) => theme.colors.white};
    `}

    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    span {
      flex: 1;
      &:first-child {
        border-right: 1px solid ${({ theme }) => theme.colors.background};

        ${props =>
        !props.isDarkTheme &&
        css`
          border-right: 1px solid ${({ theme }) => theme.colors.backgroundThemeLight};
        `}
      }
      &:last-child {
        border-left: 1px solid ${({ theme }) => theme.colors.background};

        ${props =>
        !props.isDarkTheme &&
        css`
          border-right: 1px solid ${({ theme }) => theme.colors.backgroundThemeLight};
        `}
      }
    }
  }
  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button<StyleProps>`
  ${({ theme }) => css<CountdownButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
    height: 5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${theme.colors.text};
    background: ${theme.colors.purple};

    ${props =>
      !props.isDarkTheme &&
      css`
        background: ${theme.colors.blue};
        color: ${theme.colors.white};
      `}
    
    border: none;
    border-radius: 5px;
    transition: background-color 0.2s;
    img {
      margin-left: 8px;
    }
    &:not(:disabled):hover {
      background: ${theme.colors.purpleDark};
      
      ${props =>
        !props.isDarkTheme &&
        css`
          background: ${theme.colors.blueDark};
        `}
    }
    &:disabled {
      background: ${theme.colors.backgroundLight};
      border-bottom: 4px solid ${theme.colors.green};

      ${props =>
      !props.isDarkTheme &&
      css`
        border-bottom: 4px solid ${theme.colors.blueDark};
      `}

      cursor: not-allowed;
    }
    ${(props) =>
      props.active &&
      css`
        background: ${theme.colors.backgroundLight};
        img {
          filter: brightness(2);
        }
        &:not(:disabled):hover {
          background: ${theme.colors.red};
        }
      `}
  `}
`;