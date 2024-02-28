import useDrawer from '@/app/_state/stores/useDrawer'
import { Link } from '@chakra-ui/next-js'
import { Text } from '@chakra-ui/react'

interface IMenuItemProps {
    children: React.ReactNode
    to?: string
}

const MenuItem: React.FC<IMenuItemProps> = ({ children, to = '/' }) => {
    const setIsOpen = useDrawer((state) => state.setIsOpen)
    return (
        <Link
            onClick={() => setIsOpen(false)}
            fontWeight='bold'
            _hover={{ color: 'brandGreen.300' }}
            color='dark'
            href={to}
        >
            <Text>{children}</Text>
        </Link>
    )
}
export default MenuItem
