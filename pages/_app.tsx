import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import theme from '../chakra/theme'
import { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient()

    function ForceDarkMode(props: { children: JSX.Element }) {
        const { colorMode, toggleColorMode } = useColorMode();

        React.useEffect(() => {
            if (colorMode === "dark") return;
            toggleColorMode();
        }, [colorMode]);

        return props.children;
    }

    return (
        <ChakraProvider theme={theme}>
            <ForceDarkMode>
                <QueryClientProvider client={queryClient}>
                    <SessionProvider session={pageProps.session}>
                        <Component {...pageProps} />
                        <Analytics />
                    </SessionProvider>
                </QueryClientProvider>
            </ForceDarkMode>
        </ChakraProvider>
    )
}
