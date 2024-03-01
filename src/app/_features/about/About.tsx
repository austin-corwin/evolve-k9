import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

interface IAbout {
    body: string[]
}

const About: React.FC<IAbout> = ({ body }) => {
    return (
        <>
            <Box id='about'>
                <Heading
                    // fontSize={{ base: 'md', lg: '3xl', xl: '4xl' }}
                    // fontSize={{ base: 'md', lg: '6xl', xl: '7xl' }}
                    fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }}
                    fontFamily='mont'
                    color='brandBlack.100'
                >
                    <Box display='inline-block'>
                        Evolve K9:{' '}
                        <Text display='inline' color='brandGreen.300'>
                            Embrace Choice & Control
                        </Text>{' '}
                    </Box>
                </Heading>
            </Box>
            <Stack gap={16} w='full' flexDirection={{ base: 'column', lg: 'row' }}>
                <VStack gap={4} justifyContent='start' alignItems='start'>
                    {body.map((paragraph, index) => (
                        <Text
                            key={index}
                            color='brandBlack.300'
                            fontWeight='medium'
                            fontSize={{ xl: '2xl' }}
                        >
                            {paragraph}
                        </Text>
                    ))}
                </VStack>
                <VStack w='full'>
                    <Box
                        pos={'relative'}
                        w='full'
                        h='full'
                        minW={{ base: 100, lg: 500 }}
                        minH={{ base: 300, lg: 500 }}
                        overflow='hidden'
                        rounded='xl'
                    >
                        <Image
                            src='/assets/marcus-with-summit.jpg'
                            fill
                            style={{ objectFit: 'cover' }}
                            alt='Picture of marcus'
                        />
                    </Box>
                </VStack>
            </Stack>
        </>
    )
}
export default About
