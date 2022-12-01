import React from "react"
import { Container, Flex, VStack } from '@chakra-ui/react'
import Navbar from "./Navbar"
import windowWidth from "../../scripts/hooks/window";

export default function Layout({ children }: any) {

    return (
        <VStack
            height={"100vh"}
            width={"100%"}
            p="0px!important"
            mt="0px!important"
        >
            <Flex direction="row" w="100%" h="100vh">
                <Navbar isDesktopNav={windowWidth(1400)} />
                <Container p="0px!important" w="100%" maxWidth="100%">
                    {children}
                </Container>
            </Flex>
        </VStack>
    )
}