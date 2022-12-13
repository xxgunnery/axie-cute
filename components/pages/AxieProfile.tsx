import React from "react"
import { Box, VStack } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getAxieDetail } from "../../scripts/graphql/graphql"
import Waiting from "../common-components/Waiting"

export default function AxieProfile({ axieId }: { axieId: string }) {

    async function getAxieProfile(axieId: string) {
        const response = await axios.get("/api/getAxieProfile?axieId=" + axieId)
        const data = response.data
        console.log(data)
        return data
    }

    const axieProfileQuery = useQuery(["axieProfile"], () => getAxieProfile(axieId), {
        refetchOnWindowFocus: false,
    })

    const axieData = useQuery(["axieProfileData"], () => getAxieDetail(axieId))

    if(axieProfileQuery.isLoading || axieData.isLoading) {
        return <Waiting width="200px" />
    } else if(axieProfileQuery.isError || axieData.isError) {
        console.log("ERROR")
    } else {
        console.log("SUCCESS")
    }

    console.log(axieProfileQuery.data)
    console.log(axieData.data.data.axie)

    return (
        <VStack>
            <Box>
                HELLO WORLD
            </Box>
        </VStack>
    )
}