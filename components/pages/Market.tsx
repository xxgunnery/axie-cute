import React from 'react'
import { Box, Flex, GridItem, Image, SimpleGrid, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Waiting from '../common-components/Waiting'
import { getClassColor, getV3AxieImage } from '../../scripts/utils/utils'
import { Prisma } from '@prisma/client'


export default function Market() {

    const marketPlaceQuery = useQuery(['marketPlace'], () => axios.get("api/marketplace/getMarketAxies"), {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    })

    if (marketPlaceQuery.isLoading) {
        console.log("LOADING MARKETPLACE")
        return <Waiting />
    } else if (marketPlaceQuery.isError) {
        console.log("ERROR LOADING MARKETPLACE")
        return <Box>ERROR</Box>
    }

    const axiesList = marketPlaceQuery.data.data.axiesList

    return (
        <Flex
            flexWrap="wrap"
            mt="10px"
            w="100%"
            alignItems="center"
            justifyContent="center"
            columnGap="10px"
            rowGap="10px"
        >
            {
                axiesList.map((axie) => {
                    console.log(axie)
                    return (
                        <VStack 
                            key={axie.axieId}
                            borderRadius="5px"
                            p="10px"
                            bg="gray.700"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                left="5%"
                                mt="0px!important"
                                color={getClassColor(axie.class)}
                                fontSize="15px"
                                p="5px"
                                bg="gray.800"
                                borderRadius="2px"
                            >
                                {"#" + axie.axieId}
                            </Box>
                            <Box mt="0px!important">
                                <Image src={getV3AxieImage(axie.axieId)} w="300px" />
                            </Box>
                            <Flex columnGap="10px">
                                <Box>
                                    {axie.axieCuteScore}
                                </Box>
                                <Box>
                                    {axie.axieCoolScore}
                                </Box>
                            </Flex>
                        </VStack>
                    )
                })
            }
        </Flex>
    )
}
