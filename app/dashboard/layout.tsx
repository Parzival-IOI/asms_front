import { Menu, Password } from "@/components/Icon";
import MainNav from "@/components/NavigationBar/MainNav";
import { cookies } from "next/headers";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen flex-col md:flex-row overflow-x-hidden relative p-0 m-0 transition-opacity duration-200">
      <div className="flex-grow">
        <MainNav />
        <div className='px-6 md:overflow-y-auto md:px-4 '>
          {children}
        </div>
      </div>
    </main>
  );
}
