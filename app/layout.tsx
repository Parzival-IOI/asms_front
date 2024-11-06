import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import { Toaster } from "sonner";
import { getRole } from "@/libs/login/action";
import MainNav from "@/components/NavigationBar/MainNav";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "CAD",
  description: "Customized Advance Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const role = await getRole();
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <MainNav role={role} />
        <Toaster position="bottom-right" visibleToasts={1} expand={true} richColors closeButton />
        {children}
      </body>
    </html>
  );
}
