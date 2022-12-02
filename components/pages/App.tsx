import React from 'react'
import { Box, Button, Flex, Image, VStack } from '@chakra-ui/react'
import { getV3AxieImage } from '../../scripts/utils/utils'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import AxieRatingUI from './App/AxieRatingUI'
import styles from './App/axierating.module.css'
import Waiting from '../common-components/Waiting'
import { fetchAllAxies } from '../../scripts/graphql/graphql'
import { useSession } from 'next-auth/react'
import Head from 'next/head'

export default function App({ signInLater, dummyUser }: { signInLater: boolean, dummyUser: string }) {

    const [imagesLoaded, setImagesLoaded] = React.useState<boolean>(true)
    const [axieNum, setAxieNum] = React.useState<number>(0)

    const { data: session } = useSession()

    async function getFeedAxies() {
        if (session) {
            const data = await axios.get("api/getFeedAxies?address=" + session.user.address)
            return data
        } else if (signInLater) {
            const data = await axios.get("api/getFeedAxies?address=" + dummyUser)
            return data
        }
    }

    async function storeAxies(sampleAxies: any) {
        if (session) {
            const storage = await axios.post("api/storeAxies", { axies: sampleAxies })
            console.log("UNIQUE AXIES SUCCESSFULLY STORED", storage.data)
        }
    }

    function skipAxie() {
        if (axieQuery.data) {
            if (axieNum === axieQuery.data.data.length - 1) {
                axieQuery.refetch()
                setAxieNum(0)
            } else {
                setAxieNum(axieNum => axieNum + 1)
            }
        }
    }

    // GET USER'S AXIES FROM GRAPHQL
    const userAxieQuery = useQuery(['myAxies'], () => session && fetchAllAxies(session.user.address), {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        enabled: typeof(session) !== null && !signInLater,
    })

    let userAxies: any = false
    if(!signInLater) {
        if (!userAxieQuery.isLoading && !userAxieQuery.isError) {
            userAxies = userAxieQuery.data.data.part1.results
        }
    }

    const storeAxiesQuery = useQuery(['axieStorage'], () => session && storeAxies(userAxies), {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        enabled: !!userAxies
    })

    // GET PROFILE FEED
    const axieQuery = useQuery(['axies'], () => getFeedAxies(), {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        enabled: !storeAxiesQuery.isLoading || signInLater
    })

    if (axieQuery.isLoading) {
        return <Waiting width="120px" />
    } else if (axieQuery.isError) {
        return <Box>Error</Box>
    } else if (axieQuery.data) {
        if (axieQuery.data.data.error) {
            return <Flex
                alignItems="center"
                justifyContent="center"
                h="98vh"
            >
                {axieQuery.data.data.message}
            </Flex>
        }
    }

    const { refetch, data } = axieQuery
    const axies = data?.data.axieFeed

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Axie-Cute App</title>
            </Head>
            <VStack
                m="0px!important"
                h="98vh"
                overflowY="scroll"
            >
                <VStack
                    w="100%"
                    justifyContent="center"
                >
                    <VStack display={imagesLoaded ? "flex" : "none"}>
                        <VStack
                            w="400px"
                            h="220px"
                            justifyContent="center"
                            userSelect="none"
                        >
                            {
                                !axieQuery.isLoading ?
                                    <Image
                                        alt="Axie"
                                        className={styles.axie}
                                        src={getV3AxieImage(axies[axieNum].axieId)}
                                        minW="300px"
                                        mt={axies[axieNum].bodyShape === "BigYak" ? "60px" : "40px"}
                                        ml={axies[axieNum].bodyShape === "BigYak" ? "35px" : "15px"}
                                        onLoad={() => !imagesLoaded && setImagesLoaded(true)}
                                    />
                                    :
                                    <Waiting width="120px" />
                            }
                        </VStack>
                        <AxieRatingUI
                            axieNum={axieNum}
                            setAxieNum={setAxieNum}
                            axies={axies}
                            refetchAxies={refetch}
                            dummyUser={dummyUser}
                        />
                        <Button
                            mt="10px!important"
                            p="8px 6px 8px 6px!important"
                            h="auto"
                            color="gold"
                            onClick={() => skipAxie()}
                        >
                            Skip Axie
                        </Button>
                    </VStack >
                </VStack>
            </VStack>
        </>
    )
}
