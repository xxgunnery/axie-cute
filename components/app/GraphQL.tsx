import React from 'react'
import { Box, Button, Flex, GridItem, Image, Input, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, VStack } from '@chakra-ui/react'
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
    const [axieNum, setAxieNum] = React.useState<number>(0)

    //CONTROLS AXIE CUTENESS RATINGS
    const [isDragging, setIsDragging] = React.useState<boolean>(false)
    const [isMoved, setIsMoved] = React.useState<boolean>(false)
    const [origin, setOrigin] = React.useState({ x: 0, y: 0 })
    const [translation, setTranslation] = React.useState({ x: 0, y: 0 })
    const [axieRating, setAxieRating] = React.useState({ cute: 1.5, cool: 1.5 })

    React.useEffect(() => {
        window.addEventListener('pointerup', () => setIsDragging(false));

        return () => {
            window.removeEventListener('pointerup', () => setIsDragging(false));
        }
    }, [])

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

    async function submitRating(axieQuery: any) {
        const postResult = await axios.post("api/submitAxieRating", { rating: axieRating, axieId: axies[axieNum].axieId })
        console.log(postResult)
        console.log(axieNum, axies.length)

        if (axieNum === axieQuery.data.data.length - 1) {
            setAxieNum(0)
            setAxieRating({ cute: 0, cool: 0 })
            setOrigin({ x: 0, y: 0 })
            setTranslation({ x: 0, y: 0 })
            setIsMoved(false)
            axieQuery.refetch()
        } else {
            setAxieNum((prev) => prev + 1)
            setAxieRating({ cute: 0, cool: 0 })
            setOrigin({ x: 0, y: 0 })
            setTranslation({ x: 0, y: 0 })
            setIsMoved(false)
        }
    }

    // GET PROFILE FEED
    const axieQuery = useQuery(['axies'], () => getFeedAxies(), {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    })

    if (axieQuery.isLoading) {
        return <Box>Loading...</Box>
    } else if (axieQuery.isError) {
        return <Box>Error</Box>
    }

    const axies = axieQuery.data.data
    console.log("AXIES", axies[0].axieId)

    return (
        <VStack>
            <VStack
                bg="gray.800"
                borderRadius="10px"
                w={{ base: "400px", md: "800px" }}
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
                <VStack display={imagesLoaded ? "flex" : "none"}>
                    <VStack
                        w="400px"
                        h="220px"
                        justifyContent="center"
                    >
                        <Image
                            alt="Axie"
                            src={getV3AxieImage(axies[axieNum].axieId)}
                            minW="400px"
                            mt="40px"
                            onLoad={() => !imagesLoaded && setImagesLoaded(true)}
                        />
                    </VStack>
                    <VStack>
                        <VStack border="1px solid white" p="5px" borderRadius="10px" mb="10px">
                            <Flex rowGap="10px" columnGap="10px">
                                <VStack bg="red.300" borderRadius="5px" p="5px 10px 5px 10px">
                                    <Box mt="0px!important">
                                        Cuteness
                                    </Box>
                                    <Box mt="0px!important" fontWeight="800">
                                        {axieRating.cute}
                                    </Box>
                                </VStack>
                                <VStack bg="blue.300" borderRadius="5px" p="5px 10px 5px 10px">
                                    <Box mt="0px!important">
                                        Coolness
                                    </Box>
                                    <Box mt="0px!important" fontWeight="800">
                                        {axieRating.cool}
                                    </Box>
                                </VStack>
                            </Flex>
                            <Button
                                bg="gray.700"
                                borderRadius="2px"
                                p="1px 4px 1px 4px"
                                color="white"
                                h="100%"
                                mt="5px!important"
                                _hover={{ bg: "gray.600" }}
                                onClick={() => submitRating(axieQuery)}
                            >
                                Submit Axie
                            </Button>
                        </VStack>
                        <VStack
                            w="300px"
                            h="300px"
                            mt="0px!important"
                            justifyContent="center"
                            border="1px solid black"
                            position="relative"
                            onPointerDown={(e) => {
                                const dropper = document.getElementById("ratingDropper")
                                const target = e.target as HTMLElement
                                if (dropper && target) {
                                    const dropperBounds = dropper.getBoundingClientRect()
                                    if (isMoved) {
                                        const x = e.clientX - origin.x
                                        const y = e.clientY - origin.y

                                        setTranslation({ x: x, y: y })
                                        setIsDragging(true)

                                        const targetRect = target.getBoundingClientRect()
                                        let cuteRating = x / (targetRect.width / 2)
                                        let coolRating = -y / (targetRect.height / 2)
                                        cuteRating = Math.round((((cuteRating + 1) / 2) * 30)) / 10
                                        coolRating = Math.round((((coolRating + 1) / 2) * 30)) / 10
                                        setAxieRating({ cute: cuteRating, cool: coolRating })
                                    } else {
                                        const originalPosition = {
                                            x: dropperBounds.left + (dropperBounds.width / 2),
                                            y: dropperBounds.top + (dropperBounds.height / 2)
                                        }

                                        const x = e.clientX - originalPosition.x
                                        const y = e.clientY - originalPosition.y

                                        setOrigin(originalPosition)
                                        setTranslation({ x: x, y: y })
                                        setIsMoved(true)

                                        const targetRect = target.getBoundingClientRect()
                                        let cuteRating = x / (targetRect.width / 2)
                                        let coolRating = -y / (targetRect.height / 2)
                                        cuteRating = Math.round((((cuteRating + 1) / 2) * 30)) / 10
                                        coolRating = Math.round((((coolRating + 1) / 2) * 30)) / 10
                                        setAxieRating({ cute: cuteRating, cool: coolRating })
                                    }
                                }
                            }}
                            onPointerUp={(e) => {
                                setIsDragging(false)
                            }}
                            onPointerMove={(e) => {
                                if (isDragging && e.pointerType === "mouse") {
                                    const x = e.clientX - origin.x
                                    const y = e.clientY - origin.y
                                    setTranslation({
                                        x: x,
                                        y: y
                                    })
                                    const target = e.target as HTMLElement
                                    if (target) {
                                        const targetRect = target.getBoundingClientRect()
                                        let cuteRating = x / (targetRect.width / 2)
                                        let coolRating = -y / (targetRect.height / 2)
                                        cuteRating = Math.round((((cuteRating + 1) / 2) * 30)) / 10
                                        coolRating = Math.round((((coolRating + 1) / 2) * 30)) / 10
                                        setAxieRating({ cute: cuteRating, cool: coolRating })
                                    }
                                }
                            }}
                            onTouchMove={(e) => {
                                if (isDragging) {
                                    const x = e.touches[0].clientX - origin.x
                                    const y = e.touches[0].clientY - origin.y
                                    setTranslation({
                                        x: x,
                                        y: y
                                    })
                                    const target = e.target as HTMLElement
                                    if (target) {
                                        const targetRect = target.getBoundingClientRect()
                                        let cuteRating = x / (targetRect.width / 2)
                                        let coolRating = -y / (targetRect.height / 2)
                                        cuteRating = Math.round((((cuteRating + 1) / 2) * 30)) / 10
                                        coolRating = Math.round((((coolRating + 1) / 2) * 30)) / 10
                                        setAxieRating({ cute: cuteRating, cool: coolRating })
                                    }
                                }
                            }}
                        >
                            <Box
                                bg="orange.400"
                                w="40px"
                                h="40px"
                                id="ratingDropper"
                                borderRadius="50%"
                                position="absolute"
                                pointerEvents="none"
                                zIndex="500!important"
                                transform={`translate(${translation.x}px, ${translation.y}px)`}
                            >
                            </Box>
                            <SimpleGrid
                                mt="0!important"
                                position="absolute"
                                w="100%"
                                h="100%"
                                columns={2}
                                pointerEvents="none"
                            >
                                <GridItem h="150px" colSpan={1} border="1px solid black" pointerEvents="none">
                                    <VStack
                                        justifyContent="center"
                                        mt="0px!important"
                                        h="100%"
                                        userSelect="none"
                                    >
                                        <Box mt="0px!important" fontSize="30px" color="blue.500" fontWeight="800" textAlign="center">
                                            COOL
                                        </Box>
                                        <Box mt="0px!important" textAlign="center" color="gray.300">
                                            BUT
                                        </Box>
                                        <Box mt="0px!important" fontSize="20px" color="gray.300" fontWeight="800" textAlign="center">
                                            NOT CUTE
                                        </Box>
                                    </VStack>
                                </GridItem>
                                <GridItem h="150px" colSpan={1} border="1px solid black" pointerEvents="none">
                                    <VStack
                                        justifyContent="center"
                                        mt="0px!important"
                                        h="100%"
                                        userSelect="none"
                                    >
                                        <Box mt="0px!important" fontSize="30px" color="red.500" fontWeight="800" textAlign="center">
                                            COOL
                                        </Box>
                                        <Box mt="0px!important" textAlign="center" color="gray.300">
                                            AND
                                        </Box>
                                        <Box mt="0px!important" fontSize="30px" color="blue.500" fontWeight="800" textAlign="center">
                                            CUTE
                                        </Box>
                                    </VStack>
                                </GridItem>
                                <GridItem h="150px" colSpan={1} border="1px solid black" pointerEvents="none">
                                    <VStack
                                        justifyContent="center"
                                        mt="0px!important"
                                        h="100%"
                                        userSelect="none"
                                    >
                                        <Box mt="0px!important" fontSize="20px" color="gray.300" fontWeight="800" textAlign="center">
                                            NOT COOL
                                        </Box>
                                        <Box mt="0px!important" textAlign="center" color="gray.300">
                                            AND
                                        </Box>
                                        <Box mt="0px!important" fontSize="20px" color="gray.300" fontWeight="800" textAlign="center">
                                            NOT CUTE
                                        </Box>
                                    </VStack>
                                </GridItem>
                                <GridItem h="150px" colSpan={1} border="1px solid black" pointerEvents="none">
                                    <VStack
                                        justifyContent="center"
                                        mt="0px!important"
                                        h="100%"
                                        userSelect="none"
                                    >
                                        <Box mt="0px!important" fontSize="30px" color="red.500" fontWeight="800" textAlign="center">
                                            CUTE
                                        </Box>
                                        <Box mt="0px!important" textAlign="center" color="gray.300">
                                            BUT
                                        </Box>
                                        <Box mt="0px!important" fontSize="20px" color="gray.300" fontWeight="800" textAlign="center">
                                            NOT COOL
                                        </Box>
                                    </VStack>
                                </GridItem>
                            </SimpleGrid>
                        </VStack>
                    </VStack>
                </VStack>
            </VStack>
        </VStack>
    )
}
