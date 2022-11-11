import React from 'react'
import { Box, Button, Flex, Input, Menu, MenuButton, MenuItem, MenuList, VStack } from '@chakra-ui/react'

interface MenuProps {
    menuList: string[]
    menuName: string
    changeFormData: (target: HTMLButtonElement) => void
    formData: { class: string, body: string }
}

export default function AxieMenuSelection({ menuList, menuName, formData, changeFormData }: MenuProps) {

    interface FormData {
        class: string
        body: string
    }

    return (
        <VStack>
            <Box>
                {menuName}
            </Box>
            <Box>
                <Menu>
                    <MenuButton
                        as={Button}
                        variant="registration"
                        fontSize="14px"
                        w="160px"
                        bg="brand.500"
                        m="0!important"
                    >
                        {
                            formData[menuName.toLowerCase() as keyof FormData] === ''
                                ?
                                'None'
                                :
                                formData[menuName.toLowerCase() as keyof FormData]
                        }
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            value={menuName.toLowerCase()}
                            m="0px"
                            onClick={(e) => {
                                const target = e.target as HTMLButtonElement
                                changeFormData(target)
                            }}
                            fontSize="14px"
                        >
                            None
                        </MenuItem>
                        {
                            menuList.map((listItem) =>
                                <MenuItem
                                    m="0px"
                                    key={listItem}
                                    value={menuName.toLowerCase()}
                                    onClick={(e) => {
                                        const target = e.target as HTMLButtonElement
                                        changeFormData(target)
                                    }}
                                    fontSize="14px"
                                >
                                    {listItem}
                                </MenuItem>
                            )
                        }
                    </MenuList>
                </Menu>
            </Box>
        </VStack>
    )
}