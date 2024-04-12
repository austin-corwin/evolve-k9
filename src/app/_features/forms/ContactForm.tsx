import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Text,
    VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useFormStatus } from 'react-dom'

interface IContactForm {}

const ContactForm: React.FC<IContactForm> = () => {
    const { formFields } = homepageConfig.contact
    const { pending } = useFormStatus()
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')

    // TODO: Add this in to try and make better form submission logic
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const postData = new FormData()
        const formData = {
            first_name: firstName,
            last_name: lastName,
            // opt_in: e.target.opt_in.checked,
        }
        // postData.append('name', event.target.value)
        // postData.append('email', formData.email)
        console.log('the form data is', e.target)
        console.log('formData is', formData)
        // postData.append('message', formData.message);
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            } as any,
            body: JSON.stringify(formData),
        })

        const content = await response.json()
        console.log('conent is', content)
        alert(content.data.tableRange)
        setFirstName('')
        setLastName('')

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
        // fetch('/', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'multipart/form-data' },
        //     body: new URLSearchParams(postData.toString()),
        // })
        //     .then(() => console.log('i think a success'))
        //     .catch((error) => alert(error))
    }

    return (
        <form onSubmit={handleSubmit} name='contact' method='POST'>
            {/* <input type='hidden' name='form-name' value='contact' /> */}
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
                {/* {formFields.map((section) => {
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
                })} */}
                <FormControl isRequired={true}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                        type='text'
                        name='first_name'
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}
                    />
                </FormControl>
                <FormControl isRequired={true}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        type='text'
                        name='last_name'
                        value={lastName}
                        onChange={({ target }) => setLastName(target.value)}
                    />
                </FormControl>

                <HStack gap={{ base: 2, lg: 6 }} key={Math.random()} w='full'>
                    <FormControl
                        display='flex'
                        flexDirection='row'
                        alignItems='start'
                        key={'checkDisclaimer'}
                        isRequired={true}
                        gap={{ base: 2 }}
                    >
                        <Checkbox w='auto' variant='dark' mt={1} name='opt_in' />
                        <FormLabel mb={0}>
                            By checking this box, you opt-in to receive SMS communications from the
                            Evolve K9 team, Opt-out anytime by replying STOP
                        </FormLabel>
                    </FormControl>
                </HStack>

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
                    {homepageConfig.contact.disclaimer}
                </Text>
            </VStack>
        </form>
    )
}
export default ContactForm
