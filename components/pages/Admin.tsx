import React from 'react'
import { Box, Button, VStack } from "@chakra-ui/react";
import axios from 'axios'

export default function Admin() {

    async function deleteDummyUsers() {
        const res = await axios.post("/api/admin/deleteDummyUsers")
        console.log(res)
    }

    async function deleteOldVotes() {
        const res = await axios.post("/api/admin/deleteOldVotes")
        console.log(res)
    }

    // async function normalizeAxieRatings() {
    //     const res = await axios.post("/api/admin/normalizeAxieRatings")
    //     console.log(res)
    // }

    return (
        <VStack
            minH="90vh"
            alignItems="center"
            justifyContent="center"
            fontSize="15px"
        >
            {/* <Button onClick={() => normalizeAxieRatings()}>
                Normalize Axies With Ratings
            </Button> */}
            <Button onClick={() => deleteDummyUsers()}>
                Delete DummyUsers From Users
            </Button>
            <Button onClick={() => deleteOldVotes()}>
                Remove Old Votes
            </Button>
        </VStack>
    )
}