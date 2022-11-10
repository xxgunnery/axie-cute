import styles from "./layout.module.css"
import { Button, Container, Flex } from '@chakra-ui/react'

export default function Layout({ children }: any) {

    return (
        <Container maxWidth="1350px" p="0px!important">
            {children}
        </Container>
    )
}