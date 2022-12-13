import React from "react"
import { Container, Flex, VStack } from '@chakra-ui/react'
import Navbar from "./Navbar"
import windowWidth from "../../scripts/hooks/window";

export default function Layout({ children, isDesktop }: any) {

    return (
        <VStack
            width={"100%"}
            p="0px!important"
            mt="0px!important"
        >
            <Flex direction={isDesktop ? "row" : "column"} w="100%">
                <Navbar isDesktopNav={isDesktop} />
                <Container p="0px!important" w="100%" maxWidth="100%">
                    {children}
                </Container>
            </Flex>
        </VStack>
    )
}