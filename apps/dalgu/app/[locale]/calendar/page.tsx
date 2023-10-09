'use client';

import type { NextPage } from 'next';
import s from './page.module.css';
import IconCalendarLogo24 from '../../../components/svg/icon-calendar-logo-24';
import { useRouter } from 'next/navigation';
import { Button } from '@dalgu/core-design-system';

const CalendarHome: NextPage = () => {
  const router = useRouter();

  function goToCalendarAppStore() {
    router.push(
      'https://apps.apple.com/app/calendar-schedule-planner/id6467635137'
    );
  }

  return (
    <main className={s.main}>
      <IconCalendarLogo24 />
      <h1>Calendar</h1>
      <p>Only What You Need</p>
      <Button
        label='Learn More'
        onClick={goToCalendarAppStore}
        buttonColor='var(--gray6)'
      />
    </main>
  );
};

export default CalendarHome;
