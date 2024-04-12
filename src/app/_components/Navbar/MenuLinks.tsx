import { Box, Stack } from '@chakra-ui/react'
import { MenuItem } from '.'
import useDrawer from '@/app/_state/stores/useDrawer'

interface IMenuLinksProps {
    isOpen: boolean
}
const MenuLinks: React.FC<IMenuLinksProps> = () => {
    const isOpen = useDrawer((state) => state.isOpen)
    const setIsOpen = useDrawer((state) => state.setIsOpen)
    return (
        <Box display={{ base: 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
            <Stack
                spacing={8}
                align='center'
                justify={['center', 'space-between', 'flex-end', 'flex-end']}
                direction={['column', 'row', 'row', 'row']}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to='/#about'>About</MenuItem>
                <MenuItem to='/#programs'>Programs</MenuItem>
                {/* <MenuItem to='/contact'>Contact</MenuItem> */}
            </Stack>
        </Box>
    )
}
export default MenuLinks
