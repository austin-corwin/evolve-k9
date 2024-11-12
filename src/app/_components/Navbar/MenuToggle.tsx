import React from 'react'
import { Box, Button, Icon } from '@chakra-ui/react'
import * as HeroIcons from '@heroicons/react/24/outline'

interface IMenuToggleProps {
    toggle: () => void
    isOpen: boolean
}
const MenuToggle: React.FC<IMenuToggleProps> = ({ toggle, isOpen }) => {
    return (
        <Button
            border='none'
            bg='none'
            p={0}
            _hover={{ bg: 'none' }}
            alignItems='center'
            display={{ base: 'flex', md: 'none' }}
            onClick={toggle}
            name='Mobile drawer menu toggle'
            data-testid='menu-toggle-button'
            aria-label='Toggle menu-drawer'
        >
            <Icon
                boxSize={8}
                color='black'
                as={isOpen ? HeroIcons.XMarkIcon : HeroIcons.Bars3Icon}
            />
        </Button>
    )
}
export default MenuToggle
