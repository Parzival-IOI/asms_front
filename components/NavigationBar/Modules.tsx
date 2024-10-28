'use client'
import MenuList from '@/data/modules.json'
import { Switch } from '@headlessui/react'
import Link from 'next/link'
import { useState } from 'react'
import { Cross } from '../Icon'

const Modules = (props: {toggleModules: Function}) => {

  const [isList, setList] = useState<boolean>(false);

  return (
    <div className="hidden text-black dark:text-white lg:block w-full h-screen px-8 pb-8 pt-4 bg-slate-300 dark:bg-slate-950">

    <div className='flex justify-end items-center gap-2 mb-8'>
      <div className='mr-auto font-extrabold text-xl' >CAD</div>
      <span className="">{isList? 'List' : 'Clump'}</span>
      <Switch
            checked={isList}
            onChange={setList}
            className="group inline-flex h-4 w-7 items-center rounded-full bg-slate-500 data-[checked]:bg-orange-400 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
          >
        <span className="size-2 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-4" />
      </Switch>
      <button className='ml-4 bg-slate-500/50 rounded-md hover:opacity-70 transition-opacity duration-300' onClick={() => props.toggleModules()}>
        <Cross size='26' />
      </button>
    </div>

    <div className={`w-full transition-all duration-1000 ${isList ? 'flex gap-2 flex-col justify-start items-center' : 'grid grid-cols-3 gap-8'}`}>
      {
        MenuList.module.map((menu, index) => {
          return (
            <Link href={menu.path} key={index} className={`${isList ? 'w-full rounded-lg px-3 py-2' : 'w-full aspect-square rounded-md text-center'} transition-all duration-300 bg-orange-600/90 hover:opacity-80`}>
              {isList ? menu.name : menu.short}
            </Link>
          )
        })
      }
    </div>

      
    </div>
  )
}

export default Modules