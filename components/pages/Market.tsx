import React from 'react'
import { Box, Flex, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Waiting from '../common-components/Waiting'
import { AXIE_BODY_LIST, AXIE_CLASS_LIST, AXIE_ORDER_LIST } from '../../scripts/app-data/data'
import AxieCard from './Market/AxieCard'
import MarketFilters from './Market/MarketFilters'
import Head from 'next/head'
import Pagination from '../common-components/Pagination'
export interface AxieFormData {
    class: string
    body: string
    order: string
}

export default function Market() {

    const [currentPage, setCurrentPage] = React.useState<number>(1)
    const [formData, setFormData] = React.useState<AxieFormData>({ class: 'Class Name', body: 'Body Shape', order: 'Order' })
    const [imagesLoaded, setImagesLoaded] = React.useState<boolean>(false)

    const perPage = 15

    async function getMarketPlaceAxies(formData: AxieFormData, currentPage: number) {
        const BASE_URL = "api/marketplace/getMarketAxies"
        const bodyShapeName = "bodyShape=" + formData.body
        const className = "class=" + formData.class
        const orderName = "order=" + formData.order
        const page = "page=" + currentPage
        const axies = axios.get(BASE_URL + "?" + bodyShapeName + "&" + className + "&" + orderName + "&" + page + "&perPage=" + perPage)
        return axies
    }

    const marketPlaceQuery = useQuery(['marketPlace', formData, currentPage], () => getMarketPlaceAxies(formData, currentPage), {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    })

    if (marketPlaceQuery.isLoading) {
        return <Waiting />
    } else if (marketPlaceQuery.isError) {
        console.log("ERROR LOADING MARKETPLACE")
        return <Box>ERROR</Box>
    }

    const axiesList = marketPlaceQuery.data.data.axiesList
    const numAxies = marketPlaceQuery.data.data.numAxies

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Axie-Cute Marketplace</title>
            </Head>
            <VStack
                mt="5px"
                w="100%"
                h={{base: "85vh", md: "98vh"}}
                alignItems="center"
                justifyContent="space-between"
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
                <VStack
                    w="100%"
                    columnGap="10px"
                    rowGap="10px"
                    overflowY="scroll"
                    alignItems="center"
                >
                    <Flex>
                        Browse all {numAxies} axies in the Axie-Cute ecosystem!
                    </Flex>
                    <Flex
                        w="100%"
                        columnGap="10px"
                        rowGap="10px"
                        flexWrap="wrap"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {
                            axiesList.map((axie: any) => {
                                return (
                                    <AxieCard
                                        axie={axie}
                                        key={axie.axieId}
                                        imagesLoaded={imagesLoaded}
                                        setImagesLoaded={setImagesLoaded}
                                    />
                                )
                            })
                        }
                    </Flex>
                </VStack>
                <Pagination
                    numAxies={numAxies}
                    perPage={perPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </VStack>
        </>
    )
}
