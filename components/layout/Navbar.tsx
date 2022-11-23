import {
    Flex,
    Button,
    VStack,
    Heading,
    useColorModeValue,
    Link,
} from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import React from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

import windowWidth from "../../scripts/hooks/window"
import roninLogo from "/public/images/ronin-logo.svg"

export default function Navbar() {
    const [isLoggingIn, setIsLoggingIn] = React.useState(false)
    const [isLoggingOut, setIsLoggingOut] = React.useState(false)

    const router = useRouter()
    const currentPage = router.pathname.split("/")[1]

    function DesktopNav() {
        return (
            <Flex
                alignItems="center"
                justifyContent="space-between"
                p="5px 10px 5px 10px"
                borderBottom="1px solid black"
                w="100%"
            >
                <Flex h="80%">
                    <Button
                        fontSize="15px!important"
                        mr={{ base: "2px", md: "10px" }}
                        variant={currentPage === "" ? `navLinkCurrent` : `navLink`}
                    >
                        <Link href={"/"} _hover={{ textDecoration: "none" }}>
                            🏠 Home
                        </Link>
                    </Button>
                </Flex>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="10px"
                    p="4px 8px 4px 8px"
                    bg="brand.300"
                    color="black"
                    fontWeight="800"
                >
                    <Image src={"/images/ronin-logo.svg"} width="30px" height="30px" />
                    <Button bg="none" disabled={isLoggingIn}>
                        Connect Ronin Wallet
                    </Button>
                </Flex>
            </Flex>
        )
    }

    function MobileNav() {
        const [showNav, setShowNav] = React.useState(false)

        function FullNav() {
            return (
                <VStack
                    justifyContent="space-between"
                    alignItems="baseline"
                    p="15px"
                    position="absolute"
                    left="0"
                    top="0"
                    borderBottom="1px solid black"
                    w="100%"
                    zIndex="1000"
                    bg={useColorModeValue("white", "gray.800")}
                >
                    <Flex
                        w="100%"
                        justifyContent="space-between"
                        borderBottom="3px solid black"
                        paddingBottom="10px"
                    >
                        <Heading size="2xl">AXIE-CUTE</Heading>
                        <Button onClick={() => setShowNav((prevState) => !prevState)}>
                            X
                        </Button>
                    </Flex>
                    <Button variant={currentPage === "" ? `navLinkCurrent` : `navLink`}>
                        <Link
                            href={"/"}
                            _hover={{ textDecoration: "none" }}
                            fontSize="16px"
                        >
                            🏠 HOME
                        </Link>
                    </Button>
                    <Flex
                        borderRadius="10px"
                        p="4px 8px 4px 8px"
                        bg="brand.300"
                        color="black"
                        fontWeight="800"
                    >
                        <Image src={"/images/ronin-logo.svg"} width="30px" height="30px" />
                        <Button bg="none" disabled={isLoggingIn}>
                            Connect Ronin Wallet
                        </Button>
                    </Flex>
                </VStack>
            )
        }

        return (
            <Flex
                alignItems="center"
                justifyContent="space-between"
                p="10px"
                borderBottom="1px solid black"
                w="100%"
            >
                <Button
                    onClick={() => setShowNav((prevState) => !prevState)}
                    variant="primary"
                >
                    <Image src={"/images/hamburger.svg"} minWidth="30px" height="30px" />
                </Button>
                {showNav && <FullNav />}
            </Flex>
        )
    }

    if(windowWidth(1400)) {
        return <DesktopNav />
    } else {
        return <MobileNav />
    }
}
