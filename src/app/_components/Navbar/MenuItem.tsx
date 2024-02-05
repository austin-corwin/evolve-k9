import { Link } from '@chakra-ui/next-js'
import { Text } from '@chakra-ui/react'

interface IMenuItemProps {
    children: React.ReactNode
    to?: string
}

const MenuItem: React.FC<IMenuItemProps> = ({ children, to = '/' }) => {
    return (
        <Link fontWeight='bold' _hover={{ color: 'brandGreen.300' }} color='dark' href={to}>
            <Text>{children}</Text>
        </Link>
    )
}
export default MenuItem
