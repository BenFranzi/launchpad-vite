import { ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  value: string;
}

export default function Title({ value }: Props): ReactNode {
  return (
    <h1 className={ styles.title }>{value}</h1>
  );
}