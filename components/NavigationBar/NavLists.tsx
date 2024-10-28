import QueryClientPV from "../common/QueryClientPV"
import SignOut from "./SignOut"

const NavLists = () => {
  return (
    <div className="w-full flex justify-end">
        <QueryClientPV>
          <SignOut />
        </QueryClientPV>
    </div>
  )
}

export default NavLists