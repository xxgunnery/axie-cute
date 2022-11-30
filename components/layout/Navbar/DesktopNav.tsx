import {
    Flex,
    Button,
    VStack,
    Heading,
    useColorModeValue,
    Link,
    Box,
} from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import React from "react"
import { useRouter } from "next/router"
import { signOut, useSession } from "next-auth/react"
import { sliceRoninAddress } from "../../../scripts/utils/utils"

export default function DesktopNav() {

    const router = useRouter()
    const currentPage = router.pathname.split("/")[1]

    const { data: session, status } = useSession()

    return (
        <VStack
            alignItems="center"
            h="100vh"
            bg="gray.700"
            border="1px solid rgba(255,255,255,0.1)"
            p="5px 10px 5px 10px"
            borderBottom="1px solid black"
            minW="320px"
        >
            <Flex>
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
            >
                {
                    session && (status === "authenticated")
                        ?
                        <>
                            <Image src={"/images/ronin-logo.svg"} width="30px" height="30px" />
                            <Box
                                _hover={{ cursor: "default!important" }}
                                bg="brand.50"
                                p="7px 10px 7px 10px"
                                borderRadius="5px"
                            >
                                {`Connected (ronin: ${sliceRoninAddress(session.user?.address)})`}
                            </Box>
                        </>
                        :
                        <>
                            <Image src={"/images/ronin-logo.svg"} width="30px" height="30px" />
                            <Button bg="none" _hover={{ bg: "brand.200" }}>
                                Connect Ronin Wallet
                            </Button>
                        </>
                }

            </Flex>
            <Button onClick={() => signOut()}>
                Sign Out
            </Button>
        </VStack>
    )
}