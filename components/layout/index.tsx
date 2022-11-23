import React from "react"
import styles from "./layout.module.css"
import { Button, calc, Container, Flex, useColorMode, VStack } from '@chakra-ui/react'
import Navbar from "./Navbar";

export default function Layout({ children }: any) {

    const { toggleColorMode } = useColorMode();
    const [darkTheme, toggleDarkTheme] = React.useState(false)

    return (
        <VStack
            height={"100vh"}
            p="0px!important"
            mt="0px!important"
        >
            <Navbar />
            <Container maxWidth="1350px" p="0px!important">
                {children}
            </Container>
        </VStack>
    )
}

/*
    <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        bg="rgba(0,0,0,0.2)"
        p="5px"
    >
        
        <Flex
            maxW="1350px"
            w="100%"
        >
            <Button
                variant="primary"
                bg="blue.500"
                onClick={() => {
                    toggleColorMode()
                    toggleDarkTheme(!darkTheme)
                }}
            >
                {!darkTheme ? "☀️" : "🌙"}
            </Button>
        </Flex>
    </Flex>
*/