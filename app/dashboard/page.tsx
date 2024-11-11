import Modules from "@/data/modules.json";
import { getRole } from "@/libs/login/action";
import Link from "next/link"

const page = async () => {
  const role = await getRole();
  return (
    <div className="w-screen h-screen flex justify-center items-start md:items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-4/5 md:w-1/2">
        {
          Modules.module.map((modules, index) => {
            if (!modules.role.includes(role)) {
              return
            }
            return (
              <Link href={modules.path} key={index} className="aspect-video flex justify-center items-center gap-4 bg-slate-800/50 text-white dark:bg-slate-400/50 dark:bg-slate-800 rounded-lg hover:opacity-80 transition-opacity">
                <span>{modules.name}</span>
                <span dangerouslySetInnerHTML={{ __html: modules.icon }}></span>
              </Link>
            )
          })  
        }
        
      </div>
    </div>
  )
}

export default page