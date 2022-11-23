import React from 'react'
import Layout from '../components/layout'
import AxieFeed from '../components/app/AxieFeed'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../chakra/theme'

export default function Home() {

    return (
        <Layout>
            <AxieFeed />
        </Layout>
    )
}
