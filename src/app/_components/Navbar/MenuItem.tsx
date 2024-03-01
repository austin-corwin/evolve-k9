import useDrawer from '@/app/_state/stores/useDrawer'
import { Link } from '@chakra-ui/next-js'

interface IMenuItemProps {
    children: React.ReactNode
    to?: string
}

const MenuItem: React.FC<IMenuItemProps> = ({ children, to = '/' }) => {
    return (
        <Link fontWeight='bold' _hover={{ color: 'brandGreen.300' }} color='dark' href={to}>
            {children}
        </Link>
    )
}
export default MenuItem
