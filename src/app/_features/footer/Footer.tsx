import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Footer: React.FC = () => {
    return (
        <Flex
            width='100%'
            justifyContent='center'
            alignItems='center'
            direction='column'
            padding={4}
            bg='brandBlack.300'
            as='footer'
            mt={24}
        >
            <VStack w='full'>
                <HStack w='full'>
                    <Box display='flex' justifyContent='center' w='full'>
                        <Box w={300} h={300} pos='relative' color='white'>
                            <Image src='/assets/logo-black.svg' alt='Brand logo' fill={true} />
                        </Box>
                    </Box>
                    <VStack display='flex' justifyContent='center' w='full'>
                        <Text color='brandTan.300'>About</Text>
                        <Text color='brandTan.300'>Community</Text>
                        <Text color='brandTan.300'>Training</Text>
                    </VStack>
                    <Box display='flex' justifyContent='center' w='full'>
                        <Button>
                            <Text color='brandTan.300'>Inquire Now</Text>
                        </Button>
                    </Box>
                </HStack>
                <HStack spacing={8} mb={8}>
                    <Text color='brandTan.300'>Privacy</Text>
                    <Text color='brandTan.300'>Terms of Use</Text>
                </HStack>
                <Flex width='100%' justifyContent='center' wrap='wrap'>
                    <Text width='50%' textAlign='center' color='gray.600' fontSize='sm'>
                        Last Login 15.12.2020 - 14:00 | Data last updated on 16.12.20202 - 22:00
                    </Text>
                </Flex>
            </VStack>
        </Flex>
    )
}

export default Footer
