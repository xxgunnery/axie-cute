import React from 'react'
import Layout from '../components/layout'
import { useSession } from 'next-auth/react'
import Admin from '../components/pages/Admin'
import windowWidth from '../scripts/hooks/window'

export default function Home() {

    const { data: session, status } = useSession()

    const isDesktop = windowWidth(1400)

    return (
        <Layout isDesktop={isDesktop}>
            {(session && session.user.role === "ADMIN") && <Admin />}
        </Layout>
    )
}
