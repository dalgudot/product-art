'use client';

import { Button } from '@dalgu/core-design-system';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useRouter } from 'next/navigation';

// https://stackoverflow.com/questions/74421327/nextrouter-was-not-mounted-next-js
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#the-userouter-hook
export default function Home() {
  const router: AppRouterInstance = useRouter();

  console.log('router', router);

  function toggleLanguage(router: AppRouterInstance) {
    router.push('/ko');
  }

  return (
    <main>
      <Button label='버튼' onClick={() => toggleLanguage(router)} />
    </main>
  );
}
