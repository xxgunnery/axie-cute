import React from 'react'
import Layout from '../components/layout'
import App from '../components/pages/App'
import { useSession } from 'next-auth/react'
import Login from '../components/pages/Login'
import windowWidth from '../scripts/hooks/window'

export default function Home() {

    const session = useSession()

    const [signInLater, setSignInLater] = React.useState(false)
    const [dummyUser, setDummyUser] = React.useState('')
    
    const isDesktop = windowWidth(1400)

    return (
        <Layout isDesktop={isDesktop}>
            {(session.status === "authenticated" || signInLater) ? <App signInLater={signInLater} dummyUser={dummyUser} isDesktop={isDesktop} /> : <Login setSignInLater={setSignInLater} setDummyUser={setDummyUser}/>}
        </Layout>
    )
}
