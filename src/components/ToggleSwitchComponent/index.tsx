import React, { useContext } from 'react';

import { LayoutContext } from '../../contexts/LayoutContext';
import { ToogleSwitch } from './styles';

const ToggleSwitchComponent: React.FC = () => {
  const {
    changeTheme,
    isDarkTheme,
  } = useContext(LayoutContext);

  return (
    <ToogleSwitch>
      <input type="checkbox" checked={!isDarkTheme} onChange={() => changeTheme()} />
      <span/>
    </ToogleSwitch>
  );
}

export default ToggleSwitchComponent;