import React from 'react'
import { Logo, MenuItem, MenuToggle, NavbarContainer } from '.'
import MenuLinks from './MenuLinks'
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react'
import PhoneNumber from './PhoneNumber'
import useDrawer from '@/app/_state/stores/useDrawer'

const Navbar: React.FC = () => {
    // const [isOpen, setIsOpen] = React.useState(false)
    const isOpen = useDrawer((state) => state.isOpen)
    const setIsOpen = useDrawer((state) => state.setIsOpen)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <NavbarContainer>
            <Logo color={'white'} />
            <Flex gap={8}>
                <PhoneNumber />
                <Box display={{ base: 'hidden', md: 'flex' }}>
                    <MenuLinks isOpen={isOpen} />
                </Box>
            </Flex>
            <MenuToggle toggle={toggle} isOpen={isOpen} />
        </NavbarContainer>
    )
}

export default Navbar
