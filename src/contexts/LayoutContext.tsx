import { createContext, useState, ReactNode, useEffect } from 'react';

interface LayoutContextData {
  isDarkTheme: boolean;
  changeTheme: () => void;
}

interface LayoutProviderProp {
  children: ReactNode;
}

export const LayoutContext = createContext({} as LayoutContextData);

export const LayoutProvider = ({ children }: LayoutProviderProp) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  function changeTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <LayoutContext.Provider
      value={{
        isDarkTheme,
        changeTheme,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};