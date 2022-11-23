import React from 'react'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, VStack } from '@chakra-ui/react'
import { AxieFormData } from '../AxieFeed'

interface MenuProps {
    menuList: string[]
    menuName: string
    setFormData: React.Dispatch<React.SetStateAction<AxieFormData>>
    formData: { class: string, body: string }
}

export default function AxieMenuSelection({ menuList, menuName, formData, setFormData }: MenuProps) {

    interface FormData {
        class: string
        body: string
    }

    function changeFormData(target: HTMLButtonElement) {
        if (target.innerText === "None") {
            setFormData((prev: any) => ({ ...prev, [target.value]: '' }))
        } else {
            setFormData((prev: any) => ({ ...prev, [target.value]: target.innerText }))
        }
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