import React from 'react'
import Layout from '../components/layout'
import { useSession } from 'next-auth/react'
import Admin from '../components/pages/Admin'

export default function Home() {

    const { data: session, status } = useSession()

    return (
        <Layout>
            {(session && session.user.role === "ADMIN") && <Admin />}
        </Layout>
    )
}
