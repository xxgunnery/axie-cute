import React from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
import axios from 'axios'

export default function Home() {

    const [username, setUsername] = React.useState('')
    const [user, setUser] = React.useState(null)
    const [error, setError] = React.useState(null)

    async function createUser(username:string) {
        axios.get("/api/create?username=" + username).then((res) => {
            console.log(res.data.username)
            setUser(res.data.username)
            setError(null)
        }).catch((err) => {
            const error = err.response.data.error
            console.log(error)
            setError(error)
        })
    }

    return (
        <Box>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} w="300px"/>
            <Button onClick={() => createUser(username)}>
                Create User
            </Button>
            <Box>
                {user ? user : "No user created"}
            </Box>
            <Box color="red">
                {error}
            </Box>

        </Box>
    )
}
