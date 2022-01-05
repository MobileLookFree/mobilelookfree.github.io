import React, { FC } from 'react';
import { useTheme } from 'hooks/useTheme';
import { useToggle } from 'hooks/useToggle';
import Link from 'components/ui/Link';
import ButtonRound from 'components/ui/ButtonRound';

import styles from './app.module.css';

const App: FC = () => {
  const [theme] = useTheme();
  const [, toggleValue] = useToggle<boolean>(true, false);

  return (
    <>
      <div
        className={styles.app}
        style={{ background: theme === 'dark' ? 'black' : 'white' }}
        onClick={toggleValue}
      >
        <Link href='https://yandex.ru'>
          Клик
        </Link>
      </div>
      <ButtonRound>
        1
      </ButtonRound>
      <ButtonRound>
        2
      </ButtonRound>
      <ButtonRound>
        3
      </ButtonRound>
    </>
  );
};

export default App;