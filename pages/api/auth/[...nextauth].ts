import prisma from "../../../scripts/prisma"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import { ethers } from "ethers"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "ronin",
            name: "Ronin",
            credentials: {
                message: {
                    label: "Message",
                    type: "text",
                    placeholder: "0x0",
                },
                signature: {
                    label: "Signature",
                    type: "text",
                    placeholder: "0x0",
                },
                nonce: {
                    label: "Nonce",
                    type: "text",
                },
            },
            async authorize(credentials) {
                if (credentials) {
                    const returnedNonce = credentials.message.split("unique code: ")[1].split('"')[0]
                    if (returnedNonce !== credentials.nonce) {
                        throw new Error("Invalid Nonce-Message Pair")
                    }
                    const signerAddress = ethers.utils.verifyMessage(credentials.message, credentials.signature)

                    if (signerAddress) {
                        await prisma.nonce.delete({ where: { nonce: credentials.nonce } })
                    }

                    const currentUser = await prisma.user.findUnique({
                        where: {
                            address: signerAddress
                        }
                    })

                    if (currentUser) {
                        return {
                            id: currentUser.id.toString(),
                            address: currentUser.address,
                            role: currentUser.role
                        }
                    } else {
                        const newUser = await prisma.user.create({
                            data: {
                                address: signerAddress,
                            }
                        })
                        if (newUser) {
                            return {
                                id: newUser.id.toString(),
                                address: newUser.address,
                                role: newUser.role
                            }
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
                    role: user.role,
                    address: user.address
                }
            }
            return token
        },
        // Pull user info from token into session
        async session({ session, token }) {
            session.user.address = token.address
            session.user.role = token.role
            return session
        },
        async redirect({ url }) {
            return url
        },
    },
}

export default NextAuth(authOptions)