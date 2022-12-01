import React from 'react'
import { Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, VStack } from '@chakra-ui/react'
import { AxieFormData } from '../Market'

interface MenuProps {
    menuList: string[]
    menuName: string
    setFormData: React.Dispatch<React.SetStateAction<AxieFormData>>
    formData: { class: string, body: string }
}

export default function MarketFilters({ menuList, menuName, formData, setFormData }: MenuProps) {

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
        <Flex>
            <Menu>
                <MenuButton
                    as={Button}
                    variant="registration"
                    fontSize="14px"
                    bg="gray.900"
                    border="1px solid rgba(255,255,255,0.2)"
                    rightIcon={<Image src="images/open-menu-grey.png" w="20px" h="20px"/>}
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
                <MenuList bg="gray.900" borderRadius="2px" mt="-5px">
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
        </Flex>
    )
}