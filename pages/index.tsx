import React from 'react'
import Layout from '../components/layout'
import App from '../components/pages/App'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../chakra/theme'

export default function Home() {

    return (
        <Layout>
            <App />
        </Layout>
    )
}
