import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import { Box, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ContactForm from '../forms/ContactForm'

interface IContact {}

const Contact: React.FC<IContact> = () => {
    const { title, subtitle, body } = homepageConfig.contact
    return (
        <Box py={16} px={{ md: 8 }} bg='brandBlack.300' w='full' mt={24}>
            <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                my={{ base: 8, lg: 24 }}
                flexDirection='column'
                gap={24}
                px={{ base: 6, lg: 4 }}
            >
                <Stack
                    justifyContent={{ md: 'space-between' }}
                    direction={{ base: 'column', lg: 'row' }}
                    gap={{ base: 8, lg: 16 }}
                    alignItems='center'
                >
                    <VStack h='full' alignItems='start' justifyContent='start'>
                        <Heading
                            as='h2'
                            fontSize={{ base: '2xl', lg: '3xl', xl: '4xl' }}
                            fontFamily='mont'
                            color='brandTan.300'
                        >
                            {title}
                        </Heading>
                        <Text color='brandTan.300'>{subtitle}</Text>
                        {body.map(({ text, title }) => (
                            <React.Fragment key={Math.random()}>
                                <Text mt={8} fontSize='2xl' fontWeight='bold' color='brandTan.300'>
                                    {title}
                                </Text>
                                <Text color='brandTan.300'>{text}</Text>
                            </React.Fragment>
                        ))}
                    </VStack>
                    <Box minW={{ base: 300, lg: 500 }} w='fit-content'>
                        <ContactForm />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
export default Contact
