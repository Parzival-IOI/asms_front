import Breadcrumb from "@/components/common/Breadcrumb"
import QueryClientPV from "@/components/common/QueryClientPV"
import DepartmentUpdate from "@/components/Department/DepartmentUpdate"


const page = () => {
  return (
    <>
    <div className="overflow-y-auto h-[90vh]">
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-2">
            <div className="mb-2 col-span-full xl:mb-2 flex justify-between pr-4">
                <Breadcrumb />
                <h1 className="text-lg font-semibold text-gray-900 sm:text-2xl dark:text-white">Admin</h1>
            </div>
            {/* <QueryClientPV>
                <DepartmentUpdate />
            </QueryClientPV> */}
            
        </div>
    </div>
    
    </>
  )
}

export default page