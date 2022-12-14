import { Flex, Button, VStack, Link, Box, Tooltip } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import React from "react"
import { useRouter } from "next/router"
import { signOut, useSession } from "next-auth/react"
import { sliceRoninAddress } from "../../../scripts/utils/utils"
import Socials from "./Socials"

type Props = {
    connectToRonin: () => Promise<void>
}

export default function DesktopNav({ connectToRonin }: Props) {

    const router = useRouter()
    const currentPage = router.pathname.split("/")[1]

    const { data: session, status } = useSession()

    return (
        <VStack
            alignItems="center"
            justifyContent="space-between"
            h="100vh"
            bg="gray.700"
            borderRight="1px solid rgba(255,255,255,0.5)"
            p="5px 10px 5px 10px"
            borderBottom="1px solid black"
            minW="320px"
        >
            <VStack mt="10px" w="230px">
                <Image src="/images/axies/axie-9298317.png" w="150px" />
                <Flex w="100%">
                    <Button
                        fontSize="20px!important"
                        w="100%"
                        variant={currentPage === "" ? `navLinkCurrent` : `navLink`}
                    >
                        <Link href={"/"} _hover={{ textDecoration: "none" }}>
                            😸 Axie-Cute App
                        </Link>
                    </Button>
                </Flex>
                <Flex w="100%">
                    <Button
                        fontSize="20px!important"
                        w="100%"
                        variant={currentPage === "marketplace" ? `navLinkCurrent` : `navLink`}
                    >
                        <Link href={"/marketplace"} _hover={{ textDecoration: "none" }}>
                            🏛️ Marketplace
                        </Link>
                    </Button>
                </Flex>
                {
                    (session && session.user.role === "ADMIN") &&
                    <Flex w="100%">
                        <Button
                            fontSize="20px!important"
                            w="100%"
                            variant={currentPage === "admin" ? `navLinkCurrent` : `navLink`}
                        >
                            <Link href={"/admin"} _hover={{ textDecoration: "none" }}>
                                🏛️ Admin
                            </Link>
                        </Button>
                    </Flex>
                }
            </VStack>
            <VStack>
                <Socials />
                <VStack alignItems="center" columnGap="20px" mb="0px!important" p="15px" borderTop="1px solid rgba(255,255,255,0.3)" w="100%">
                    <Flex
                        borderRadius="5px"
                        alignItems="center"
                        p="4px 8px 4px 8px"
                        bg="brand.300"
                        color="black"
                    >
                        {
                            session && (status === "authenticated")
                                ?
                                <>
                                    <Image src={"/images/ronin-logo.svg"} width="35px" height="35px" />
                                    <Box
                                        _hover={{ cursor: "default!important" }}
                                        bg="brand.50"
                                        p="7px 10px 7px 10px"
                                        borderRadius="2px"
                                    >
                                        {`Connected (${sliceRoninAddress(session.user?.address)})`}
                                    </Box>
                                </>
                                :
                                <>
                                    <Image src={"/images/ronin-logo.svg"} width="30px" height="30px" />
                                    <Button bg="none" fontSize="20px" fontWeight="700" onClick={() => connectToRonin()}>
                                        Connect Wallet
                                    </Button>
                                </>
                        }
                    </Flex>
                    {
                        session && (status === "authenticated") &&
                        <Button onClick={() => signOut()} borderRadius="5px" bg="gray.600">
                            Disconnect
                        </Button>
                    }
                </VStack>
            </VStack>
        </VStack>
    )
}