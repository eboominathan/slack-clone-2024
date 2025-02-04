import type { Metadata } from "next";
import { Lato } from "next/font/google";
import '@/styles/globals.css';
import { Toaster } from "sonner";
// import { Analytics } from "@vercel/analytics/react"

const lato = Lato({ subsets: ["latin"],weight:['100','300','400','700','900'] });

export const metadata: Metadata = {
  title: "Slack Clone 2024",
  description: "Boominathan Elango Fullstack Slack Clone using Next.js 15, Postgresql, Supabase, Typescript, Bun, Socket.io ",
};
export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main>
        {children}
        </main>
        <Toaster />
      {/* <Analytics /> */}
      </body>
    </html>
  );
}

