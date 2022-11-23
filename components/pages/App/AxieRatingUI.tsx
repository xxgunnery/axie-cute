import React from 'react'
import { Box, Button, Flex, Image, VStack } from '@chakra-ui/react'
import axios from 'axios'
import styles from './axierating.module.css'
import AxieRating from './AxieRatingUI/AxieRating'

export default function AxieRatingUI({ axieNum, setAxieNum, axieQuery }: any) {

    // THIS COMPONENT LEVEL STATE
    const [axieRating, setAxieRating] = React.useState({ cute: 5, cool: 5 })
    const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(false)

    // LOWER LEVEL STATE
    const [isMoved, setIsMoved] = React.useState<boolean>(false)
    const [origin, setOrigin] = React.useState({ x: 0, y: 0 })
    const [translation, setTranslation] = React.useState({ x: 0, y: 0 })

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

    function getRatingText(axieRating: number, coolOrCute: string) {
        if (axieRating > 9) {
            return coolOrCute === 'cool' ? 'Incredibly Cool 😎💯' : 'Incredibly Cute 😍💯'
        } else if (axieRating > 7.5) {
            return coolOrCute === 'cool' ? 'Very Cool 😎' : 'Very Cute 😍'
        } else if (axieRating > 5) {
            return coolOrCute === 'cool' ? 'Cool 😄' : 'Cute 🥰'
        } else if (axieRating > 2.5) {
            return coolOrCute === 'cool' ? 'A Little Cool 🤨' : 'A Little Cute 🤔'
        } else if (axieRating > 1) {
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
                    <Flex mr="5px">
                        <Box
                            className={styles.verticalText}
                            textAlign="center"
                            transform="rotate(180deg)"
                            color="blue.500"
                            fontWeight="800"
                        >
                            MORE COOL
                            <Image
                                alt="Left Hand Axis Arrow"
                                transform="rotate(180deg)"
                                h="270px"
                                src="/images/arrow-up.png"
                            />
                        </Box>
                    </Flex>
                    <AxieRating
                        axieNum={axieNum}
                        axieRating={axieRating}
                        setAxieRating={setAxieRating}
                        isMoved={isMoved}
                        setIsMoved={setIsMoved}
                        origin={origin}
                        setOrigin={setOrigin}
                        translation={translation}
                        setTranslation={setTranslation}
                        axieQuery={axieQuery}
                    />
                </Flex>
                <Flex
                    flexDirection="column-reverse"
                    alignItems="center"
                    color="red.500"
                    fontWeight="800"
                    mt="5px"
                >
                    MORE CUTE
                    <Image src="/images/arrow-right.png" w="270px" alt="Bottom Axis Arrow"/>
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
                    onClick={() => submitRating(axieQuery)}
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
                            color={`hsl(0,${axieRating.cute * 10 + 20}%, 60%)`}
                            fontWeight="800"
                            textAlign="center"
                        >
                            {getRatingText(axieRating.cute, "cute")}
                        </Box>
                        <Box mt="0px!important" textAlign="center" color="gray.300">
                            &
                        </Box>
                        <Box
                            mt="0px!important"
                            fontSize="23px"
                            color={`hsl(209, ${axieRating.cool * 8 + 20}%, 60%)`}
                            fontWeight="800"
                            textAlign="center"
                        >
                            {getRatingText(axieRating.cool, "cool")}
                        </Box>
                        {
                            isMoved &&
                            <Box className={styles.flash} fontSize="13px" mt="5px!important">
                                ( READY TO SUBMIT - CLICK HERE )
                            </Box>
                        }

                    </VStack>
                </Button>
            </VStack>
        </VStack>

    )
}
