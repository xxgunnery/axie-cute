import React from 'react'
import { Box, Button, Flex, Heading, Image, Link, ListItem, UnorderedList, VStack } from "@chakra-ui/react";
import axios from 'axios'
import { signIn } from 'next-auth/react';

export default function Login({ setSignInLater, setDummyUser }: { setSignInLater: (value: boolean) => void, setDummyUser: (value: string) => void }) {

    const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false)
    const [showFAQ, setShowFAQ] = React.useState<boolean>(false)

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

    async function createDummyUser() {
        setSignInLater(true)
        setIsLoggingIn(true)
        const dummyUser = await axios.get("/api/auth/createDummyUser").then((result) => result.data)
        if (!dummyUser) {
            setIsLoggingIn(false)
            return
        } else {
            setDummyUser(dummyUser.address)
            setIsLoggingIn(false)
        }
    }

    return (
        <VStack
            minH="90vh"
            alignItems="center"
            justifyContent="center"
            fontSize="15px"
        >
            <Image src="/images/axies/axie-9298317.png" w={{base: "240px", md: "270px"}} mt="20px" />
            <Box
                bg="gray.700"
                p="5px"
                mb="30px"
                borderRadius="5px"
                textAlign="center"
                w={{ base: "95%", md: "600px" }}
            >
                Have feedback for Axie-Cute? Please visit <Link href="https://twitter.com/xxgunnery">XxGunnery&apos;s Twitter</Link> and comment on a post. We can create a Discord if it&apos;s in demand!
            </Box>
            <Box
                bg="red.700"
                p="5px"
                mb="30px"
                borderRadius="5px"
                textAlign="center"
                w={{ base: "95%", md: "600px" }}
            >
                MOBILE USERS - According to my limited testing, SSO is currently not working on many devices. Please use a desktop or laptop if mobile sign on does not work.
            </Box>
            <VStack
                justifyContent="center"
                bg="gray.900"
                borderRadius="10px"
                rowGap="10px"
                border="1px solid rgba(255,255,255,0.5)"
                p="10px"
                w={{ base: "90%", md: "auto" }}
            >
                <Heading textAlign="center" mt="0px!important">
                    Welcome to Axie-Cute!
                </Heading>
                <Box textAlign="center" fontSize={{ base: "17px", md: "20px" }} mt="0px!important">
                    Ready to browse some adorable axies? You can add your axies to the Axie-Cute ecosystem by signing in with Ronin!
                </Box>
                <Box textAlign="center" fontSize={{ base: "17px", md: "20px" }} mt="0px!important">
                    Please be aware: this app is early in development and may have bugs. More features to come!
                </Box>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    columnGap="10px"
                    bg="gray.700"
                    _hover={{
                        bg: "gray.600"
                    }}
                    p='10px'
                    w={{ base: "98%", md: "auto" }}
                    borderRadius="5px"
                >
                    <Button
                        bg="none"
                        _hover={{
                            bg: "none"
                        }}
                        disabled={isLoggingIn}
                        onClick={() => connectToRonin()}
                        h="auto"
                        fontSize="25px"
                    >
                        Sign In Using AxieDAO SSO!
                    </Button>
                    <Button
                        bg="black"
                        border="1px solid rgba(255,255,255,0.3)"
                        borderRadius="50%"
                        p="0px!important"
                        mt="0px!important"
                        fontSize="30px"
                        h="40px"
                        minW="40px!important"
                        onClick={() => setShowFAQ((prev) => !prev)}
                    >
                        ?
                    </Button>
                </Flex>
                <Box onClick={() => createDummyUser()} _hover={{ cursor: "pointer" }} textDecoration="underline"  mt="0px!important">
                    Don&apos;t have a Ronin wallet? Proceed to the app...
                </Box>
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
                            Upon creating an account with Axie-Cute, your axies will be added to the Axie-Cute ecosystem. Your axies will be able to be rated by other users of the app!
                        </ListItem>
                    </UnorderedList>
                </VStack>
            </VStack>
        </VStack>
    )
}