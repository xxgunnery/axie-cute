import React from 'react'
import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import { AXIE_BODY_LIST, AXIE_CLASS_LIST } from '../../scripts/app-data/data'
import AxieMenuSelection from './App/AxieMenuSelection'
//import { fetchAllAxies } from '../../scripts/graphql/graphql'
import { getV3AxieImage } from '../../scripts/utils/utils'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import AxieRating from './App/AxieRatingUI'
import styles from './App/axierating.module.css'
import Waiting from '../common-components/Waiting'
import { fetchAllAxies } from '../../scripts/graphql/graphql'
import { useSession } from 'next-auth/react'

export default function App() {

    const [imagesLoaded, setImagesLoaded] = React.useState<boolean>(true)
    const [axieNum, setAxieNum] = React.useState<number>(0)

    const { data: session, status } = useSession()

    async function getFeedAxies() {
        const data = await axios.get("api/getFeedAxies")
        return data
    }

    async function storeAxies(sampleAxies: any) {
        if (session) {
            const storage = await axios.post("api/storeAxies", { axies: sampleAxies })
            console.log("UNIQUE AXIES SUCCESSFULLY STORED", storage.data)
        }
    }

    // GET USER'S AXIES FROM GRAPHQL
    const userAxieQuery = useQuery(['myAxies'], () => session && fetchAllAxies(session.user.address), {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    })

    let userAxies: any = false
    if (!userAxieQuery.isLoading && !userAxieQuery.isError) {
        userAxies = userAxieQuery.data.data.part1.results
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
        enabled: !storeAxiesQuery.isLoading
    })

    if (axieQuery.isLoading) {
        return <Waiting width="120px" />
    } else if (axieQuery.isError) {
        return <Box>Error</Box>
    }

    const axies = axieQuery.data.data

    return (
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
                            !axieQuery.isFetching ?
                                < Image
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
                    <AxieRating
                        axieNum={axieNum}
                        setAxieNum={setAxieNum}
                        axieQuery={axieQuery}
                    />
                </VStack >
            </VStack>
        </VStack>
    )
}
