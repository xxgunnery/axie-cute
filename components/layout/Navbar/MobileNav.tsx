import React from "react"
import {
    Flex,
    Button,
    VStack,
    Heading,
    useColorModeValue,
    Link,
    Image,
    Box
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import { sliceRoninAddress } from "../../../scripts/utils/utils"

export default function MobileNav() {

    const [showNav, setShowNav] = React.useState(false)

    const router = useRouter()
    const currentPage = router.pathname.split("/")[1]

    const { data: session, status } = useSession()

    return (
        <Flex
            alignItems="center"
            position="absolute"
            justifyContent="space-between"
            p="10px"
            borderBottom="1px solid black"
            w="100%"
        >
            <Button
                onClick={() => setShowNav((prevState) => !prevState)}
                borderRadius="5px"
                bg="gray.700"
                variant="primary"
            >
                <Image src={"/images/hamburger.svg"} minWidth="30px" height="30px" />
            </Button>

            <VStack
                justifyContent="space-between"
                alignItems="baseline"
                p="15px"
                display={showNav ? "flex" : "none"}
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
                                <Button bg="none">
                                    Connect Ronin Wallet
                                </Button>
                            </>
                    }
                </Flex>
            </VStack>
            {showNav}
        </Flex>
    )
}