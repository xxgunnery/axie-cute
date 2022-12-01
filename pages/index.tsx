import React from 'react'
import Layout from '../components/layout'
import App from '../components/pages/App'
import { useSession } from 'next-auth/react'
import Login from '../components/pages/Login'

export default function Home() {

    const session = useSession()

    return (
        <Layout>
            {session.status === "authenticated" ? <App /> : <Login />}
        </Layout>
    )
}
