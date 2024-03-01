'use client'
import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import ContactForm from '@/app/_features/forms/ContactForm'
import { Box, Container, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'

const ContactPage: NextPage = () => {
    return (
        <Box bg='brandBlack.300'>
            <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                bg='brandBlack.300'
                pt={{ base: 16, lg: 24 }}
                flexDirection='column'
                gap={{ base: 12, lg: 24 }}
                alignItems='center'
            >
                <Heading
                    as='h2'
                    fontSize={{ base: '2xl', lg: '3xl', xl: '4xl' }}
                    fontFamily='mont'
                    color='brandTan.300'
                >
                    {homepageConfig.contact.title}
                </Heading>
                <Box w='full' maxW={700}>
                    <ContactForm />
                </Box>
            </Container>
        </Box>
    )
}
export default ContactPage
