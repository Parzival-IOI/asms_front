import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import Link from "next/link"

const MenuList = (props: {icon: any, name: string, items: {name: string, path: string}[]}) => {
  return (
    <Disclosure>
      <DisclosureButton className="group flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
        {props.icon}
        <span className="flex-1 ml-3 text-left whitespace-nowrap" >{props.name}</span>
        <svg className="w-6 h-6 group-data-[open]:rotate-180 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </DisclosureButton>
      <DisclosurePanel>
        <ul id="dropdown-crud" className="space-y-2 py-2">
          {
            props.items.map((item, index) => {
              return (
                <li key={index} >
                  <Link href={item.path} className="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700" >{item.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default MenuList