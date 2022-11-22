import React from 'react'
import { Box, Button, Flex, GridItem, Image, Input, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, VStack } from '@chakra-ui/react'
import { AXIE_BODY_LIST, AXIE_CLASS_LIST } from '../../scripts/app-data/data'
import AxieMenuSelection from './AxieFeed/AxieMenuSelection'
//import { fetchAllAxies } from '../../scripts/graphql/graphql'
import { getV3AxieImage } from '../../scripts/utils/utils'
import { useQuery } from '@tanstack/react-query'
import { sampleAxies } from '../../scripts/app-data/sampleAxies'
import axios from 'axios'
import { fetchAllAxies } from '../../scripts/graphql/graphql'
import AxieRating from './AxieFeed/AxieRating'

export interface AxieFormData {
    class: string
    body: string
}

export default function AxieFeed() {

    const [formData, setFormData] = React.useState<AxieFormData>({ class: '', body: '' })
    const [imagesLoaded, setImagesLoaded] = React.useState<boolean>(true)
    const [axieNum, setAxieNum] = React.useState<number>(0)

    async function getFeedAxies() {
        const data = await axios.get("api/getFeedAxies")
        return data
    }

    // GET PROFILE FEED
    const axieQuery = useQuery(['axies'], () => getFeedAxies(), {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    })

    // STORE USER'S AXIES
    // async function storeAxies(sampleAxies: any) {
    //     const storage = await axios.post("api/storeAxies", { axies: sampleAxies })
    //     console.log(storage)
    // }
    // const storeAxiesQuery = useQuery(['axieStorage'], () => storeAxies(sampleAxies))

    // GET USER'S AXIES FROM GRAPHQL
    // const myAxieQuery = useQuery(['myAxies'], () => fetchAllAxies(formData))

    if (axieQuery.isLoading) {
        return <Box>Loading...</Box>
    } else if (axieQuery.isError) {
        return <Box>Error</Box>
    }

    const axies = axieQuery.data.data

    return (
        <VStack>
            <VStack
                bg="gray.800"
                w={"100%"}
                minH="500px"
                justifyContent="center"
                p="10px"
            >
                <Flex
                    columnGap="10px"
                    display="none"
                >
                    <AxieMenuSelection
                        menuList={AXIE_BODY_LIST}
                        menuName={"Body"}
                        formData={formData}
                        setFormData={setFormData}
                    />
                    <AxieMenuSelection
                        menuList={AXIE_CLASS_LIST}
                        menuName={"Class"}
                        formData={formData}
                        setFormData={setFormData}
                    />
                </Flex>
                <VStack display={imagesLoaded ? "flex" : "none"}>
                    <VStack
                        w="400px"
                        h="220px"
                        justifyContent="center"
                        userSelect="none"
                    >
                        {
                            !axieQuery.isFetching ?
                                < Image
                                    alt="Axie"
                                    src={getV3AxieImage(axies[axieNum].axieId)}
                                    minW="400px"
                                    mt="40px"
                                    ml={axies[axieNum].bodyShape === "BigYak" ? "35px" : "15px"}
                                    onLoad={() => !imagesLoaded && setImagesLoaded(true)}
                                />
                                :
                                <Box>
                                    Loading...
                                </Box>
                        }
                    </VStack>
                    <AxieRating
                        axieNum={axieNum}
                        setAxieNum={setAxieNum}
                        axieQuery={axieQuery}
                    />
                </VStack >
            </VStack>
        </VStack>
    )
}
