import { Box, Stack } from '@chakra-ui/react'
import { MenuItem } from '.'

interface IMenuLinksProps {
    isOpen: boolean
}
const MenuLinks: React.FC<IMenuLinksProps> = ({ isOpen = false }) => (
    <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
    >
        <Stack
            spacing={8}
            align='center'
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            pt={[4, 4, 0, 0]}
        >
            <MenuItem to='#about'>About</MenuItem>
            <MenuItem to='#community'>Community</MenuItem>
            <MenuItem to='#training'>Training</MenuItem>
            ...
        </Stack>
    </Box>
)
export default MenuLinks
