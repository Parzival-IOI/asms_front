import Image from "next/image"
import QueryClientPV from "../common/QueryClientPV"
import SignOut from "./SignOut"
import { User } from "../Icon"
import Link from "next/link"
import { Tooltip } from "antd"

const NavLists = () => {
  return (
    <div className="w-full flex justify-end gap-2">
        <QueryClientPV>
          <SignOut />
        </QueryClientPV>
        <Tooltip title="Profile" trigger="hover">
          <div className="flex justify-center items-center w-[2.5rem] aspect-square overflow-hidden rounded-full hover:bg-orange-500/50" >
            <Link href="/dashboard/profile" >
                <User size="22" />
            </Link>
          </div>
        </Tooltip>
        
    </div>
  )
}

export default NavLists