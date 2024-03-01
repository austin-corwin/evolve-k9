import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

interface IAbout {
    body: string
}

const Community: React.FC<IAbout> = ({ body }) => {
    return (
        <>
            <Box>
                <Heading
                    // id='about'
                    // fontSize={{ base: 'md', lg: '3xl', xl: '4xl' }}
                    // fontSize={{ base: 'md', lg: '6xl', xl: '7xl' }}
                    fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }}
                    fontFamily='mont'
                    color='brandBlack.100'
                >
                    <Box display='inline-block'>
                        <Text display='inline' color='brandGreen.300'>
                            Stay Engaged and Informed with the Evolve K9 Community!
                        </Text>{' '}
                    </Box>
                </Heading>
            </Box>
            <Stack gap={16} w='full' flexDirection={{ base: 'column-reverse', lg: 'row-reverse' }}>
                <VStack gap={4} justifyContent='center' alignItems='start'>
                    <Text fontWeight={'medium'}>{body}</Text>
                    {/* <Button
                        display='flex'
                        alignItems={'center'}
                        w='fit'
                        // fontSize='2xl'
                        // bg='brandGreen.300'
                        // color='brandTan.300'
                        // fontFamily='mont'
                        // borderWidth='2px'
                        // borderColor='brandTan.100'
                        // _hover={{
                        //     bg: 'brandTan.100',
                        //     color: 'brandGreen.300',
                        //     borderColor: 'brandGreen.300',
                        // }}
                        variant='primary'
                    >
                        READ MORE
                    </Button> */}
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
export default Community
