'use client';

import type { NextPage } from 'next';
import IconReminderLogo24 from '../../../components/svg/icon-reminder-logo-24';
import s from './page.module.css';
import { Button } from '@dalgu/core-design-system';
import { useRouter } from 'next/navigation';

const ReminderHome: NextPage = () => {
  const router = useRouter();

  function goToReminderAppStore() {
    router.push(
      'https://apps.apple.com/kr/app/reminder-to-do-list/id6444939279'
    );
  }

  return (
    <main className={s.main}>
      <IconReminderLogo24 />
      <h1>Reminder</h1>
      <p>Only What You Need</p>
      <Button
        label='Learn More'
        onClick={goToReminderAppStore}
        buttonColor='var(--gray6)'
      />
    </main>
  );
};

export default ReminderHome;
