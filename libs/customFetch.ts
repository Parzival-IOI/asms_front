import { cookies } from "next/headers";
import { TokenResponse } from "@/libs/Types/TokenResponse";
import { permanentRedirect } from "next/navigation";

export async function customFetch(url: string, method: string, body: any) {
  const accessToken = "Bearer " + cookies().get("asms-session")?.value
  const res = await fetch(
    process.env.API + url,
    {
      method: method,
      headers: {
        "Content-type": "application/json",
        Authorization : accessToken
      },
      body: body
    }
  )
  console.log(process.env.API + url);
  if(!res.ok) {
    const role = await fetch(
      process.env.API + "auth/connection",
      {
        method: "POST",
        headers: { 
          "Content-type": "application/json",
          Authorization : accessToken
        }
      }
    )
    if(role.ok) {
      throw new Error(await res.text());
    }
    else {
      const refreshToken = "Bearer " + cookies().get("asms-session-refresh")?.value;
      const token = await fetch(
        process.env.API + "auth/refresh",
        {
          method: "POST",
          headers: {
            Authorization : refreshToken
          }
        }
      )
      if(token.ok) {
        const data: TokenResponse = await token.json();
        console.log(data);
        cookies().set("asms-session", data.accessToken, { httpOnly: true });
        cookies().set("asms-session-refresh", data.refreshToken, { httpOnly: true });
        
        const newRes = await fetch(
          url,
          {
            method: method,
            headers: { 
              "Content-type": "application/json",
              Authorization : "Bearer " + data.accessToken
            },
            body: body
          }
        )
        if(newRes.ok) {
          return newRes;
        }else {
          throw new Error(await newRes.text())
        }
      }
      else {
        permanentRedirect("/login");
      }
    }
  }
  return res;
}