'use client';

import type { NextPage } from 'next';
import IconYoonSeulLogo24 from '../../../components/svg/icon-yoonseul-logo-24';
import s from './page.module.css';
import { Button } from '@dalgu/core-design-system';
import { useRouter } from 'next/navigation';

const YoonSeulHome: NextPage = () => {
  const router = useRouter();

  function goToReminderAppStore() {
    router.push('https://apps.apple.com/app/id1618657913');
  }

  return (
    <main className={s.main}>
      <IconYoonSeulLogo24 />
      <h1>YoonSeul</h1>
      <p>Momentary Record</p>
      <Button
        label='Learn More'
        onClick={goToReminderAppStore}
        buttonColor='var(--gray6)'
      />
    </main>
  );
};

export default YoonSeulHome;
