"use client";
import { toast } from "sonner";
import { Password } from "../Icon"
import { useMutation } from "@tanstack/react-query";
import { SignOutAction } from "@/libs/login/action";
import Loader from "../Loader";

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
      <button className="flex justify-evenly gap-2 hover:bg-orange-500/50 px-3 py-2 rounded-md text-sm" 
        onClick={() => SigningOut()}>
        <Password size="18" />
        <div className="hidden md:block">Sign Out</div>
      </button>
    </>
    
  )
}

export default SignOut