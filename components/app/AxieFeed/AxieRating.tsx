import React from 'react'
import { Box, Button, Flex, GridItem, Image, Input, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, VStack } from '@chakra-ui/react'
import axios from 'axios'
import { getV3AxieImage } from '../../../scripts/utils/utils';

export default function AxieRating({ axieNum, setAxieNum, axieQuery }: any) {

    React.useEffect(() => {
        window.addEventListener('pointerup', () => setIsDragging(false));

        return () => {
            window.removeEventListener('pointerup', () => setIsDragging(false));
        }
    }, [])

    const [isDragging, setIsDragging] = React.useState<boolean>(false)
    const [isMoved, setIsMoved] = React.useState<boolean>(false)
    const [origin, setOrigin] = React.useState({ x: 0, y: 0 })
    const [translation, setTranslation] = React.useState({ x: 0, y: 0 })
    const [axieRating, setAxieRating] = React.useState({ cute: 5, cool: 5 })
    const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(false)

    const axies = axieQuery.data.data

    async function submitRating(axieQuery: any) {
        setIsButtonDisabled(false)

        const postResult = await axios.post("api/submitAxieRating", { rating: axieRating, axieId: axies[axieNum].axieId })

        if (axieNum === axieQuery.data.data.length - 1) {
            setAxieRating({ cute: 5, cool: 5 })
            setTranslation({ x: 0, y: 0 })
            setIsMoved(false)
            axieQuery.refetch()
            setAxieNum(0)
        } else {
            setAxieNum((prev: number) => prev + 1)
            setAxieRating({ cute: 5, cool: 5 })
            setTranslation({ x: 0, y: 0 })
            setIsMoved(false)
        }

        setIsButtonDisabled(false)
    }

    function normalizeRating(rating: number) {
        return Math.round((((rating + 1) / 2) * 100)) / 10
    }

    return (
        <VStack>
            <VStack
                w="250px"
                h="250px"
                mt="0px!important"
                justifyContent="center"
                border="1px solid white"
                bg="gray.900"
                position="relative"
                onPointerDown={(e) => {
                    const dropper = document.getElementById("ratingDropper")
                    const target = e.target as HTMLElement
                    if (dropper && target) {
                        const dropperBounds = dropper.getBoundingClientRect()
                        if (isMoved) {
                            setIsDragging(true)

                            const x = e.clientX - origin.x
                            const y = e.clientY - origin.y
                            setTranslation({ x: x, y: y })

                            const targetRect = target.getBoundingClientRect()
                            let cuteRating = x / (targetRect.width / 2)
                            let coolRating = -y / (targetRect.height / 2)
                            cuteRating = normalizeRating(cuteRating)
                            coolRating = normalizeRating(coolRating)
                            setAxieRating({ cute: cuteRating, cool: coolRating })
                        } else {
                            setIsDragging(true)

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
                            cuteRating = normalizeRating(cuteRating)
                            coolRating = normalizeRating(coolRating)
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
                            cuteRating = normalizeRating(cuteRating)
                            coolRating = normalizeRating(coolRating)
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
                            cuteRating = normalizeRating(cuteRating)
                            coolRating = normalizeRating(coolRating)
                            setAxieRating({ cute: cuteRating, cool: coolRating })
                        }
                    }
                }}
            >
                <Box
                    id="ratingDropper"
                    borderRadius="50%"
                    w="150px"
                    h="150px"
                    position="absolute"
                    zIndex="500!important"
                    pointerEvents="none"
                    transform={`translate(${translation.x}px, ${translation.y}px)`}
                >
                    <VStack
                        h="100%"
                        w="100%"
                        userSelect="none"
                    >
                        <Flex columnGap="5px" userSelect="none">
                            <VStack bg={`hsla(0,${axieRating.cute * 10 + 20}%, 60%, ${axieRating.cute / 10 + 0.6})`} borderRadius="5px" p="2px">
                                <Box mt="0px!important" fontSize="12px">
                                    Cuteness
                                </Box>
                                <Box mt="0px!important" fontWeight="800" fontSize="15px">
                                    {axieRating.cute}
                                </Box>
                            </VStack>
                            <VStack bg={`hsla(209, ${axieRating.cool * 8 + 20}%, 60%, ${axieRating.cool / 10 + 0.6})`} borderRadius="5px" p="2px">
                                <Box mt="0px!important" fontSize="12px">
                                    Coolness
                                </Box>
                                <Box mt="0px!important" fontWeight="800" fontSize="15px">
                                    {axieRating.cool}
                                </Box>
                            </VStack>
                        </Flex>
                        <Flex
                            w="60px"
                            h="60px"
                            border="7px solid"
                            borderColor="rgba(255, 255, 255, 0.3)"
                            borderRadius="50%"
                            alignItems="center"
                            justifyContent="center"
                            bg="rgba(0, 0, 0, 0.3)"
                            filter="brightness(1.8)"
                            userSelect="none"
                        >
                            <Image
                                src={getV3AxieImage(axies[axieNum].axieId)}
                                minW="80px"
                                mt="5px"
                                ml={axies[axieNum].bodyShape === "BigYak" ? "5px" : "3px"}
                                filter="brightness(0.7)"
                                opacity="0.8"

                            />
                        </Flex>
                    </VStack>
                </Box>
                <SimpleGrid
                    mt="0!important"
                    position="absolute"
                    w="100%"
                    h="100%"
                    columns={2}
                    pointerEvents="none"
                >
                    <GridItem h="125px" colSpan={1} border="1px solid black" pointerEvents="none">
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
                    <GridItem h="125px" colSpan={1} border="1px solid black" pointerEvents="none">
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
                    <GridItem h="125px" colSpan={1} border="1px solid black" pointerEvents="none">
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
                    <GridItem h="125px" colSpan={1} border="1px solid black" pointerEvents="none">
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
            <VStack mt="20px!important">
                <Button w="250px" h="80px" onClick={() => submitRating(axieQuery)} disabled={isButtonDisabled}>
                    Submit Your Rating!
                </Button>
            </VStack>
        </VStack>

    )
}
