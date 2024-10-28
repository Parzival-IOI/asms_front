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
  console.log(body);

  //fetchinng
  const url = process.env.API + "auth/login";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: body,
    cache: 'no-store'
  })
  console.log(url);
  if(res.ok) {
    console.log("1");
    data = await res.json()
    console.log("2");
    if(data !== null) {
    //set cookie when success
      cookies().set("asms-session", data.accessToken, { httpOnly: true });
      cookies().set("asms-session-refresh", data.refreshToken, { httpOnly: true });
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
  cookies().delete("asms-session");
  cookies().delete("asms-session-refresh");
  redirect("/login");
}