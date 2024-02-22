import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

interface ILogoProps {
    color: string
}

const Logo: React.FC<ILogoProps> = ({ color }) => {
    return (
        <Link href='/'>
            <Box color={color}>
                <Box pos='relative' w='170px' minH='50px'>
                    <Image src='/assets/logo-black.svg' alt='Brand logo' fill={true} />
                </Box>
            </Box>
        </Link>
    )
}
export default Logo
