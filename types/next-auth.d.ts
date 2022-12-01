import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string
      address: string
      role: string
    }
  }
  interface User {
    id: string
    address: string
    role: string
  }
}

declare module "next-auth/jwt" {
    interface JWT {
        address: string
        role: string
    }
}