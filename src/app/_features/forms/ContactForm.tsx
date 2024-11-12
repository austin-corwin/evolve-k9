import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import { submitContactForm } from '@/app/_utils/forms'
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Text,
    Textarea,
    VStack,
    useToast,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const ContactForm: React.FC = () => {
    const { formFields } = homepageConfig.contact
    const [loading, setLoading] = React.useState(false)
    const addToast = useToast({
        position: 'bottom',
    })
    const handleSubmitContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        const content = await submitContactForm(e)
        const { success } = content
        if (success)
            addToast({
                status: success ? 'success' : 'error',
                description: success
                    ? `One of our professionals will be in touch with you soon!`
                    : 'Oops, something went wrong. Please try again later or call us on the phone.',
                title: success ? 'Form Submitted Successfully' : 'Form Submission Failed',
            })
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmitContactForm} name='contact' method='POST'>
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
                                        {fieldProps.type === 'textarea' ? (
                                            <Textarea {...fieldProps} />
                                        ) : (
                                            <Input {...fieldProps} />
                                        )}
                                    </FormControl>
                                )
                            })}
                        </HStack>
                    )
                })}
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
                    isLoading={loading}
                >
                    Submit
                </Button>
                {homepageConfig?.contact?.disclaimer && (
                    <Text fontSize='xs' color='brandBlack.300'>
                        {homepageConfig.contact.disclaimer}
                    </Text>
                )}
            </VStack>
        </form>
    )
}
export default ContactForm
