import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import theme from '../chakra/theme'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </SessionProvider>
    )
}
