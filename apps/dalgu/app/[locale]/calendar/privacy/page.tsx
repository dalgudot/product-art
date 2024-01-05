import type { NextPage } from 'next';
import Privacy from '../../../../components/policy/privacy';

const CalendarPrivacy: NextPage = () => {
  return (
    <Privacy appName='Scheduler' contactEmail='calendar.dalgu.app@gmail.com' />
  );
};

export default CalendarPrivacy;
