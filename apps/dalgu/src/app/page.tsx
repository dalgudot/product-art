'use client';

import styles from './page.module.css';
import { Button, Header } from '@dalgu/core-design-system';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header text='Header' />
      <Button />
    </main>
  );
}
