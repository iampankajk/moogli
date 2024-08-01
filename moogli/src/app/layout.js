export const metadata = {
  title: 'Moogli',
  description: 'An amazing platform to track co2 emissions',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
