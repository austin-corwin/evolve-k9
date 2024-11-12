import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    VStack,
} from '@chakra-ui/react'
import React from 'react'
import { MenuItem } from '../Navbar'
import useDrawer from '@/app/_state/stores/useDrawer'

interface IMainNavDrawer {}

const MainNavDrawer: React.FC<IMainNavDrawer> = () => {
    const isOpen = useDrawer((state) => state.isOpen)
    const setIsOpen = useDrawer((state) => state.setIsOpen)
    return (
        <Drawer isOpen={isOpen} placement='right' onClose={() => setIsOpen(false)}>
            <DrawerOverlay />
            <DrawerContent>
                <Box data-testid='mobile-menu-drawer' h='full' bg='#FFF5D2'>
                    <DrawerCloseButton />
                    <DrawerBody pt={8}>
                        <VStack
                            spacing={8}
                            align='center'
                            justify={['center', 'space-between', 'flex-end', 'flex-end']}
                            pt={[4, 4, 0, 0]}
                        >
                            <Box onClick={() => setIsOpen(false)}>
                                <MenuItem to='/#about'>About</MenuItem>
                            </Box>
                            <Box onClick={() => setIsOpen(false)}>
                                <MenuItem to='/#programs'>Programs</MenuItem>
                            </Box>
                            <Box onClick={() => setIsOpen(false)}>
                                <MenuItem to='/contact'>Contact</MenuItem>
                            </Box>
                        </VStack>
                    </DrawerBody>
                </Box>
            </DrawerContent>
        </Drawer>
    )
}
export default MainNavDrawer
