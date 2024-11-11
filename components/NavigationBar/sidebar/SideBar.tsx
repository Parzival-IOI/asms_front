"use client";
import { Payment } from "@/components/Icon"
import MenuList from "./MenuList"
import ButtomSideBar from "./ButtomSideBar"
import { usePathname } from "next/navigation";


const SideBar = () => {
  const path = usePathname();
  return (
    <>
      {
        path === "/dashboard" ?
        <></>
        : 
        <aside className="relative top-0 left-0 flex flex-col flex-shrink-0 w-64 h-[92vh] font-normal duration-75 transition-width">
          <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-slate-800 dark:border-gray-700">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 space-y-1 divide-y divide-gray-200 bg-white dark:bg-slate-800 h-full">
                <ul className="pb-2 space-y-2">
                  <MenuList name="CRUD" icon={<Payment size="24" />} items={[{path: "", name: "Create"}, {path: "", name: "Update"}]} />
                  <ButtomSideBar name="CRUD" icon={<Payment size="24" />} path="" />
                </ul>
              </div>
            </div>
          </div>
        </aside>
      }
    </>
    
  )     
}

export default SideBar