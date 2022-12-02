import React from 'react'
import { Box, Flex, Image, Link, Tooltip, VStack } from '@chakra-ui/react'
import { getClassColor, getLinearGradient, getV3AxieImage } from '../../../scripts/utils/utils'

interface Props {
    axie: any
    key: string
    imagesLoaded: boolean
    setImagesLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AxieCard({ axie, key, imagesLoaded, setImagesLoaded }: Props) {
    return (
        <VStack
            key={key}
            borderRadius="5px"
            p="10px"
            h="300px"
            bg={getLinearGradient(axie.class)}
        >

            <Flex w="100%" justifyContent="space-between" alignItems="center">
                <Flex
                    alignItems="center"
                    mt="0px!important"
                    columnGap="5px"
                    color={getClassColor(axie.class)}
                    fontSize="15px"
                    p="5px"
                    bg="gray.800"
                    borderRadius="2px"
                >
                    <Image src={"images/axies/assets/" + axie.class.toLowerCase() + ".png"} w="20px" display="inline" />
                    {"#" + axie.axieId}
                </Flex>
                <Tooltip label={"Total number ratings: " + axie.impressions} borderRadius="5px" textShadow="none">
                    <Flex alignItems="center" columnGap="5px">
                        <Image src="images/eyeball-grey.png" w="16px" h="11px" />
                        {axie.impressions}
                    </Flex>
                </Tooltip>
                <Box>
                    <Tooltip label="View on Axie Infinity" placement="top" borderRadius="5px" textShadow="none">
                        <Link href={"https://app.axieinfinity.com/marketplace/axies/" + axie.axieId} isExternal>
                            <Image src="images/external-link-grey.png" w="20px" />
                        </Link>
                    </Tooltip>
                </Box>
            </Flex>
            <Box mt="0px!important" h="150px">
                <Image
                    src={getV3AxieImage(axie.axieId)}
                    w="250px"
                    onLoad={() => !imagesLoaded && setImagesLoaded(true)}
                />
            </Box>
            <VStack columnGap="10px" justifyContent="center" alignItems="flex-start" w="100%">
                <Flex alignSelf="center" alignItems="center" justifyContent="center" columnGap="15px">
                    <Box>
                        {
                            axie.name.length > 16
                                ? axie.name.substring(0, 16) + "..."
                                : axie.name
                        }
                    </Box>
                </Flex>
                <Tooltip label={"Cute score (out of 10): " + axie.axieCuteScore} borderRadius="5px" textShadow="none">
                    <VStack position="relative" w="100%" alignItems="flex-start">
                        <Box position="absolute">
                            {axie.axieCuteScore.toFixed(1)}
                        </Box>
                        <Box ml="30px!important" bg="rgba(255,255,255,0.2)" w="calc(85%)" h="10px" borderRadius="5px" position="absolute" zIndex="-1" />
                        <Box ml="30px!important" bg="red.500" w={(axie.axieCuteScore / 10 * 100) - 15 + "%"} h="10px" borderRadius="5px" />
                    </VStack>
                </Tooltip>
                <Tooltip label={"Cool score (out of 10): " + axie.axieCoolScore} borderRadius="5px" textShadow="none">
                    <VStack position="relative" w="100%" alignItems="flex-start">
                        <Box position="absolute">
                            {axie.axieCoolScore.toFixed(1)}
                        </Box>
                        <Box ml="30px!important" bg="rgba(255,255,255,0.2)" w="calc(85%)" h="10px" borderRadius="5px" position="absolute" zIndex="-1" />
                        <Box ml="30px!important" bg="blue.500" w={(axie.axieCoolScore / 10 * 100) - 10 + "%"} h="10px" borderRadius="5px" />
                    </VStack>
                </Tooltip>
            </VStack>
        </VStack>
    )
}