"use server";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export const login = async (formData: FormData) => {
  //validate data
  const username = formData.get("username")
  const password = formData.get("password")

  if(username == "" || password == ""){
    throw new Error("Username or Password Empty")
  }

  //define data
  let data = null;
  const body = JSON.stringify({
    username: username,
    password: password
  })

  //fetchinng
  const url = process.env.API + "/auth/signin";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: body,
    cache: 'no-store'
  })
  if(res.ok) {
    data = await res.json()
    console.log(data);
    if(data !== null) {
    //set cookie when success
      cookies().set("quiz-session", data.access_token, { httpOnly: true });
      cookies().set("quiz-session-refresh", data.refresh_token, { httpOnly: true });
    }
  }
  else {
    const err = await res.text();
    // if(err === "User Not Found" || err === "Bad credentials" || err === "Blocked") 
    throw new Error(err);
  }
    
  if(data !== null) {
    redirect("/");
  }
}


export const SignOutAction = async () => {
  cookies().delete("quiz-session");
  cookies().delete("quiz-session-refresh");
  redirect("/login");
}