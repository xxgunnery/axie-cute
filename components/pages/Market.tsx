import React from 'react'
import { Box, Flex, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Waiting from '../common-components/Waiting'
import { AXIE_BODY_LIST, AXIE_CLASS_LIST, AXIE_ORDER_LIST } from '../../scripts/app-data/data'
import AxieCard from './Market/AxieCard'
import MarketFilters from './Market/MarketFilters'
export interface AxieFormData {
    class: string
    body: string
    order: string
}

export default function Market() {

    const [formData, setFormData] = React.useState<AxieFormData>({ class: 'Class Name', body: 'Body Shape', order: 'Order' })
    const [imagesLoaded, setImagesLoaded] = React.useState<boolean>(false)

    async function getMarketPlaceAxies(formData: AxieFormData) {
        const BASE_URL = "api/marketplace/getMarketAxies"
        const bodyShapeName = "bodyShape=" + formData.body
        const className = "class=" + formData.class
        const orderName = "order=" + formData.order
        const axies = axios.get(BASE_URL + "?" + bodyShapeName + "&" + className + "&" + orderName)
        return axies
    }

    const marketPlaceQuery = useQuery(['marketPlace', formData], () => getMarketPlaceAxies(formData), {
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
        <VStack
            mt="5px"
            h="98vh"
            w="100%"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                columnGap="10px"
            >
                <MarketFilters
                    menuList={AXIE_BODY_LIST}
                    menuName={"Body"}
                    formData={formData}
                    setFormData={setFormData}
                />
                <MarketFilters
                    menuList={AXIE_CLASS_LIST}
                    menuName={"Class"}
                    formData={formData}
                    setFormData={setFormData}
                />
                <MarketFilters
                    menuList={AXIE_ORDER_LIST}
                    menuName={"Order"}
                    formData={formData}
                    setFormData={setFormData}
                />
            </Flex>
            <Flex
                w="100%"
                columnGap="10px"
                rowGap="10px"
                flexWrap="wrap"
                overflowY="scroll"
                alignItems="center"
                justifyContent="center"
            >
                {
                    axiesList.map((axie: any) => {
                        return (
                            <AxieCard axie={axie} key={axie.axieId} imagesLoaded={imagesLoaded} setImagesLoaded={setImagesLoaded} />
                        )
                    })
                }
            </Flex>
        </VStack>
    )
}
