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
                                // position='absolute'
                                // top='50%'
                                // left='30%'
                                // transform='translate(-50%, -50%)'
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
                                {/* <svg
                                xmlns='http://www.w3.org/2000/svg'
                                version='1.1'
                                viewBox='0 0 419.14 403.6'
                                width='18'
                                height='18'
                            >
                                <g transform='translate(-119 -256.27)'>
                                    <path
                                        fill='currentColor'
                                        d='M281.78 0c-.88.011-1.79.055-2.69.125-35.82 6.184-55.52 44.064-58.37 77.469-4.17 30.316 9.19 69.266 42.47 76.066 4.83.92 9.84.5 14.56-.78 40.08-13.44 58.01-60.908 52.22-100.22C328.28 27.264 309.14-.349 281.78 0zM129.91 1.625C107.63 2.172 90.28 24.763 86.75 46c-7.441 42.074 11.698 94.35 55.53 107.66 4.11.89 8.35.98 12.5.34 29.63-4.94 42.18-38.15 40.94-64.969-.89-35.372-19.27-76.273-56-86.218-3.36-.89-6.63-1.266-9.81-1.188zm248.93 119.5c-38.53 2.31-64.95 40.76-68.72 76.66-5.09 25.89 8.71 60.53 38.26 62.6 41.19-.51 69.3-44.53 70.46-82.41 2.61-25.05-12.15-55.46-40-56.85zm-337.28 8.54c-16.394-.14-32.517 9.68-37.874 26.34-14.293 44.58 14.408 101.04 61.624 110.41 19.706 3.37 37.018-11.76 41.908-29.97 10.35-38.95-10.915-84.17-46.908-101.85-5.863-3.29-12.334-4.88-18.75-4.93zm172.75 79.93c-32.14.07-64.78 16.38-85.59 40.66-22.48 28.3-40.892 61.23-48.095 96.94-8.751 25.7 11.083 55.29 38.565 55.47 33.06.91 61.47-21.79 94.34-23.47 27.89-4.25 52.86 10.25 77.94 19.75 21.35 9.13 50.85 5.63 61.75-17.35 8.57-23.41-4.05-48.39-14.5-69.18-21.32-33.76-44.17-69.24-79.13-90.32-14.01-8.68-29.58-12.53-45.28-12.5z'
                                        transform='translate(119 256.27)'
                                    ></path>
                                </g>
                            </svg> */}
                                <Text ml={2}>{action.label}</Text>
                            </Button>
                        )}
                    </Flex>
                </Container>
                {/* <Image
                src={'/assets/dog.jpg'}
                alt='German shepherd dog'
                fill
                style={{ objectFit: 'cover' }}
            /> */}
            </Flex>
        </Box>
    )
}
export default Hero
