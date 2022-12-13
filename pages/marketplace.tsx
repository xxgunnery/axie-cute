import React from 'react'
import Layout from '../components/layout'
import Market from '../components/pages/Market'
import windowWidth from '../scripts/hooks/window'

export default function Home() {

    const isDesktop = windowWidth(1400)

    return (
        <Layout isDesktop={isDesktop}>
            <Market />
        </Layout>
    )
}
