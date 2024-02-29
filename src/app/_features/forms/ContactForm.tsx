import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import { Box, Button, FormControl, FormLabel, HStack, Input, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

interface IContactForm {}

const ContactForm: React.FC<IContactForm> = () => {
    const { formFields } = homepageConfig.contact
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                console.log('form was submitted')
                alert('Form successfully submitted, someone will be in touch with you soon!')
            }}
            data-netlify='true'
        >
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
