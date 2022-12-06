import React from 'react'
import { Box, Button, Flex, Image, VStack } from '@chakra-ui/react'
import axios, { AxiosResponse } from 'axios'
import styles from './axierating.module.css'
import { useSession } from 'next-auth/react'
import { Axie } from '@prisma/client'
import { getV3AxieImage } from '../../../scripts/utils/utils'
import { UseQueryResult } from '@tanstack/react-query'

type Props = {
    axieNum: number
    setAxieNum: React.Dispatch<React.SetStateAction<number>>
    axies: Axie[]
    axieQuery: UseQueryResult<AxiosResponse<any, any> | undefined, unknown>
    dummyUser: string
    imagesLoaded: boolean
    setImagesLoaded: React.Dispatch<React.SetStateAction<boolean>>
    ratingFor: string
}

export type XYCoordinates = {
    x: number
    y: number
}

export default function AxieRatingUI({ axieNum, setAxieNum, axies, axieQuery, dummyUser, imagesLoaded, setImagesLoaded, ratingFor }: Props) {

    React.useEffect(() => {
        window.addEventListener('pointerup', () => setIsDragging(false));

        return () => {
            window.removeEventListener('pointerup', () => setIsDragging(false));
        }
    }, [])

    React.useEffect(() => {
        setAxieNum(0)
    }, [axies])

    const { data: session } = useSession()

    const [axieRating, setAxieRating] = React.useState<number>(5)
    const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(false)

    const [isDragging, setIsDragging] = React.useState<boolean>(false)
    const [isMoved, setIsMoved] = React.useState<boolean>(false)
    const [origin, setOrigin] = React.useState({ x: 0, y: 0 })
    const [translation, setTranslation] = React.useState({ x: 0, y: 0 })

    async function submitRating(axies: Axie[], axieQuery: UseQueryResult) {
        setIsButtonDisabled(true)

        if (session) {
            await axios.post("api/submitAxieRating", { rating: axieRating, axieId: axies[axieNum].axieId, voter: session.user.address, ratingFor: ratingFor })
        } else if (dummyUser !== "") {
            await axios.post("api/submitAxieRating", { rating: axieRating, axieId: axies[axieNum].axieId, voter: dummyUser, ratingFor })
        } else {
            console.log("PROBLEM")
            throw new Error("There's a problem here!")
        }

        if (axieNum === axies.length - 1) {
            setAxieRating(5)
            setTranslation({ x: 0, y: 0 })
            setIsMoved(false)
            axieQuery.refetch()
        } else {
            setAxieNum((prev: number) => prev + 1)
            setAxieRating(5)
            setTranslation({ x: 0, y: 0 })
            setIsMoved(false)
        }
        setIsButtonDisabled(false)
    }

    function normalizeRating(rating: number) {
        return Math.round((((rating + 1) / 2) * 100)) / 10
    }

    function changeBorderColorWithAxieRating(axieRating: any) {
        const ratingAmount = Math.round(axieRating.rating / 3 * 30)

        const colors = `,hsl(0,${axieRating.rating * 10 + 20}%, 60%)`.repeat(ratingAmount)

        return colors
    }

    function handlePointerDown(dropper: HTMLElement | null, target: HTMLElement, clientX: number, clientY: number) {
        if (dropper && target) {
            const dropperBounds = dropper.getBoundingClientRect()
            if (isMoved) {
                setIsDragging(true)

                const x = clientX - origin.x
                const y = clientY - origin.y
                setTranslation({ x: x, y: y })

                const targetRect = target.getBoundingClientRect()
                let rating = x / (targetRect.width / 2)
                rating = normalizeRating(rating)

                setAxieRating(rating)
            } else {
                setIsDragging(true)

                const originalPosition = {
                    x: dropperBounds.left + (dropperBounds.width / 2),
                    y: dropperBounds.top + (dropperBounds.height / 2)
                }

                const x = clientX - originalPosition.x
                const y = clientY - originalPosition.y
                setOrigin(originalPosition)
                setTranslation({ x: x, y: y })
                setIsMoved(true)

                const targetRect = target.getBoundingClientRect()
                let rating = x / (targetRect.width / 2)
                rating = normalizeRating(rating)

                if (rating > 9.7) rating = 10
                if (rating < 0.3) rating = 0
                setAxieRating(rating)
            }
        }

    }

    function handlePointerMove(target: HTMLElement, x: number, y: number) {
        setTranslation({
            x: x,
            y: y
        })

        if (target) {
            const targetRect = target.getBoundingClientRect()
            let rating = x / (targetRect.width / 2)
            rating = normalizeRating(rating)

            if (rating > 9.7) rating = 10
            if (rating < 0.3) rating = 0

            setAxieRating(rating)
        }
    }

    function handleTouchMove(target: HTMLElement, x: number, y: number) {
        setTranslation({
            x: x,
            y: y
        })
        if (target) {
            const targetRect = target.getBoundingClientRect()
            let rating = x / (targetRect.width / 2)
            rating = normalizeRating(rating)
            setAxieRating(rating)
        }
    }

    function getRatingText(axieRating: number, coolOrCute: string) {
        if (axieRating > 8.9) {
            return coolOrCute === 'cool' ? 'Incredibly Cool 😎💯' : 'Incredibly Cute 😍💯'
        } else if (axieRating > 7.4) {
            return coolOrCute === 'cool' ? 'Very Cool 😎' : 'Very Cute 😍'
        } else if (axieRating > 4.9) {
            return coolOrCute === 'cool' ? 'Cool 😄' : 'Cute 🥰'
        } else if (axieRating > 2.4) {
            return coolOrCute === 'cool' ? 'A Little Cool 🤨' : 'A Little Cute 🤔'
        } else if (axieRating > 0.9) {
            return coolOrCute === 'cool' ? 'Not So Cool 🤓' : 'Not So Cute 😑'
        } else {
            return coolOrCute === 'cool' ? 'Not Cool 😔' : 'Not Cute 🥴'
        }
    }

    return (
        <VStack>
            <VStack>
                <Flex
                    alignItems="center"
                    mr="35px"
                >
                    <VStack>
                        <VStack
                            w="350px"
                            h="350px"
                            className={styles.axieRatingGrid}
                            mt="0px!important"
                            justifyContent="center"
                            border="1px solid"
                            background={`conic-gradient(from 0deg ${changeBorderColorWithAxieRating(axieRating)})`}
                            borderRadius="25px"
                            position="relative"
                            onPointerDown={(e) => {
                                const dropper = document.getElementById("ratingDropper")
                                const target = e.target as HTMLElement
                                handlePointerDown(dropper, target, e.clientX, e.clientY)
                            }}
                            onPointerUp={(e) => {
                                setIsDragging(false)
                                submitRating(axies, axieQuery)
                            }}
                            onPointerMove={(e) => {
                                if (isDragging && e.pointerType === "mouse") {
                                    const target = e.target as HTMLElement
                                    const x = e.clientX - origin.x
                                    const y = e.clientY - origin.y
                                    handlePointerMove(target, x, y)
                                }
                            }}
                            onTouchMove={(e) => {
                                e.preventDefault()
                                if (isDragging) {
                                    const x = e.touches[0].clientX - origin.x
                                    const y = e.touches[0].clientY - origin.y
                                    const target = e.target as HTMLElement
                                    handleTouchMove(target, x, y)
                                }
                            }}
                        >
                            <Box bg="gray.800" w="97%" h="97%" borderRadius="20px">

                            </Box>
                            <Flex
                                w="350px"
                                h="350px"
                                borderRadius="20px"
                                border="7px solid"
                                borderColor="rgba(255, 255, 255, 0.2)"
                                alignItems="center"
                                justifyContent="center"
                                filter="brightness(1.8)"
                                pointerEvents="none"
                                position="absolute"
                                userSelect="none"
                                mt="0px!important"
                                transform={`rotate(${(axieRating - 5) / 5 * 15}deg) translate(${translation.x}px, ${translation.y}px)`}
                            >
                                <Image
                                    src={getV3AxieImage(axies[axieNum].axieId)}
                                    minW="500px"
                                    mt={axies[axieNum].bodyShape === "BigYak" ? "50px" : "20px"}
                                    ml={axies[axieNum].bodyShape === "BigYak" ? "5px" : "3px"}
                                    filter="brightness(0.7)"
                                    opacity="0.8"
                                    alt="Axie Cursor"
                                    onLoad={() => !imagesLoaded && setImagesLoaded(true)}
                                />
                            </Flex>
                            <Box
                                id="ratingDropper"
                                borderRadius="50%"
                                w="100%"
                                h="100%"
                                position="absolute"
                                zIndex="500!important"
                                pointerEvents="none"
                                transform={`translate(${translation.x}px, ${translation.y}px)`}
                            >

                            </Box>
                        </VStack>
                    </VStack>
                </Flex>
            </VStack>
            <VStack mt="10px!important">
                <Button
                    w="300px"
                    h="130px"
                    p="5px!important"
                    border="1px solid"
                    bg="gray.900"
                    _hover={{ bg: "black" }}
                    _active={{ bg: "gray.900", border: "3px solid", transform: "translateY(-5px)", transition: "all 0.1s smooth" }}
                    className={styles.button}
                    userSelect="none"
                    borderColor="gray.300"
                    fontSize="20px"
                    onClick={() => submitRating(axies, axieQuery)}
                    disabled={isButtonDisabled}
                >
                    <VStack
                        justifyContent="center"
                        mt="0px!important"
                        h="100%"
                        userSelect="none"
                    >
                        <Box
                            mt="0px!important"
                            fontSize="23px"
                            color={`hsl(0,${axieRating * 10 + 20}%, 60%)`}
                            fontWeight="800"
                            textAlign="center"
                        >
                            {getRatingText(axieRating, ratingFor)}
                        </Box>
                        <Box>
                            {`${axieRating.toFixed(1)} / 10`}
                        </Box>
                    </VStack>
                </Button>
            </VStack>
        </VStack>

    )
}
