import '../styles/globals.css';
import Header from './header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>NEXTJS KENT</title>
      </head>
      <body>
      <Header/>
        {children}
      </body>
    </html>
  );
}
