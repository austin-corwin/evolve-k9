'use client'
import { VStack, Container, Heading, Link, Text } from '@chakra-ui/react'
import { NextPage } from 'next'

const PrivacyPage: NextPage = () => {
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
                Privacy Policy for Evolve K9 LLC
            </Heading>
            <VStack color='brandBlack.300' alignItems='start' gap={8}>
                <VStack alignItems='start' gap={4} as='section'>
                    <Text>
                        At Evolve K9 LLC, we are committed to protecting the privacy and security of
                        our clients and website visitors. This Privacy Policy outlines the
                        information we collect, how we use it, and the choices you have regarding
                        your personal data.
                    </Text>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>1. Information We Collect:</Heading>
                    <Text>
                        <strong>Personal Information:</strong> When you register for our services,
                        we may collect personal information such as your name, contact details, and
                        payment information.
                    </Text>
                    <Text>
                        <strong>Dog Information:</strong> To provide tailored training services, we
                        may collect details about your dog's behavior, health, and background.
                    </Text>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>2. How We Use Your Information:</Heading>
                    <Text>
                        <strong>Service Delivery:</strong> We use your information to deliver
                        personalized dog training services, including communication about
                        appointments and progress.
                    </Text>
                    <Text>
                        <strong>Communication:</strong> With your consent, we may use your contact
                        information to send newsletters, updates, and promotional material. You may
                        opt out of receiving all communications from Evolve K9 LLC.
                    </Text>
                    <Text>
                        <strong>Website Improvement:</strong> We analyze website usage data to
                        improve our content, design, and user experience.
                    </Text>
                </VStack>
                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>3. Information Sharing:</Heading>
                    <Text>
                        <strong>Trusted Partners:</strong> We may share your information with
                        trusted third-party service providers who assist us in delivering our
                        services.
                    </Text>
                    <Text>
                        <strong>Legal Requirements:</strong> We may disclose your information if
                        required by law or to protect our rights and safety.
                    </Text>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>4. Your Choices:</Heading>
                    <Text>
                        <strong>Opt-Out:</strong> You have the option to opt-out of receiving
                        promotional communications.
                    </Text>
                    <Text>
                        <strong>Access and Correction:</strong> You can request access to your
                        personal information and correct any inaccuracies.
                    </Text>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>5. Security:</Heading>
                    <Text>
                        We employ industry-standard security measures to protect your information
                        from unauthorized access or disclosure.
                    </Text>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>6. Children's Privacy:</Heading>
                    <Text>
                        Our services are not intended for individuals under the age of 13. We do not
                        knowingly collect or maintain information from children.
                    </Text>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>7. Changes to this Privacy Policy:</Heading>
                    <Text>
                        We may update this Privacy Policy to reflect changes in our practices. The
                        updated policy will be posted on our website.
                    </Text>
                </VStack>

                <VStack alignItems='start' gap={4} as='section'>
                    <Heading as='h2'>8. Contact Us:</Heading>
                    <Text>
                        If you have any questions or concerns regarding our Privacy Policy, please
                        contact us at <Link href='tel:+19702358466'>(970) 235-8466</Link>.
                    </Text>
                </VStack>
                <VStack alignItems='start' gap={4} as='footer'>
                    <Text>
                        By using our website and services, you consent to the terms outlined in this
                        Privacy Policy.
                    </Text>
                    <VStack>
                        <Text>
                            <strong>Evolve K9 LLC</strong>
                            <br />
                            <Link href='mailto:marcus.chapman@evolvek9.com'>
                                marcus.chapman@evolvek9.com
                            </Link>
                            <br />
                            (970) 235-8466
                        </Text>
                    </VStack>
                </VStack>
            </VStack>
        </Container>
    )
}
export default PrivacyPage
