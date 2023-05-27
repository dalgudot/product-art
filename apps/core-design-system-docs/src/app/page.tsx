import TestButtonComponent from '@/components/TestButtonComponent';
import s from './page.module.css';

export default function Home() {
  return (
    <main className={s.main}>
      <TestButtonComponent />
    </main>
  );
}
