import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

interface IAbout {}

const About: React.FC<IAbout> = () => {
    return (
        <Stack gap={16} w='full' flexDirection={{ base: 'column', lg: 'row' }}>
            <VStack gap={4} justifyContent='start' alignItems='start'>
                <Heading
                    id='about'
                    // fontSize={{ base: 'md', lg: '3xl', xl: '4xl' }}
                    fontSize={{ base: 'md', lg: '6xl', xl: '7xl' }}
                    fontFamily='mont'
                    color='brandBlack.100'
                >
                    <Box display='inline-block'>
                        Meet{' '}
                        <Text display='inline-block' color='brandGreen.300'>
                            Marcus
                        </Text>{' '}
                    </Box>
                </Heading>
                <Text fontWeight={'medium'}>
                    Pupper porgo such treat the neighborhood pupper, boof mlem. Pupperino very
                    jealous pupper vvv shibe heckin good boys smol borking doggo with a long snoot
                    for pats, puggo you are doing me a frighten very jealous pupper. Smol borking
                    doggo with a long snoot for pats fluffer heckin good boys and girls shooberino
                    most angery pupper I have ever seen puggo doggo, pats doggorino puggorino super
                    chub.
                </Text>
                <Button
                    display='flex'
                    alignItems={'center'}
                    w='fit'
                    fontSize='2xl'
                    bg='brandGreen.300'
                    color='brandTan.300'
                    fontFamily='mont'
                    borderWidth='2px'
                    borderColor='brandTan.100'
                    _hover={{
                        bg: 'brandTan.100',
                        color: 'brandGreen.300',
                        borderColor: 'brandGreen.300',
                    }}
                >
                    READ MORE
                </Button>
            </VStack>
            <VStack w='full'>
                <Box
                    pos={'relative'}
                    w='full'
                    h='full'
                    minW={{ base: 100, lg: 500 }}
                    minH={{ base: 300, lg: 500 }}
                >
                    <Image
                        src='/assets/marcusdogs.jpeg'
                        fill
                        style={{ objectFit: 'cover' }}
                        alt='Picture of marcus'
                    />
                </Box>
            </VStack>
        </Stack>
    )
}
export default About
