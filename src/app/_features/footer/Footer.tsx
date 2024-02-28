import { Link } from '@chakra-ui/next-js'
import { Box, Button, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react'
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
            pt={24}
        >
            <VStack w='full'>
                <Stack direction={{ base: 'column', lg: 'row' }} w='full'>
                    <Box display='flex' justifyContent='center' w='full'>
                        <Box
                            w={270}
                            h={270}
                            pos='relative'
                            color='white'
                            overflow='hidden'
                            rounded='xl'
                            as='a'
                            href='/'
                        >
                            <Image
                                src='/assets/forest-stacked-logo.svg'
                                alt='Brand logo'
                                fill={true}
                            />
                        </Box>
                    </Box>
                    <Stack
                        direction={{ base: 'row' }}
                        justifyContent='center'
                        alignItems='center'
                        w='full'
                        mb={{ base: 8, md: 0 }}
                        gap={{ base: 2, md: 8 }}
                    >
                        <Link href='/#about' color='brandTan.300'>
                            About
                        </Link>
                        <Link href='#training' color='brandTan.300'>
                            Training
                        </Link>
                    </Stack>
                    <Box
                        alignItems='center'
                        display='flex'
                        justifyContent='center'
                        w='full'
                        mb={{ base: 8, md: 0 }}
                    >
                        <Button h='auto' variant='primary'>
                            Schedule Now
                        </Button>
                    </Box>
                </Stack>
                <HStack spacing={8} mb={{ base: 8, md: 0 }}>
                    <Link href='/privacy' color='brandTan.300'>
                        Privacy
                    </Link>
                    <Link href='#terms' color='brandTan.300'>
                        Terms of Use
                    </Link>
                </HStack>
            </VStack>
        </Flex>
    )
}

export default Footer
