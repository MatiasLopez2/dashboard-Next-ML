import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next JS - Lopez</title>
        <meta name="description" content="Proyecto creado con Next Js y Tailwind CSS" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
