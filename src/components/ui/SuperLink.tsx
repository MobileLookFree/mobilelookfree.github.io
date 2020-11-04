import React from 'react';
import Link from './Link';

const a = {
  b: {
    c: 'https://ya.ru'
  }
}

const SuperLink: React.FC = React.memo(() => (
  <Link href={a?.b?.c}>Click</Link>
));

export default SuperLink;