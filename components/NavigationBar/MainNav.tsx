"use client";
import Link from "next/link"
import { Menu } from "../Icon"
import NavLists from "./NavLists";
import { useState } from "react";
import Modules from "./Modules";
import { usePathname } from "next/navigation";

const MainNav = (props: {role: string}) => {

  const [openModule, setModule] = useState<boolean>(false);

  const toggleModules = () => setModule(e => !e);
  const path = usePathname()

  return (
    <>
      {
        path === "/login" || path === "/" || path === "" ?
        <div>new nav</div>
        :
        <div className="hidden lg:flex w-full h-5 md:h-14 lg:h-16 dark:bg-slate-900 bg-slate-300/40 p-3 justify-between items-center shadow-none dark:shadow-white">
          <div className={`left-0 ${openModule ? 'translate-x-0' : 'translate-x-[-100%]'} top-0 absolute z-50 w-1/4 transition duration-1000`}>
            <Modules toggleModules={toggleModules} role={props.role} />
          </div>
          <div className={`${openModule ? 'left-0' : 'left-[-100%]'} top-0 absolute z-[49] w-screen h-screen bg-slate-800/50`} onClick={toggleModules}></div>
          
          <div className="flex justify-between items-center lg:h-20 h-[3rem] px-4 gap-4 w-full">
            <div className="bg-rose-500 w-[2.5rem] aspect-square p-1 rounded-lg flex justify-center items-center text-yellow-300 hover:opacity-80"
              onClick={toggleModules}>
              <Menu size="26" />
            </div>
            <Link className='text-md font-bold hover:opacity-80 w-96' href="/dashboard" >
              Customized Advance Dashboard
            </Link>
            <NavLists />
          </div>
        </div>
      }
      
    </>

  )
}

export default MainNav