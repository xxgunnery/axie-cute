import React from 'react'
import { Box, Button, Flex, Heading, Image, ListItem, UnorderedList, VStack } from "@chakra-ui/react";
import axios from 'axios'
import { ethers, providers } from 'ethers'
import WalletConnectProvider from "@walletconnect/web3-provider"
import { signIn, SignInOptions } from 'next-auth/react';

export default function Login() {

    const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false)
    const [showFAQ, setShowFAQ] = React.useState<boolean>(false)

    //Connect your Ronin wallet
    async function connectToRonin() {
        setIsLoggingIn(true)
        const nonce = await axios.get("api/auth/generateNonce").then((result) => result.data.nonce)
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

    return (
        <VStack
            minH="100%"
            alignItems="center"
            justifyContent="center"
        >
            <Image src="/images/axies/axie-9298317.png" w="300px" />
            <VStack
                justifyContent="center"
                bg="gray.900"
                borderRadius="10px"
                border="1px solid rgba(255,255,255,0.5)"
                p="20px"
                w={{ base: "90%", md: "auto" }}
            >
                <Heading textAlign="center">
                    Welcome to Axie-Cute!
                </Heading>
                <Box textAlign="center">
                    Ready to browse some adorable axies? Get started by signing in!
                </Box>
                <VStack alignItems="center">
                    <Button disabled={isLoggingIn} onClick={() => connectToRonin()}>
                        Sign In Using AxieDAO SSO!
                    </Button>
                    <Button
                        bg="black"
                        border="1px solid rgba(255,255,255,0.3)"
                        borderRadius="50%"
                        p="0px!important"
                        fontSize="30px"
                        h="40px"
                        minW="40px!important"
                        onClick={() => setShowFAQ((prev) => !prev)}
                    >
                        ?
                    </Button>
                </VStack>
                <VStack
                    bg="black"
                    border="1px solid rgba(255,255,255,0.3)"
                    borderRadius="5px"
                    zIndex="0"
                    mt={showFAQ ? "10px" : "0px"}
                    p={showFAQ ? "10px" : "0px"}
                    height={showFAQ ? "100%" : "0px"}
                    opacity={showFAQ ? "100%" : "0%"}
                    transform={showFAQ ? "translate(0,0) scale(1)" : "translate(0,100%) scale(0)"}
                    transition="transform 0.3s"
                >
                    <Heading size="md">
                        Sign-In FAQ
                    </Heading>
                    <UnorderedList w="90%">
                        <ListItem>
                            You will be redirected to the AxieDAO SSO page where you will need to unlock your wallet and sign a message using your Ronin wallet.
                        </ListItem>
                        <ListItem>
                            If you don&apos;t have an account with Axie-Cute, an account will automatically be created.
                        </ListItem>
                        <ListItem>
                            Upon creating an account with Axie-Cute, your axies will be added to the Axie-Cute ecosystem. Your axies are will be able to be rated by other users of the app!
                        </ListItem>
                    </UnorderedList>
                </VStack>
            </VStack>
        </VStack>
    )
}