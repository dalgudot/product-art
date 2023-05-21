// 'use client';

import { Button, Header } from '@dalgu/core-design-system';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header text='dalgu' />
      <Button />
    </main>
  );
}
