import React from 'react'
import { Box, Button, Flex, Heading, Image, Input, Link, ListItem, Radio, RadioGroup, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Tooltip, UnorderedList, VStack } from '@chakra-ui/react'
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
}

export type XYCoordinates = {
    x: number
    y: number
}

export default function AxieRatingUI({ axieNum, setAxieNum, axies, axieQuery, dummyUser, imagesLoaded, setImagesLoaded }: Props) {

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
    const [radioValue, setRadioValue] = React.useState<string>("1")
    const [ratingFor, setRatingFor] = React.useState<string>("cute")
    const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(false)

    const [isDragging, setIsDragging] = React.useState<boolean>(false)
    const [isMoved, setIsMoved] = React.useState<boolean>(false)
    const [origin, setOrigin] = React.useState({ x: 0, y: 0 })
    const [translation, setTranslation] = React.useState({ x: 0, y: 0 })

    const [isAlert, setIsAlert] = React.useState<boolean>(false)
    const [alertText, setAlertText] = React.useState<string>("")
    const [panelOpen, setPanelOpen] = React.useState({ ratingFor: true, help: false })

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

    function determineFor(sliderVal: number) {
        if (sliderVal === 1) {
            return "cute"
        } else if (sliderVal === 2) {
            return "cool"
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
            <Flex position="absolute" bottom="0" right="10px" alignItems="center" columnGap="5px">
                Display help
                <Button
                    bg="black"
                    border="1px solid rgba(255,255,255,0.3)"
                    borderRadius="50%"
                    p="0px!important"
                    mt="0px!important"
                    fontSize="23px"
                    h="30px"
                    minW="30px!important"
                    onClick={() => setPanelOpen(prev => {
                        return { ...prev, help: !prev.help }
                    })}
                >
                    ?
                </Button>
            </Flex>
            <VStack
                position="absolute"
                top="30%"
                zIndex={panelOpen.help ? "200" : "0"}
                w="400px"
                p="10px"
                borderRadius="10px"
                border="3px solid rgba(255, 255, 255,0.7)"
                bg="rgba(150, 200, 255, 1)"
                display={panelOpen.help ? "flex" : "none"}
                color="black"
            >
                <Flex
                    position="absolute"
                    right="20px"
                    fontSize="20px"
                    p="5px 5px 8px 5px"
                    borderRadius="5px"
                    bg="gray.200"
                    h="25px"
                    w="25px"
                    justifyContent="center"
                    alignItems="center"
                    _hover={{ cursor: "pointer", bg: "gray.50" }}
                    onClick={() => setPanelOpen(prev => {
                        return { ...prev, help: !prev.help }
                    })}
                >
                    x
                </Flex>
                <Heading size="sm" textDecoration="underline">
                    App Instructions✍️:
                </Heading>
                <UnorderedList w="90%">
                    <ListItem>
                        Select the type of axie you want to rate using the top panel.
                    </ListItem>
                    <ListItem>
                        <strong>Rating Axies:</strong>

                        <UnorderedList w="90%">
                            <ListItem>
                                <strong>Option 1:</strong> Drag the slider to the left or right to rate the axie.
                            </ListItem>
                            <ListItem>
                                <strong>Option 2:</strong> Swipe the axie left or right to rate it.
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <strong>Note:</strong> Ratings are submitted automatically when you stop swiping!
                    </ListItem>
                </UnorderedList>
            </VStack>
            <VStack
                alignItems="center"
                position="absolute"
                top="30%"
                zIndex={isAlert ? "200" : "0"}
                w="400px"
                p="10px"
                borderRadius="10px"
                border="3px solid rgba(255, 255, 255,0.7)"
                bg="rgba(150, 200, 255, 1)"
                onTransitionEnd={() => setIsAlert(false)}
                className={isAlert ? styles.alert : styles.alertOff}
            >
                <Box fontSize="25px" color="black">
                    Notification
                </Box>
                <Flex fontSize="20px" alignItems="center" h="100%" mt="0px!important" color="black" fontWeight="800">
                    {alertText}
                </Flex>
            </VStack>
            <Flex
                position="relative"
                p={panelOpen.ratingFor ? "40px 5px 0px 10px" : "0px"}
                minH="30px"
                minW="40px"
                mb="10px!important"
                columnGap="20px"
                alignItems='center'
                justifyContent="center"
                bg="gray.700"
                borderRadius="5px"
            >
                <Flex
                    bg="gray.800"
                    p="5px"
                    borderRadius="5px"
                    top="5px"
                    left="5px"
                    position="absolute"
                    alignItems="center"
                    columnGap="5px"
                    _active={{ bg: "gray.600" }}
                    _hover={{ cursor: "pointer", bg: "gray.600" }}
                    onClick={() => setPanelOpen(prev => {
                        return { ...prev, ratingFor: !prev.ratingFor }
                    })}
                >
                    <Image src="images/hide-show-arrow.png" w="20px" h="10px" />
                    <Box fontSize="14px" display={panelOpen.ratingFor ? "block" : "none"}>
                        Click To Shrink Panel
                    </Box>
                </Flex>
                <RadioGroup
                    display={panelOpen.ratingFor ? "flex" : "none"}
                    flexDirection="column"
                    onChange={(val) => {
                        const valNum = parseInt(val)
                        setRatingFor(determineFor(valNum)!)
                        setRadioValue(val)
                        setIsAlert(true)
                        setAlertText(`You are now rating for ${determineFor(valNum)}!`)
                    }}
                    defaultValue="1"
                >
                    <Box mt="0px!important" mb="10px">
                        Choose how you want to rate axies:
                    </Box>
                    <Stack direction="row" spacing="0" justifyContent="center">
                        <VStack mt="0px!important" w="25px">
                            <Radio size="lg" value="1" transform="scale(1.3)" />
                            <Box mt="3px!important">
                                Cute
                            </Box>
                        </VStack>
                        <Box borderTop="1px solid white" h="0" w="20px" mt="10px!important" />
                        <VStack mt="0px!important" w="25px">
                            <Radio size="lg" value="2" transform="scale(1.3)" />
                            <Box mt="3px!important">
                                Cool
                            </Box>
                        </VStack>
                    </Stack>
                </RadioGroup>
            </Flex >
            <VStack
                w="350px"
                h="350px"
                mt="0px!important"
                justifyContent="center"
                border="1px solid"
                background={`conic-gradient(from 0deg ${changeBorderColorWithAxieRating(axieRating)})`}
                borderRadius="10px"
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
                onTouchEnd={(e) => {
                    setIsDragging(false)
                    submitRating(axies, axieQuery)
                }}
            >
                <Box bg="gray.800" w="97%" h="97%" borderRadius="12px">

                </Box>
                <Flex
                    w="350px"
                    h="350px"
                    borderRadius="12px"
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
                        minW={axies[axieNum].bodyShape === "BigYak" ? "450px" : "500px"}
                        mt={axies[axieNum].bodyShape === "BigYak" ? "50px" : "20px"}
                        ml={axies[axieNum].bodyShape === "BigYak" ? "5px" : "3px"}
                        filter="brightness(0.7)"
                        opacity="0.8"
                        className={styles.removeTouch}
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
            <VStack>
                <Slider
                    w="300px"
                    min={0}
                    max={10}
                    step={0.1}
                    value={axieRating}
                    focusThumbOnChange={false}
                    onChange={(val) => {
                        setAxieRating(val)
                        const distFromCenterVal = val - 5
                        setTranslation({ x: (distFromCenterVal) * 40, y: 0 })
                    }}
                    onChangeEnd={() => submitRating(axies, axieQuery)}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </VStack>
            <Link
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="blue.900"
                border="1px solid rgba(255,255,255,0.3)"
                borderRadius="5px"
                p="5px 20px 5px 20px!important"
                minH="60px"
                w="90%"
                _hover={{ cursor: "pointer", bg: "blue.700" }}
                href={"/axies/" + axies[axieNum].axieId}
                isExternal
            >
                View This Axie On Axie-Cute!
                <Image ml="5px" display="inline-block" src="images/external-link-grey.png" w="25px" h="25px" />
            </Link>
            <VStack mt="10px!important">
                <Box
                    w="300px"
                    h="130px"
                    p="5px!important"
                    border="1px solid"
                    bg="gray.900"
                    _hover={{ bg: "black" }}
                    _active={{ bg: "gray.900", border: "3px solid", transform: "translateY(-5px)", transition: "all 0.1s smooth" }}
                    className={styles.button}
                    userSelect="none"
                    borderRadius="5px"
                    borderColor="gray.300"
                    fontSize="20px"
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
                </Box>
            </VStack>
        </VStack >

    )
}
