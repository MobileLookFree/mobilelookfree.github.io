import React, { FC } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useToggle } from '../../hooks/useToggle';
import Link from '../ui/Link';

const App: FC = () => {
  const [theme] = useTheme();
  const [value, toggleValue] = useToggle<boolean>(true, false);

  console.log(value);

  return (
    <div
      style={{ background: theme === 'dark' ? 'black' : 'white' }}
      onClick={toggleValue}
    >
      <Link href='https://yandex.ru'>
        Клик
      </Link>
    </div>
  );
};

export default App;