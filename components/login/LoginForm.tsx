'use client'
import { login } from '@/libs/login/action';
import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { toast } from 'sonner';
import { Password, User } from '../Icon';
import Loader from '../Loader';

const LoginForm = () => {

  const{mutate: loginingOut, isPending} = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Sign In Successfully");
    },
    onError: (e) => {
      toast.error(e.message);
    }
  })

  return (
    <>
      {isPending && <Loader />}
      <form className="pt-8 lg:pt-4 min-w-[80vw] sm:min-w-[50vw] lg:min-w-[30rem] h-auto grid grid-cols-1 gap-2" action={loginingOut}>
        <div className="mt-2">
          <div className="w-full flex flex-row-reverse rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input type="text" name="username" id="username" autoComplete="username" 
            className="w-full block flex-1 peer border-0 outline-none bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
            placeholder="Anorak" />
            <span className="flex select-none items-center px-3 sm:text-sm border-r dark:border-white border-gray-300 peer-focus:border-r-2 peer-focus:border-indigo-600">
              <span className="md:block hidden">Username</span>
              <span className="md:hidden block"><User size="20" /></span>
            </span>
          </div>
        </div>

        <div className="mt-2">
          <div className="w-full flex flex-row-reverse rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input type="password" name="password" id="password" autoComplete="password" 
            className="w-full block flex-1 peer border-0 outline-none bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
            placeholder="" />
            <span className="flex select-none items-center px-3 sm:text-sm border-r dark:border-white border-gray-300 peer-focus:border-r-2 peer-focus:border-indigo-600">
              <span className="md:block hidden">Password</span>
              <span className="md:hidden block"><Password size="20" /></span>
            </span>
          </div>
        </div>

        <div className="mt-2 sm:max-w-md">
          <button type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Login
          </button>
        </div>

      </form>
    </>
    
  )
}

export default LoginForm