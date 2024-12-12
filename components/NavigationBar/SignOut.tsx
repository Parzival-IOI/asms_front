"use client";
import { toast } from "sonner";
import { Exit, Password } from "../Icon"
import { useMutation } from "@tanstack/react-query";
import { SignOutAction } from "@/libs/login/action";
import Loader from "../Loader";
import { Tooltip } from "antd";

const SignOut = () => {

  const{mutate: SigningOut, isPending} = useMutation({
    mutationFn: SignOutAction,
    onSuccess: () => {
      toast.success("Sign Out Successfully");
    },
    onError: (e) => {
      toast.error(e.message);
    }
  })

  return (
    <>
      {isPending && <Loader/>}
      <Tooltip title="Logout" trigger="hover">
        <button className="flex justify-center items-center w-[2.5rem] aspect-square overflow-hidden rounded-full hover:bg-orange-500/50" 
          onClick={() => SigningOut()}>
          <Exit size="22" />
          <div className="hidden md:block logout"></div>
        </button>
      </Tooltip>
    </>
    
  )
}

export default SignOut