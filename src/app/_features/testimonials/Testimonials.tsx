import { Box, Button, Flex, HStack, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/16/solid'
import { homepageConfig } from '@/app/_config/pages/homepageConfig'

interface ITestimonials {
    body: string
}

const Testimonials: React.FC<ITestimonials> = () => {
    const { title, items, link } = homepageConfig.testimonials
    return (
        <VStack alignItems='start' display='flex' gap={{ base: 8 }} px={{ base: 2, lg: 0 }}>
            <Box>
                <Heading
                    id='testimonials'
                    fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }}
                    fontFamily='mont'
                    color='brandGreen.300'
                >
                    <Box display='inline-block'>{title}</Box>
                </Heading>
            </Box>
            <Stack gap={{ base: 16, lg: 20 }} w='full' flexDirection={{ base: 'column' }}>
                {items.map(({ rating, body, author }) => (
                    <VStack key={body} gap={{ base: 4, lg: 8 }} w='full'>
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
                                fontSize={{ base: 'md', lg: 'lg' }}
                            >
                                {body}
                            </Text>
                            <Text> - {author}</Text>
                        </React.Fragment>
                    </VStack>
                ))}
            </Stack>
            {link && (
                <VStack w='full'>
                    <Button as='a' target='_blank' href={link} variant='primary'>
                        See More
                    </Button>
                </VStack>
            )}
        </VStack>
    )
}
export default Testimonials
