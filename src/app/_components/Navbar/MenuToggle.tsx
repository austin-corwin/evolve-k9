import React from 'react'
import { Box, Icon } from '@chakra-ui/react'
import * as HeroIcons from '@heroicons/react/24/outline'

interface IMenuToggleProps {
    toggle: () => void
    isOpen: boolean
}
const MenuToggle: React.FC<IMenuToggleProps> = ({ toggle, isOpen }) => {
    return (
        <Box alignItems='center' display={{ base: 'flex', md: 'none' }} onClick={toggle}>
            {/* {isOpen ? <CloseIcon /> : <MenuIcon />} */}
            {isOpen ? (
                <Icon boxSize={8} color='black' as={HeroIcons.XMarkIcon} />
            ) : (
                <Icon boxSize={8} color='black' as={HeroIcons.Bars3Icon} />
            )}
        </Box>
    )
}
export default MenuToggle
