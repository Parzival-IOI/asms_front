import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import { Toaster } from "sonner";
import { Cross } from "@/components/Icon";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "CAD",
  description: "Customized Advance Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Toaster position="bottom-right" visibleToasts={1} expand={true} richColors closeButton />
        {children}
      </body>
    </html>
  );
}
