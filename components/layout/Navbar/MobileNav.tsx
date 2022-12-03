import React from "react"
import { Flex, Button, VStack, Heading, useColorModeValue, Link, Image, Box, Tooltip } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { signOut, useSession } from "next-auth/react"
import { sliceRoninAddress } from "../../../scripts/utils/utils"
import Socials from "./Socials"

type Props = {
    connectToRonin: () => Promise<void>
}

export default function MobileNav({ connectToRonin }: Props) {

    const [showNav, setShowNav] = React.useState(false)

    const router = useRouter()
    const currentPage = router.pathname.split("/")[1]

    const { data: session, status } = useSession()

    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            p="10px"
            borderBottom="1px solid rgba(255,255,255,0.3)"
            w="100%"
        >
            <Button
                onClick={() => setShowNav((prevState) => !prevState)}
                borderRadius="5px"
                bg="gray.600"
                variant="primary"
            >
                <Image src={"/images/hamburger.svg"} minWidth="30px" height="30px" />
            </Button>

            <VStack
                justifyContent="space-between"
                alignItems="baseline"
                display={showNav ? "flex" : "none"}
                position="absolute"
                left="0"
                top="0"
                borderBottom="1px solid rgba(255,255,255,0.2)"
                w="100%"
                zIndex="1000"
                bg={useColorModeValue("white", "gray.700")}
            >
                <Flex
                    w="100%"
                    justifyContent="space-between"
                    borderBottom="1px solid rgba(255,255,255,0.2)"
                    p="10px"
                >
                    <Heading size="2xl">
                        AXIE-CUTE
                        <Image display="inline" src="/images/axies/axie-9298317.png" w="60px" h="60px" ml="10px" mb="-15px" />
                    </Heading>
                    <Button onClick={() => setShowNav((prevState) => !prevState)}>
                        X
                    </Button>
                </Flex>
                <VStack alignItems="flex-start" mb="30px!important" w="250px" p="10px">
                    <Flex w="100%">
                        <Button
                            w="100%"
                            fontSize="20px!important"
                            h="60px"
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
                            h="60px"
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
                <Socials />
                <VStack alignItems="center" columnGap="20px" p="10px" borderTop="1px solid rgba(255,255,255,0.2)" w="100%">

                    <Flex
                        borderRadius="5px"
                        h="60px"
                        alignItems="center"
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
                                        bg="brand.300"
                                        p="7px 10px 7px 10px"
                                        borderRadius="2px"
                                        fontSize="20px"
                                    >
                                        {`Connected (${sliceRoninAddress(session.user?.address)})`}
                                    </Box>
                                </>
                                :
                                <>
                                    <Image src={"/images/ronin-logo.svg"} width="30px" height="30px" />
                                    <Button bg="none" fontSize="20px" fontWeight="800" onClick={() => connectToRonin()} >
                                        Connect Wallet
                                    </Button>
                                </>
                        }
                    </Flex>
                    {
                        session && (status === "authenticated") &&
                        <Button onClick={() => signOut()} borderRadius="5px" bg="gray.800">
                            Sign Out
                        </Button>
                    }
                </VStack>
            </VStack >
        </Flex >
    )
}