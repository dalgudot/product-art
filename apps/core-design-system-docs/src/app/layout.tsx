import '@dalgu/core-design-system/src/shared/colors-1.css';
import '@dalgu/core-design-system/src/foundations/globals.css';
import '@dalgu/core-design-system/src/shared/text-styles-1.css';

export const metadata = {
  title: 'Core Design System',
  description: 'Core Design System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
