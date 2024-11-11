
import MainNav from "@/components/NavigationBar/MainNav";
import SideBar from "@/components/NavigationBar/sidebar/SideBar";
import { getRole } from "@/libs/login/action";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col md:flex-row overflow-x-hidden relative p-0 m-0 transition-opacity duration-200">
      <SideBar/>
      {children}
    </main>
  );
}
