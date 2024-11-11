import Link from "next/link"

const ButtomSideBar = (props: {icon: any, name: string, path: string}) => {
  return (
    <li>
      <Link href={props.path} className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
          {props.icon}
          <span className="ml-3" >{props.name}</span>
      </Link>
    </li>
  )
}

export default ButtomSideBar