import useDrawer from '@/app/_state/stores/useDrawer'
import { Link } from '@chakra-ui/next-js'
import { Text } from '@chakra-ui/react'

interface IMenuItemProps {
    children: React.ReactNode
    to?: string
}

const MenuItem: React.FC<IMenuItemProps> = ({ children, to = '/' }) => {
    return (
        <a href={to}>
            <Text fontWeight='bold' _hover={{ color: 'brandGreen.300' }} color='dark'>
                {children}
            </Text>
        </a>
    )
}
export default MenuItem
