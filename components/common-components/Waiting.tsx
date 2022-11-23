import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'

import styles from "./common-components.module.css"

export default function Waiting(props: any) {
    let width
    if (props.width) {
        width = props.width
    } else {
        width = "30%"
    }

    return (
        <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                className="centerFlex"
                minH="50px"
                bg={"none"}
                p={props.variant === "filter" ? "0px" : "50px"}
                display="flex"
                borderRadius={props.variant === "filter" ? "50%" : "15px"}
            >
                <Image className={styles.loadingScreen} w={width} src="/images/puff-loading.png" />
            </Box>
        </Flex>
    )
}