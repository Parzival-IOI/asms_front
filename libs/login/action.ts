"use server";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { JwtPayload } from './Types/JwtPayload';

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
  if(res.ok) {
    data = await res.json()
    if(data !== null) {
    //set cookie when success
      cookies().set("asms-session", data.accessToken, { httpOnly: true });
      cookies().set("asms-session-refresh", data.refreshToken, { httpOnly: true });
    }
  }
  else {
    const err = await res.text();
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

export async function parseJwt(token: string | undefined) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(atob(base64));
}

export async function getRole() {
  const token = cookies().get("quiz-session")?.value;
  const data: JwtPayload|null = await parseJwt(token);
  if(!data) return "";
  return data.role;
} 