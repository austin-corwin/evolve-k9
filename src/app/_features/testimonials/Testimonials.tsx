import { Box, Button, HStack, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/16/solid'

interface IAbout {
    body: string
}

const Testimonials: React.FC<IAbout> = ({ body }) => {
    return (
        <>
            <Box>
                <Heading
                    id='about'
                    // fontSize={{ base: 'md', lg: '3xl', xl: '4xl' }}
                    // fontSize={{ base: 'md', lg: '6xl', xl: '7xl' }}
                    fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }}
                    fontFamily='mont'
                    color='brandGreen.300'
                >
                    <Box display='inline-block'>
                        Testimonials
                        {/* <Text display='inline' color='brandGreen.300'>
                            Stay Engaged and Informed with the Evolve K9 Community!
                        </Text>{' '} */}
                    </Box>
                </Heading>
            </Box>
            <Stack gap={16} w='full' flexDirection={{ base: 'column-reverse', lg: 'row-reverse' }}>
                <VStack gap={8} w='full'>
                    <HStack>
                        <Icon as={StarIcon} boxSize={8} />
                        <Icon as={StarIcon} boxSize={8} />
                        <Icon as={StarIcon} boxSize={8} />
                        <Icon as={StarIcon} boxSize={8} />
                        <Icon as={StarIcon} boxSize={8} />
                    </HStack>
                    <Text
                        color='brandBlack.300'
                        align='center'
                        fontWeight='medium'
                        fontFamily='mont'
                        fontSize='3xl'
                    >
                        Vvv puggo smol borking doggo with a long snoot for pats much ruin diet,
                        shoober long water shoob length boy very hand that feed shibe, you are doing
                        me the shock floofs.
                    </Text>
                    <Text> - Sarah Fielders</Text>
                </VStack>
            </Stack>
        </>
    )
}
export default Testimonials
