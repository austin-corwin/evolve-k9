'use client'
import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import About from '@/app/_features/about/About'
import Contact from '@/app/_features/contact/Contact'
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

const PrivacyPage: NextPage = () => {
    return (
        <Box bg='white'>
            <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                bg='white'
                mt={{ base: 16, lg: 24 }}
                flexDirection='column'
                gap={24}
            >
                Privacy policy info here
            </Container>
        </Box>
    )
}
export default PrivacyPage
