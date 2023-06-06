import type { NextPage } from 'next';
import Privacy from '../../../../components/policy/privacy';

const TodayToDoPrivacy: NextPage = () => {
  return (
    <Privacy
      appName='Today To Do'
      contactEmail='todaytodo.application@gmail.com'
    />
  );
};

export default TodayToDoPrivacy;
