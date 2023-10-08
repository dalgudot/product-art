import type { NextPage } from 'next';
import s from './page.module.css';
import IconCalendarLogo24 from '../../../components/svg/icon-calendar-logo-24';

const CalendarHome: NextPage = () => {
  return (
    <main className={s.main}>
      <IconCalendarLogo24 />
      <h1>Calendar</h1>
      <p>Only What You Need</p>
    </main>
  );
};

export default CalendarHome;
