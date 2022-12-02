import React from "react"
import { Box, Button, Flex, Input, Tooltip } from '@chakra-ui/react'

type Props = {
    numAxies: number
    perPage: number
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Pagination({ numAxies, perPage, currentPage, setCurrentPage, }: Props) {

    function getPages(numAxies: number) {
        const numPages = numAxies ? Math.ceil(numAxies / perPage) : 0
        const pages = []
        for (let i = 0; i < numPages; i++) {
            pages.push(i + 1)
        }
        return pages
    }

    function updatePage() {
        if (currentPage < 1) {
            setCurrentPage(1)
        } else if (currentPage > getPages(numAxies).length) {
            setCurrentPage(getPages(numAxies).length)
        } else {
            setCurrentPage(currentPage)
        }
    }

    return (
        <Flex alignItems="center" justifyContent="center">
            <Button
                mr="5px"
                p="0px"
                fontSize="24px"
                onClick={() => {
                    setCurrentPage((prev: number) => (prev <= 1 ? 1 : prev - 1))
                }}
            >
                {"<"}
            </Button>
            <Box mr="5px">Page</Box>
            <Tooltip placement="top" label="Press enter to change pages">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    updatePage()
                }}>
                    <Input
                        type="number"
                        w="100px"
                        fontSize="14px"
                        value={currentPage}
                        onChange={(e) => {
                            const value = parseInt(e.target.value)
                            setCurrentPage(value)
                        }}
                    />
                </form>
            </Tooltip>
            <Flex alignItems="center" justifyContent="center">
                <Box m="0px 5px 0px 5px">of</Box>
                <Box mt="0px!important" fontSize="16px">{getPages(numAxies).length}</Box>
            </Flex>
            <Button
                ml="5px"
                p="0px"
                fontSize="24px"
                onClick={() => {
                    setCurrentPage((prev: number) =>
                        prev >= getPages(numAxies).length ? getPages(numAxies).length : prev + 1
                    )
                }}
            >
                {">"}
            </Button>
        </Flex>
    )
}
