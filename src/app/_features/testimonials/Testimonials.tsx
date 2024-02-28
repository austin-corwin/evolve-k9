import { Box, Button, Flex, HStack, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/16/solid'
import { homepageConfig } from '@/app/_config/pages/homepageConfig'

interface ITestimonials {
    body: string
}

const Testimonials: React.FC<ITestimonials> = () => {
    const { title, items } = homepageConfig.testimonials
    return (
        <VStack alignItems='start' display='flex' gap={{ base: 8 }} px={{ base: 2, lg: 0 }}>
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
                <VStack gap={{ base: 4, lg: 8 }} w='full'>
                    {items.map(({ rating, body, author }) => (
                        <React.Fragment key={body}>
                            <HStack>
                                {Array.from({ length: rating }).map((_) => (
                                    <Icon key={Math.random()} as={StarIcon} boxSize={8} />
                                ))}
                            </HStack>
                            <Text
                                color='brandBlack.300'
                                align='center'
                                fontWeight='medium'
                                fontFamily='mont'
                                fontSize={{ base: 'xl', lg: '3xl' }}
                            >
                                {body}
                            </Text>
                            <Text> - {author}</Text>
                        </React.Fragment>
                    ))}
                </VStack>
            </Stack>
        </VStack>
    )
}
export default Testimonials
