'use client'
import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import About from '@/app/_features/about/About'
import Contact from '@/app/_features/contact/Contact'
import ContactForm from '@/app/_features/forms/ContactForm'
import Hero from '@/app/_features/hero/Hero'
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    HStack,
    Input,
    VStack,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'

const ContactPage: NextPage = () => {
    return (
        <Box bg='brandBlack.300'>
            <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                bg='brandBlack.300'
                pt={{ base: 16, lg: 24 }}
                flexDirection='column'
                gap={24}
                alignItems='center'
            >
                <Box w='full' maxW={700}>
                    <ContactForm />
                </Box>
            </Container>
        </Box>
    )
}
export default ContactPage
