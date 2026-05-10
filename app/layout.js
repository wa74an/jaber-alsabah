import './globals.css';

export const metadata = {
  title: 'Jaber AlSabah · F4 Driver',
  description:
    "Official site of Jaber AlSabah — Kuwaiti driver, Wera Tools F4 British Championship, Xcel Motorsport. Rookie P1.",
  metadataBase: new URL('https://jab3ralsabah.com'),
  openGraph: {
    title: 'Jaber AlSabah · F4 Driver',
    description: 'Kuwaiti F4 driver. Rookie P1. #83.',
    url: 'https://jab3ralsabah.com',
    siteName: 'Jaber AlSabah',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
