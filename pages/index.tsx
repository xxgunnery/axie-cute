import React from 'react'
import Layout from '../components/layout'
import App from '../components/pages/App'
import { useSession } from 'next-auth/react'
import Login from '../components/pages/Login'

export default function Home() {

    const session = useSession()

    const [signInLater, setSignInLater] = React.useState(false)
    const [dummyUser, setDummyUser] = React.useState('')

    return (
        <Layout>
            {(session.status === "authenticated" || signInLater) ? <App signInLater={signInLater} dummyUser={dummyUser}/> : <Login setSignInLater={setSignInLater} setDummyUser={setDummyUser}/>}
        </Layout>
    )
}
