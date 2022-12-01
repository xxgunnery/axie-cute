import axios from "axios"
import { signIn } from "next-auth/react"
import React from "react"
import DesktopNav from "./Navbar/DesktopNav"
import MobileNav from "./Navbar/MobileNav"

export default function Navbar({ isDesktopNav }: any) {

    const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false)

    //Connect your Ronin wallet
    async function connectToRonin() {
        setIsLoggingIn(true)
        const nonce = await axios.get("/api/auth/generateNonce").then((result) => result.data.nonce)
        const message = "Welcome to Axie-Cute! Your unique code: " + nonce

        console.log({ message, nonce })
        const url = 'https://ronin.axiedao.org/sso/?ref=' + encodeURIComponent(window.parent.location.href) + "&message=" + message + "&autoclose=true"

        const RoninSignatureWindow = window.open(url)

        let response = {}
        window.addEventListener('message', async function receiveSig(event) {
            if (typeof event.data === 'object' && 'key' in event.data && event.data.key === 'signature' && event.origin === 'https://ronin.axiedao.org') {
                RoninSignatureWindow?.close();
                window.removeEventListener('message', receiveSig, false)
                response = { ...event.data.message, nonce }
                console.log({ response })
                await signIn("ronin", response).then((result) => {
                    if (result) {
                        console.log("Sign In Result:", result)
                        if (result.status === 200) {
                            setIsLoggingIn(false)
                        } else {
                            console.log(result.error)
                            setIsLoggingIn(false)
                        }
                    }
                })
            }
        })
    }

    if (isDesktopNav) {
        return <DesktopNav connectToRonin={connectToRonin}/>
    } else {
        return <MobileNav connectToRonin={connectToRonin}/>
    }
}
