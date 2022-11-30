import {
    extendTheme,
    theme as base,
    useColorMode,
    useColorModeValue,
    withDefaultColorScheme,
    withDefaultVariant,
} from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = extendTheme(
    {
        initialColorMode: "dark",
        colors: {
            brand: {
                50: '#e4f4ff',
                100: '#bde2ff',
                200: '#90d1ff',
                300: '#5ebeff',
                400: '#34aeff',
                500: '#029fff',
                600: '#1c90ff',
                700: '#247cfe',
                800: '#296aeb',
                900: '#2d48cc',
            },
            complementary: {
                50: '#fdfde8',
                100: '#f9f9c6',
                200: '#f6f5a1',
                300: '#f3f17c',
                400: '#f0ed5e',
                500: '#ece843',
                600: '#eed93e',
                700: '#edc234',
                800: '#ebaa29',
                900: '#e78415',
            },
            triadic1: {
                50: '#fce5ed',
                100: '#f8bdd2',
                200: '#f492b5',
                300: '#f16697',
                400: '#ed4680',
                500: '#eb296a',
                600: '#da2666',
                700: '#c32361',
                800: '#ae1f5c',
                900: '#891953',
            },
            /* THESE COLORS ARE LOWER SATURATION TRIADIC1 COLORS */
            triadic1Soft: {
                50: 'hsl(339, 40%, 95%)',
                100: 'hsl(339, 40%, 90%)',
                200: 'hsl(339, 40%, 80%)',
                300: 'hsl(339, 40%, 70%)',
                400: 'hsl(339, 40%, 60%)',
                500: 'hsl(339, 40%, 50%)',
                600: 'hsl(339, 40%, 40%)',
                700: 'hsl(339, 40%, 30%)',
                800: 'hsl(339, 40%, 20%)',
                900: 'hsl(339, 40%, 10%)',
            }
        },
        fonts: {
        },
        styles: {
            global: (props: StyleFunctionProps) => ({
                body: {
                    color: mode('gray.800', 'gray.100')(props),
                    textShadow: mode('0 0.5px 0.5px rgba(0, 0, 0, 0.2)', '0 2px 4px rgba(0, 0, 0, 0.3)')(props),
                    bg: mode('gray.100', 'gray.800')(props),
                }
            })
        },
        layerStyles: {
            statistic: {
                margin: { base: "2px 4px 2px 4px", md: "5px 8px 5px 8px" },
                padding: { base: "2px 4px 2px 4px", md: "5px 8px 5px 8px" },
                alignItems: "center",
                justifyContent: "center",
                w: { base: "150px", md: "250px" },
                fontSize: { base: "12px", md: "20px" },
                bg: "gray.400",
                ".chakra-ui-dark &": { bg: "gray.300", color: "black" }
            }
        },
        components: {
            Button: {
                variants: {
                    primary: (props: any) => ({
                        color: mode('white', 'gray.800')(props),
                        borderRadius: "10px",
                        backgroundColor: mode('brand.300', 'brand.200')(props),
                        _hover: {
                            backgroundColor: mode('brand.600', 'brand.300')(props)
                        },
                        _active: {
                            backgroundColor: mode('brand.brand.700', 'brand.400')(props)
                        }
                    }),
                }
            }
        }
    }
);

export default theme;
