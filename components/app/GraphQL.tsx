import React from 'react'
import { Box, Button, Flex, Input, Menu, MenuButton, MenuItem, MenuList, VStack } from '@chakra-ui/react'

export default function GraphQL() {

    const [selectedClass, setSelectedClass] = React.useState('')

    return (
        <VStack>
            <Flex bg="brand.300" borderRadius="10px">
                <Menu>
                    <MenuButton
                        as={Button}
                        m="0px 5px 0px 5px"
                        variant="registration"
                        fontSize="14px"
                    >
                        {
                            selectedClass === '' ? 'Select Class' : selectedClass
                        }
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            onClick={(e) => {
                                const target = e.target as HTMLButtonElement
                                setSelectedClass(target.innerHTML)
                            }}
                            fontSize="14px"
                        >
                            Class
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </VStack>
    )
}
