import { FC, useState } from 'react';
import styles from './styles.module.css';

type Props = {
  value: string;
}
const Title: FC<Props> = ({ value }) =>
{
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className={ styles.title }>
        {value}
        <img src="/favicon-36x36.png" alt="wave" width="36" height="36" />
      </h1>
      <button data-testid='counter' onClick={ () => setCount(count + 1) }>I have been clicked {count} times!</button>
      <div css={{ background: 'blue', width: '10px', height: '10px' }} />
    </div>
  );
};

export default Title;