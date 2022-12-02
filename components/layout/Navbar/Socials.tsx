import React from "react"
import { Flex, Link, Image, Tooltip } from "@chakra-ui/react"
import { useRouter } from "next/router"
export default function Socials() {

    return (
        <Flex w="100%" alignItems="center" justifyContent="center">
            <Flex
                bg="gray.800"
                borderRadius="5px"
                p="10px"
                columnGap="10px"
                alignItems="center"
                justifyContent="center"
                border="rgba(255,255,255,0.1) 1px solid"
            >
                <Image src="/images/profile.png" w="60px" h="60px" />
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    columnGap="20px"
                    bg="gray.700"
                    border="rgba(255,255,255,0.1) 1px solid"
                    p="10px"
                    borderRadius="5px"
                >
                    <Link href="https://twitter.com/xxgunnery" h="40px" display="flex" alignItems="center" _hover={{ transform: "translateY(-3px)" }}>
                        <Image src="/images/twitter.png" w="40px" />
                    </Link>
                    <Tooltip label="Did you know Axie-Cute is open source??" placement="top" textShadow="none" borderRadius="5px" bg="gray.100">
                        <Link href="https://github.com/xxgunnery/axie-cute" h="40px" display="flex" alignItems="center" _hover={{ transform: "translateY(-3px)" }}>
                            <Image src="/images/github.png" w="40px" />
                        </Link>
                    </Tooltip>
                </Flex>
            </Flex>
        </Flex>

    )
}