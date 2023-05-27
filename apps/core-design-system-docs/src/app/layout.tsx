import '@dalgu/core-design-system/src/foundations/colors-common.css';
import '@dalgu/core-design-system/src/foundations/colors-small-app.css';
import '@dalgu/core-design-system/src/foundations/globals.css';
import '@dalgu/core-design-system/src/foundations/text-styles.css';

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
