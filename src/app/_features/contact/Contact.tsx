import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Input,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

interface IContact {}

const Contact: React.FC<IContact> = () => {
    return (
        <Box py={16} px={{ md: 8 }} bg='brandBlack.300' w='full' mt={24}>
            <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                // bg='brandTan.100'
                my={{ base: 16, lg: 24 }}
                flexDirection='column'
                gap={24}
            >
                <Stack
                    justifyContent={{ md: 'space-between' }}
                    direction={{ base: 'column', md: 'row' }}
                    gap={8}
                    alignItems='center'
                >
                    <VStack h='full' alignItems='start' justifyContent='start'>
                        {/* <Text fontFamily='font-mont' fontSize='8rem' color='brandTan.300'>
                            Reach out today
                        </Text> */}
                        <Heading
                            as='h2'
                            fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }}
                            fontFamily='mont'
                            color='brandTan.300'
                            // maxW={00}
                        >
                            Reach out today
                        </Heading>
                        <Text color='brandTan.300'>
                            Leave us your information and we'll reach out to schedule a phone call
                            consultation within 48 hours.
                        </Text>
                        <Text mt={8} fontSize='2xl' fontWeight='bold' color='brandTan.300'>
                            Reason you should reach out
                        </Text>
                        <Text color='brandTan.300'>
                            Leave us your information and we'll reach out to schedule a phone call
                            consultation within 48 hours.
                        </Text>
                        <Text fontSize='2xl' fontWeight='bold' color='brandTan.300'>
                            Reason you should reach out
                        </Text>
                        <Text color='brandTan.300'>
                            Leave us your information and we'll reach out to schedule a phone call
                            consultation within 48 hours.
                        </Text>
                    </VStack>
                    <VStack
                        shadow='xl'
                        gap={4}
                        rounded='xl'
                        w='fit-content'
                        as='form'
                        bg='white'
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
                </Stack>
            </Container>
        </Box>
    )
}
export default Contact
