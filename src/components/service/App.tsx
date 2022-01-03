import React, { FC } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useToggle } from '../../hooks/useToggle';
import Link from '../ui/Link';
import ButtonRound from '../ui/ButtonRound';

const App: FC = () => {
  const [theme] = useTheme();
  const [, toggleValue] = useToggle<boolean>(true, false);

  // console.log(value);

  return (
    <>
      <div
        style={{ background: theme === 'dark' ? 'black' : 'white' }}
        onClick={toggleValue}
      >
        <Link href='https://yandex.ru'>
          Клик
        </Link>
      </div>
      <ButtonRound>
        Click
      </ButtonRound>
    </>
  );
};

export default App;