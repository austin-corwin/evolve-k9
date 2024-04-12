import Socials from '@/app/_components/socials/Socials'
import { Link } from '@chakra-ui/next-js'
import { Box, Button, Flex, HStack, Icon, IconButton, Stack, Text, VStack } from '@chakra-ui/react'
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
            pt={{ base: 12, lg: 24 }}
        >
            <VStack w='full'>
                <Stack direction={{ base: 'column', lg: 'row' }} w='full'>
                    <VStack display='flex' justifyContent='center' w='full' pb={16}>
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
                                width={270}
                                height={200}
                            />
                        </Box>
                        <Socials />
                    </VStack>
                    <Stack
                        direction={{ base: 'row' }}
                        justifyContent='center'
                        alignItems='center'
                        w='full'
                        mb={{ base: 8, md: 0 }}
                        gap={{ base: 2, md: 8 }}
                    >
                        <a href='/#about' color='brandTan.300'>
                            <Text color='brandTan.300'>About</Text>
                        </a>
                        <a href='/#programs' color='brandTan.300'>
                            <Text color='brandTan.300'>Programs</Text>
                        </a>
                    </Stack>
                    <VStack
                        alignItems='center'
                        display='flex'
                        justifyContent='center'
                        w='full'
                        mb={{ base: 8, md: 0 }}
                    >
                        <Button as='a' href='tel:19702358466' h='auto' variant='primary'>
                            Schedule Now
                        </Button>
                    </VStack>
                </Stack>
                <HStack spacing={8} mb={{ base: 8, md: 0 }}>
                    <Link href='/privacy' color='brandTan.300'>
                        Privacy
                    </Link>
                    <Link href='/terms' color='brandTan.300'>
                        Terms of Use
                    </Link>
                </HStack>
            </VStack>
        </Flex>
    )
}

export default Footer
