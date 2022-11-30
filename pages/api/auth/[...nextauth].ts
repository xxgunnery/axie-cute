import prisma from "../../../scripts/prisma"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "ronin",
            name: "Ronin",
            credentials: {
                address: { label: "Ronin address", type: "text", placeholder: "ronin:..." }
            },
            async authorize(credentials) {
                if (credentials) {
                    const currentUser = await prisma.user.findUnique({
                        where: {
                            address: credentials.address
                        }
                    })
                    if (currentUser) {
                        return { id: currentUser.id.toString(), address: currentUser.address }
                    } else {
                        const newUser = await prisma.user.create({
                            data: {
                                address: credentials.address
                            }
                        })
                        if (newUser) {
                            return { id: newUser.id.toString(), address: newUser.address }
                        } else {
                            return null
                        }
                    }
                }
                return null
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user }) {
            return true
        },
        // Save user info from sign on process into token
        async jwt({ token, user }) {
            if (user) {
                token = {
                    address: user.address
                }
            }
            return token
        },
        // Pull user info from token into session
        async session({ session, token }) {
            session.user.address = token.address
            return session
        },
        async redirect({ url }) {
            return url
        },
    },
}

export default NextAuth(authOptions)