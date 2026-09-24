import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sanjiv Motilal Choudhari — Data Scientist & AI Engineer',
  description:
    'Portfolio of Sanjiv Motilal Choudhari, a Data Scientist and AI Engineer working across machine learning, NLP, LLMs, forecasting, and graph analytics.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
