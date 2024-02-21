import React from 'react'
import { Logo, MenuToggle, NavbarContainer } from '.'
import MenuLinks from './MenuLinks'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <NavbarContainer>
            <Logo color={'white'} />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavbarContainer>
    )
}

export default Navbar
