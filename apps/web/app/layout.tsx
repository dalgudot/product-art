import 'core-design-system/foundations/fonts.css';
import 'core-design-system/foundations/global.css';

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
