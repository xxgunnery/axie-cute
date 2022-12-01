import React from 'react'
import { Box, Flex, GridItem, Image, Link, SimpleGrid, Tooltip, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Waiting from '../common-components/Waiting'
import { getClassColor, getLinearGradient, getV3AxieImage } from '../../scripts/utils/utils'
import AxieCard from './Market/AxieCard'


export default function Market() {

    const [imagesLoaded, setImagesLoaded] = React.useState<boolean>(false)

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
            h="98vh"
            overflowY="scroll"
            w="100%"
            alignItems="center"
            justifyContent="center"
            columnGap="10px"
            rowGap="10px"
        >
            {
                axiesList.map((axie: any) => {
                    return (
                        <AxieCard axie={axie} key={axie.axieId} imagesLoaded={imagesLoaded} setImagesLoaded={setImagesLoaded} />
                    )
                })
            }
        </Flex>
    )
}
