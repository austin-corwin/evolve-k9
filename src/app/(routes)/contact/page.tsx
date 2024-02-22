'use client'
import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import About from '@/app/_features/about/About'
import Contact from '@/app/_features/contact/Contact'
import Hero from '@/app/_features/hero/Hero'
import Services from '@/app/_features/services/Services'
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
        <Box bg='white'>
            <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                bg='white'
                mt={{ base: 16, lg: 24 }}
                flexDirection='column'
                gap={24}
            >
                <VStack gap={12}>
                    {/* <Contact /> */}
                    <VStack
                        shadow='xl'
                        gap={4}
                        rounded='xl'
                        w='fit-content'
                        as='form'
                        bg='brandTan.200'
                        p={6}
                    >
                        <Box w={200} h={100} pos='relative' color='white'>
                            <Image src='/assets/logo-black.svg' alt='Brand logo' fill={true} />
                        </Box>
                        <HStack>
                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <Input type='text' placeholder='Enter your first name' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input type='text' placeholder='Enter your last name' />
                            </FormControl>
                        </HStack>
                        <FormControl>
                            <FormLabel>Area of interest</FormLabel>
                            <Input type='text' placeholder='Boarding, classes, etc.' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' placeholder='Enter your email' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Phone Number</FormLabel>
                            <Input type='tel' placeholder='Enter your phone number' />
                        </FormControl>
                        <Button mt={2} type='submit' variant='primary' w='full'>
                            Submit
                        </Button>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}
export default ContactPage
