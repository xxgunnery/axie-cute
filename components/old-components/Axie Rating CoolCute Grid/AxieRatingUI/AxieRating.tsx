import React from 'react'
import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import { getV3AxieImage } from '../../../../scripts/utils/utils'
import styles from '../axierating.module.css'
import { AxieRatingType, XYCoordinates } from '../AxieRatingUI'
import { Axie } from '@prisma/client'

type Props = {
    axieNum: number
    axieRating: AxieRatingType
    setAxieRating: React.Dispatch<React.SetStateAction<AxieRatingType>>
    axies: Axie[]
    isMoved: boolean
    setIsMoved: React.Dispatch<React.SetStateAction<boolean>>
    translation: XYCoordinates
    setTranslation: React.Dispatch<React.SetStateAction<XYCoordinates>>
    origin: XYCoordinates
    setOrigin: React.Dispatch<React.SetStateAction<XYCoordinates>>
}

export default function AxieRating({ axieNum, axieRating, setAxieRating, axies, isMoved, setIsMoved, translation, setTranslation, origin, setOrigin }: Props) {

    React.useEffect(() => {
        window.addEventListener('pointerup', () => setIsDragging(false));

        return () => {
            window.removeEventListener('pointerup', () => setIsDragging(false));
        }
    }, [])

    const [isDragging, setIsDragging] = React.useState<boolean>(false)

    function normalizeRating(rating: number) {
        return Math.round((((rating + 1) / 2) * 100)) / 10
    }

    function changeBorderColorWithAxieRating(axieRating: any) {
        const cuteAmount = Math.round(axieRating.cute / 3 * 30)
        const coolAmount = Math.round(axieRating.cool / 3 * 30)

        const cuteColors = `,hsl(0,${axieRating.cute * 10 + 20}%, 60%)`.repeat(cuteAmount)
        const coolColors = `,hsl(209, ${axieRating.cool * 8 + 20}%, 60%)`.repeat(coolAmount)

        return cuteColors + coolColors
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

                const x = clientX - originalPosition.x
                const y = clientY - originalPosition.y
                setOrigin(originalPosition)
                setTranslation({ x: x, y: y })
                setIsMoved(true)

                const targetRect = target.getBoundingClientRect()
                let cuteRating = x / (targetRect.width / 2)
                let coolRating = -y / (targetRect.height / 2)
                cuteRating = normalizeRating(cuteRating)
                coolRating = normalizeRating(coolRating)
                if (coolRating > 10) coolRating = 10
                if (cuteRating > 10) cuteRating = 10
                if (coolRating < 0) coolRating = 0
                if (cuteRating < 0) cuteRating = 0
                setAxieRating({ cute: cuteRating, cool: coolRating })
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
            let cuteRating = x / (targetRect.width / 2)
            let coolRating = -y / (targetRect.height / 2)
            cuteRating = normalizeRating(cuteRating)
            coolRating = normalizeRating(coolRating)

            if (coolRating > 9.7) coolRating = 10
            if (cuteRating > 9.7) cuteRating = 10
            if (coolRating < 0.3) coolRating = 0
            if (cuteRating < 0.3) cuteRating = 0

            setAxieRating({ cute: cuteRating, cool: coolRating })
        }
    }

    function handleTouchMove(target: HTMLElement, x: number, y: number) {
        setTranslation({
            x: x,
            y: y
        })
        if (target) {
            const targetRect = target.getBoundingClientRect()
            let cuteRating = x / (targetRect.width / 2)
            let coolRating = -y / (targetRect.height / 2)
            cuteRating = normalizeRating(cuteRating)
            coolRating = normalizeRating(coolRating)
            setAxieRating({ cute: cuteRating, cool: coolRating })
        }
    }

    return (

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
            <Box w="97%" h="97%" bg="gray.800" borderRadius="20px">

            </Box>
            <Box
                id="ratingDropper"
                borderRadius="50%"
                w="200px"
                h="200px"
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
                    <Flex columnGap="5px" userSelect="none" mb="10px">
                        <VStack bg={`hsla(0,${axieRating.cute * 10 + 20}%, 60%, ${axieRating.cute / 10 + 0.6})`} borderRadius="5px" p="2px">
                            <Box mt="0px!important" fontSize="15px">
                                Cuteness
                            </Box>
                            <Box mt="0px!important" fontWeight="800" fontSize="15px">
                                {axieRating.cute}
                            </Box>
                        </VStack>
                        <VStack bg={`hsla(209, ${axieRating.cool * 8 + 20}%, 60%, ${axieRating.cool / 10 + 0.6})`} borderRadius="5px" p="2px">
                            <Box mt="0px!important" fontSize="15px">
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
                            minW="100px"
                            mt="5px"
                            ml={axies[axieNum].bodyShape === "BigYak" ? "5px" : "3px"}
                            filter="brightness(0.7)"
                            opacity="0.8"
                            alt="Axie Cursor"
                        />
                    </Flex>
                </VStack>
            </Box>
        </VStack>
    )
}
