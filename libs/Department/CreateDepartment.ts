"use server"

import { customFetch } from "../customFetch";

export const CreateDepartmentAction = async (formData: FormData) => {
  try {
    const url = "v1/department/create/department";
    console.log(formData.get("department_name"), url)
    const res = await customFetch(url, "POST",
      JSON.stringify({
        departmentName: formData.get("department_name")
      }),
    )
    console.log(await res.json())
    if(res.ok) {
      const data = await res.text();
      console.log(data)
      return data;
    } else {
      console.log(res);
      throw new Error(await res.text());
    }
  } catch(error) {
    console.log(error);
  }
}