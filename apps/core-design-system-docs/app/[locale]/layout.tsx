import '@dalgu/core-design-system/src/foundations/fonts.css';
import '@dalgu/core-design-system/src/foundations/colors-1.css';
import '@dalgu/core-design-system/src/foundations/text-styles-1.css';
import '@dalgu/core-design-system/src/foundations/globals.css';
import { useLocale } from 'next-intl';
import { Providers } from './providers';

export const metadata = {
  title: 'KyungHwan Kim',
  description: 'Product Designer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  return (
    // suppressHydrationWarning은 next-theme 에러 방지 위해 추가
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
