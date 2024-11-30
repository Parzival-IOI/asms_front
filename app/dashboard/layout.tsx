
import MainNav from "@/components/NavigationBar/MainNav";
import SideBar from "@/components/NavigationBar/sidebar/SideBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col md:flex-row overflow-y-hidden relative p-0 m-0 transition-opacity duration-200 gap-1">
      <SideBar/>
      <div className="w-full">
        {children}
      </div>
    </main>
  );
}
