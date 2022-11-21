import React from 'react'
import { Box, Button, Flex, Image, Input, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, VStack } from '@chakra-ui/react'
import { AXIE_BODY_LIST, AXIE_CLASS_LIST } from '../../scripts/app-data/data'
import AxieMenuSelection from './components/AxieMenuSelection'
//import { fetchAllAxies } from '../../scripts/graphql/graphql'
import { getV3AxieImage } from '../../scripts/utils/utils'
import { useQuery } from '@tanstack/react-query'
import { sampleAxies } from '../../scripts/app-data/sampleAxies'
import axios from 'axios'

export interface AxieFormData {
    class: string
    body: string
}

export default function GraphQL() {

    const [formData, setFormData] = React.useState<AxieFormData>({ class: '', body: '' })
    const [imagesLoaded, setImagesLoaded] = React.useState<boolean>(true)

    function changeFormData(target: HTMLButtonElement) {
        if (target.innerText === "None") {
            setFormData((prev) => ({ ...prev, [target.value]: '' }))
        } else {
            setFormData((prev) => ({ ...prev, [target.value]: target.innerText }))
        }
    }

    async function getFeedAxies() {
        const data = await axios.get("api/getFeedAxies")
        return data
    }

    // GET PROFILE FEED
    const axieQuery = useQuery(['axies', formData], () => getFeedAxies(), {
        refetchOnWindowFocus: false,
    })

    console.log("AXIEQUERY", axieQuery)

    if (axieQuery.isLoading) {
        return <Box>Loading...</Box>
    } else if (axieQuery.isError) {
        return <Box>Error</Box>
    }

    const axies = axieQuery.data.data

    //console.log("AXIEQUERY", axieQuery)

    // STORE USER'S AXIES IN DATABASE
    // async function storeAxies(axies: any[]) {
    //     const yo = await axios.post("api/storeAxies", { axies })
    //     console.log(yo)
    // }
    // const axies = sampleAxies
    // const axieStorage = useQuery(['axiesStorage'], () => storeAxies(axies), {
    //     refetchOnWindowFocus: false,
    //     enabled: false
    // })

    //const axies = axieQuery.data.data.part1.results

    return (
        <VStack>
            {
                // <Button onClick={() => axieQuery.refetch()}>Store My Axies</Button>
            }
            <VStack
                bg="brand.100"
                borderRadius="10px"
                w="900px"
                minH="500px"
                justifyContent="center"
                p="10px"
            >
                <Flex
                    columnGap="10px"
                >
                    <AxieMenuSelection
                        menuList={AXIE_BODY_LIST}
                        menuName={"Body"}
                        formData={formData}
                        changeFormData={changeFormData}
                    />
                    <AxieMenuSelection
                        menuList={AXIE_CLASS_LIST}
                        menuName={"Class"}
                            formData={formData}
                        changeFormData={changeFormData}
                    />
                </Flex>
                <Flex display={imagesLoaded ? "flex" : "none"}>
                    <SimpleGrid columns={3}>
                        {
                            axies.map((axie: any) => {
                                return (
                                    <VStack key={axie.axieId}>
                                        <Box>
                                            {axie.axieId}
                                        </Box>
                                        <Box>
                                            <Image alt="Axie" src={getV3AxieImage(axie.axieId)} w="200px" onLoad={() => !imagesLoaded && setImagesLoaded(true)} />
                                        </Box>
                                        <Box>
                                            {axie.name}
                                        </Box>

                                    </VStack>
                                )
                            })
                        }

                    </SimpleGrid>
                </Flex>
            </VStack>
        </VStack>
    )
}
