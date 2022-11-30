import React from 'react'
import { Box, Button, VStack } from "@chakra-ui/react";
import axios from 'axios'
import { ethers, providers } from 'ethers'
import WalletConnectProvider from "@walletconnect/web3-provider"
import { signIn, SignInOptions } from 'next-auth/react';

async function connectMobileProvider() {
    const provider = new WalletConnectProvider({
        bridge: "https://bridge.walletconnect.org",
        rpc: { "2020": "https://api.roninchain.com/rpc" },
        qrcode: false,
    })

    provider.connector.on("display_uri", (err, payload) => {
        const uri = payload.params[0]
        console.log(uri)
        const encoded = encodeURIComponent(uri)
        console.log(encoded)
        const url = `https://wallet.roninchain.com/auth-connect?uri=${encoded}`
        window.open(url, "_self")
    })

    await provider.enable()
    const web3Provider = new providers.Web3Provider(provider)
    return web3Provider
}

async function isUnlocked(provider: ethers.providers.JsonRpcProvider) {
    let isUnlocked: boolean
    try {
        const accounts = await provider.listAccounts()
        isUnlocked = accounts.length > 0
    } catch (e) {
        console.log("error:", e)
        isUnlocked = false
    }
    return isUnlocked
}

async function getConnectionDetails() {
    console.log("GETTING")
    const { nonce, message } = await axios.get("/api/auth/generateNonce").then(async (result) => {
        const nonce = result.data.data
        console.log("generated nonce result:", nonce)
        const message =
            "Axie-Cute Ronin Secure Sign On: " + nonce
        return { nonce, message }
    })

    console.log("message:", message)
    console.log("nonce:", nonce)

    const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)

    let web3Provider, signature, connectRequestBody

    if (!isMobile) {
        if (window.ronin === undefined) {
            return -1
        }
        web3Provider = new ethers.providers.Web3Provider(window.ronin.provider)
    } else {
        //check for the case of touch screen devices with
        web3Provider = await connectMobileProvider()
    }

    if (await isUnlocked(web3Provider)) {
        signature = await web3Provider.getSigner().signMessage(message)

        connectRequestBody = {
            message: message,
            nonce: nonce,
            address: await web3Provider.getSigner().getAddress(),
            signature: signature,
            redirect: false,
        }
        console.log("connectBody:", connectRequestBody)
    } else {
        alert("You must unlock your Ronin wallet.")
    }

    return connectRequestBody
}

export default function Login() {

    const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false)

    //Connect your Ronin wallet
    async function connectToRonin() {
        setIsLoggingIn(true)
        console.log("Ronin Wallet Connect")
        const connectionDetails = await getConnectionDetails()
        if (!connectionDetails) {
            setIsLoggingIn(false)
            return
        }
        if (connectionDetails === -1) {
            alert("Ronin wallet is not installed!")
            setIsLoggingIn(false)
            return
        } else {
            const connectRequestBody: SignInOptions = connectionDetails

            await signIn("ronin", connectRequestBody).then((result) => {
                console.log("Sign In Result:", result)
                if (result.status === 200) {
                    setIsLoggingIn(false)
                } else {
                    console.log(result.error)
                    setIsLoggingIn(false)
                }
            })
        }
    }


    return (
        <VStack>
            <Box>
                Log In Pls
            </Box>
            <Button onClick={() => connectToRonin()}>
                Connect
            </Button>
        </VStack>
    )
}