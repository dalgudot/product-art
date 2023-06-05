import '@dalgu/core-design-system/src/foundations/globals.css';
import { useLocale } from 'next-intl';

export const metadata = {
  title: 'Product Artist | KyungHwan Kim',
  description: 'Product Artist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
