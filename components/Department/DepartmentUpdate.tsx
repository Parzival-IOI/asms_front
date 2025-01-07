'use client';
import ModelsPop from "../common/ModelsPop";
import { CreateDepartmentAction } from "@/libs/Department/CreateDepartment";
import { toast } from "sonner";
import Loader from "../Loader";
import { useMutation } from "@tanstack/react-query";

const DepartmentUpdateField = [
  {
    id: 1,
    name: "department_name",
    type: "text",
    options: [],
    required: true,
    readonly: false,
  }
];

const DepartmentUpdate = () => {
  const{mutate: server_createDepartment, isPending} = useMutation({
    mutationFn: CreateDepartmentAction,
    onSuccess: () => {
      toast.success("Success");
    },
    onError: (e) => {
      toast.error(e.message);
    }
  })
  
  return (
    <>
      <ModelsPop action={server_createDepartment} field={DepartmentUpdateField} />
      {isPending && <Loader />}
    </>
  )
}

export default DepartmentUpdate;
