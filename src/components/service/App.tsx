import React, { FC, useState } from 'react';
import { useTheme } from 'hooks/useTheme';
import { useToggle } from 'hooks/useToggle';
import Link from 'components/ui/Link';
import ButtonRound from 'components/ui/ButtonRound';

import styles from './app.module.scss';

const App: FC = () => {
  const [theme] = useTheme();
  const [, toggleValue] = useToggle<boolean>(true, false);
  const [style, setStyle] = useState<Object>({
    position: 'absolute',
    top: 100,
    left: 100,
    background: 'red',
    width: 200,
    height: 200,
  });
  const [ref, setRef] = useState<HTMLDivElement>();

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
      <div
        ref={r => setRef(r)}
        style={style}
        onDragStart={() => false}
        onMouseDown={(event) => {
          if (!ref) {
            return;
          }
          let shiftX = event.clientX - ref.getBoundingClientRect().left;
          let shiftY = event.clientY - ref.getBoundingClientRect().top;
          ref.onmousemove = (event) => {
            const { pageX, pageY } = event;
            return setStyle({
              ...style,
              top: pageY - shiftY,
              left: pageX - shiftX,
            });
          }
        }}
        onMouseUp={() => {
          if (!ref) {
            return;
          }
          return ref.onmousemove = null;
        }}
      />
    </>
  );
};

export default App;