import '@dalgu/core-design-system/src/foundations/globals.css';

export const metadata = {
  title: 'Product Artist | KyungHwan Kim',
  description: 'Product Artist',
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
