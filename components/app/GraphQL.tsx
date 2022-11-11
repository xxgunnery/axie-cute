import React from 'react'
import { Box, Button, Flex, Image, Input, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, VStack } from '@chakra-ui/react'
import { AXIE_BODY_LIST, AXIE_CLASS_LIST } from '../../scripts/app-data/data'
import AxieMenuSelection from './components/AxieMenuSelection'
import { fetchAllAxies } from '../../scripts/graphql/graphql'
import { getV3AxieImage } from '../../scripts/utils/utils'
import { useQuery } from '@tanstack/react-query'

export interface AxieFormData {
    class: string
    body: string
}

export default function GraphQL() {

    const [formData, setFormData] = React.useState<AxieFormData>({ class: '', body: '' })
    const [imagesLoaded, setImagesLoaded] = React.useState<boolean>(false)

    function changeFormData(target: HTMLButtonElement) {
        if (target.innerText === "None") {
            setFormData((prev) => ({ ...prev, [target.value]: '' }))
        } else {
            setFormData((prev) => ({ ...prev, [target.value]: target.innerText }))
        }
    }


    const axieQuery = useQuery(['axies', formData], () => fetchAllAxies(formData))

    if (axieQuery.isLoading) {
        return <Box>Loading...</Box>
    } else if (axieQuery.isError) {
        return <Box>Error</Box>
    }

    const axies = axieQuery.data.data.part1.results

    return (
        <VStack>
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
                                    <VStack key={axie.id}>
                                        <Box>
                                            {axie.id}
                                        </Box>
                                        <Box>
                                            <Image alt="Axie" src={getV3AxieImage(axie.id)} w="200px" onLoad={() => !imagesLoaded && setImagesLoaded(true)} />
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
