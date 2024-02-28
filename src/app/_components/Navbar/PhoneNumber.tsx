import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'

interface IPhoneNumber {}

const PhoneNumber: React.FC<IPhoneNumber> = () => {
    return (
        <Link px={0} rounded='md' borderColor='brandBlack.300' href='tel:1970-235-8466'>
            <Text
                _hover={{ color: 'brandGreen.300' }}
                color='dark'
                fontFamily='mont'
                fontWeight='bold'
            >
                +1(970) 235 - 8466
            </Text>
        </Link>
    )
}
export default PhoneNumber
