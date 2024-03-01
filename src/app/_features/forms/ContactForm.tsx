import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import { Box, Button, FormControl, FormLabel, HStack, Input, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useFormStatus } from 'react-dom'

interface IContactForm {}

const ContactForm: React.FC<IContactForm> = () => {
    const { formFields } = homepageConfig.contact
    const { pending } = useFormStatus()

    // function submitForm(data: any) {
    //     console.log('pending is', pending)
    //     console.log('data is', data)
    // }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        const postData = new FormData()
        // postData.append('name', event.target.value)
        // postData.append('email', formData.email)
        console.log('the form data is', event)
        // postData.append('message', formData.message);

        // fetch('/', {
        //     method: 'POST',
        //     body: postData,
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('the form was successful and data is', data)
        //         // Handle the response data
        //     })
        //     .catch((error) => {
        //         // Handle any errors
        //         console.error('the form was not successful and error is', error)
        //     })
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: new URLSearchParams(postData.toString()),
        })
            .then(() => console.log('i think a success'))
            .catch((error) => alert(error))
    }

    return (
        <form
            onSubmit={handleSubmit}
            // onSubmit='submit'
            // onSubmit={handleSubmit}
            // data-netlify='true'
            name='contact'
            method='POST'
            // action={(e) => submitForm(e)}
        >
            <input type='hidden' name='form-name' value='contact' />
            <VStack
                shadow='xl'
                gap={{ base: 2, lg: 6 }}
                rounded='xl'
                w='full'
                bg='brandTan.200'
                p={6}
            >
                <Box w={200} h={100} pos='relative' color='white'>
                    <Image src='/assets/logo-black.svg' alt='Brand logo' fill={true} />
                </Box>
                {formFields.map((section) => {
                    return (
                        <HStack gap={{ base: 2, lg: 6 }} key={Math.random()} w='full'>
                            {section.map((field) => {
                                const { label, ...fieldProps } = field
                                return (
                                    <FormControl key={label} isRequired={fieldProps.required}>
                                        <FormLabel>{label}</FormLabel>
                                        <Input {...fieldProps} />
                                    </FormControl>
                                )
                            })}
                        </HStack>
                    )
                })}
                <Button
                    mt={2}
                    type='submit'
                    w='full'
                    bg='brandBlack.300'
                    _hover={{
                        bg: 'brandTan.200',
                        borderColor: 'brandTan.200',
                        color: 'brandBlack.300',
                    }}
                    color='brandTan.300'
                >
                    Submit
                </Button>
                <Text fontSize='xs' color='brandBlack.300'>
                    By submitting this form, you opt-in to receive SMS communications from Evolve K9
                    LLC
                </Text>
            </VStack>
        </form>
    )
}
export default ContactForm
