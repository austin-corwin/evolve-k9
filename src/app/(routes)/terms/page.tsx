'use client'
import { VStack, Container, Heading, Link, Text } from '@chakra-ui/react'
import { NextPage } from 'next'

const TermsPage: NextPage = () => {
    return (
        <Container
            display='flex'
            maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
            bg='brandTan.300'
            mt={{ base: 16, lg: 24 }}
            pb={{ base: 16, lg: 24 }}
            flexDirection='column'
            gap={{ base: 6, lg: 24 }}
        >
            <Heading
                fontSize={{ base: '4xl', lg: '6xl', xl: '7xl' }}
                fontFamily='mont'
                color='brandBlack.100'
            >
                Terms of Use for Evolve K9 LLC
            </Heading>
            <Text>
                By accessing and using the services provided by Evolve K9 LLC, you agree to comply
                with and be bound by these Terms of Use. If you do not agree to these terms, please
                refrain from using our services.
            </Text>
            <VStack color='brandBlack.300' alignItems='start' gap={8}>
                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>1. Use of Services:</Heading>
                    <VStack spacing={2} align='start'>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                Eligibility:
                            </Heading>
                            <Text>
                                You must be at least 18 years old to use our services. By using our
                                services, you represent and warrant that you meet this requirement.
                            </Text>
                        </VStack>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                Acceptable Use:
                            </Heading>
                            <Text>
                                You agree to use our services for lawful purposes only and in
                                accordance with these Terms of Use.
                            </Text>
                        </VStack>
                    </VStack>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>2. Account Registration:</Heading>
                    <VStack spacing={2} align='start'>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                Account Information:
                            </Heading>
                            <Text>
                                When registering for our services, you agree to provide accurate and
                                complete information. You are responsible for maintaining the
                                confidentiality of your account information.
                            </Text>
                        </VStack>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                Security:
                            </Heading>
                            <Text>
                                You are responsible for all activities that occur under your
                                account. Notify us immediately of any unauthorized use or security
                                breaches.
                            </Text>
                        </VStack>
                    </VStack>
                </VStack>
                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>3. Payment</Heading>
                    <VStack spacing={2} align='start'>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                Payment:
                            </Heading>
                            <Text>
                                Payment for services is due as per the terms agreed upon during
                                registration.
                            </Text>
                        </VStack>
                    </VStack>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>4. Intellectual Property:</Heading>
                    <VStack spacing={2} align='start'>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                Ownership:
                            </Heading>
                            <Text>
                                All content and materials provided through our services are the
                                property of [Your Dog Training Business Name] and are protected by
                                intellectual property laws.
                            </Text>
                        </VStack>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                Use Restrictions:
                            </Heading>
                            <Text>
                                You may not reproduce, distribute, modify, or create derivative
                                works from our content without our express written consent.
                            </Text>
                        </VStack>
                    </VStack>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>5. Termination:</Heading>
                    <VStack spacing={2} align='start'>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                Termination by You:
                            </Heading>
                            <Text>
                                You may terminate your account at any time by contacting us.
                            </Text>
                        </VStack>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                Termination by Us:
                            </Heading>
                            <Text>
                                We reserve the right to terminate or suspend your account and access
                                to our services for violations of these Terms of Use.
                            </Text>
                        </VStack>
                    </VStack>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>6. Disclaimer of Warranties:</Heading>
                    <VStack spacing={2} align='start'>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                No Guarantees:
                            </Heading>
                            <Text>
                                We do not guarantee specific outcomes or results from using our
                                services. Results may vary based on individual circumstances.
                            </Text>
                        </VStack>
                    </VStack>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>7. Limitation of Liability:</Heading>
                    <VStack spacing={2} align='start'>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                Exclusion of Damages:
                            </Heading>
                            <Text>
                                In no event shall Evolve K9 LLC be liable for any direct, indirect,
                                incidental, special, or consequential damages.
                            </Text>
                        </VStack>
                    </VStack>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>8. Changes to Terms:</Heading>
                    <VStack spacing={2} align='start'>
                        <VStack alignItems='start'>
                            <Heading fontSize='xl' as='h3'>
                                Amendments:
                            </Heading>
                            <Text>
                                We reserve the right to amend these Terms of Use at any time.
                                Updates will be posted on our website.
                            </Text>
                        </VStack>
                    </VStack>
                </VStack>
            </VStack>
        </Container>
    )
}
export default TermsPage
