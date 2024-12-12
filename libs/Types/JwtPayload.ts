export type JwtPayload = {
  iss: string,
  sub: string,
  role: string,
  exp: number,
  iat: number,
}