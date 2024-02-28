import React from 'react'
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'

interface IHero {
    title: string
    subtitle?: string
    action?: {
        label: string
        href: string
    }
}

const Hero: React.FC<IHero> = ({ title, subtitle, action = null }) => {
    return (
        <Box h='full'>
            <Flex
                bgImg='/assets/echo-summit-hero.jpg'
                bgColor='rgb(51, 51, 51, 0.5)'
                bgPosition='center'
                bgSize='cover'
                position='relative'
                w='full'
                h={{ base: '50vh', xl: '80vh' }}
                alignItems={{ base: 'center', md: 'start' }}
                justifyContent={{ base: 'center', md: 'start' }}
                flexDirection='column'
                px={{ base: 4, md: 16 }}
                py={{ base: 8, md: 16 }}
                bgBlendMode={'multiply'}
            >
                <Container
                    display='flex'
                    maxW={{ base: 500, md: 800, lg: 1000, xl: 1680 }}
                    mt={{ base: 0, lg: 24 }}
                    flexDirection='column'
                    gap={24}
                >
                    <Flex flexDir='column' gap={{ base: 1, lg: 4 }} w='full'>
                        {subtitle && (
                            <Heading
                                as='h1'
                                fontSize={{ base: 'xl', lg: '3xl', xl: '4xl' }}
                                fontFamily='mont'
                                color='brandTan.300'
                                maxW={1000}
                            >
                                {subtitle}
                            </Heading>
                        )}
                        {title && (
                            <Heading
                                as='h2'
                                fontSize={{ base: '5xl', lg: '6xl', xl: '8xl', '2xl': '7rem' }}
                                fontFamily='hind'
                                color='brandTan.300'
                                maxW={1000}
                                w='full'
                                lineHeight={{ base: '1', lg: 'auto' }}
                            >
                                {title}
                            </Heading>
                        )}
                        {action && (
                            <Button
                                alignSelf={'flex-start'}
                                display='flex'
                                w={{ base: 'full', lg: 'fit-content' }}
                                variant='primary'
                                as='a'
                                href={action.href}
                            >
                                <Text ml={2}>{action.label}</Text>
                            </Button>
                        )}
                    </Flex>
                </Container>
            </Flex>
        </Box>
    )
}
export default Hero
