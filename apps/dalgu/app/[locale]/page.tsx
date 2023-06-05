import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import ThemeToggle from '../../components/ThemeToggle';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
      <h1>{t('title')}</h1>

      <ThemeToggle />
      <Link href='/' locale='ko'>
        Switch to Korean
      </Link>

      <Link href='/' locale='en'>
        Switch to English
      </Link>
    </>
  );
}
