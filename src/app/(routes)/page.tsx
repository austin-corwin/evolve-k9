'use client'
import { Box, Container, VStack } from '@chakra-ui/react'
import { homepageConfig } from '../_config/pages/homepageConfig'
import About from '../_features/about/About'
import Contact from '../_features/contact/Contact'
import Hero from '../_features/hero/Hero'
import Programs from '../_features/programs/Programs'
import Testimonials from '../_features/testimonials/Testimonials'
import TrustedBrands from '../_features/trustedBrands/TrustedBrands'
const Home = () => {
    return (
        <Box bg='brandTan.300'>
            <Hero
                title={homepageConfig.hero.title}
                subtitle={homepageConfig.hero.subtitle}
                action={homepageConfig.hero.action}
            />
            <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                bg='brandTan.300'
                mt={{ base: 6, lg: 24 }}
                flexDirection='column'
                gap={24}
                px={{ base: 6, lg: 4 }}
            >
                <VStack gap={{ base: 4, lg: 12 }}>
                    <About body={homepageConfig.about.body} />
                </VStack>
            </Container>
            <Contact />
            {/* Leave until we have a community page */}
            {/* <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                bg='brandTan.300'
                mt={{ base: 16, lg: 24 }}
                flexDirection='column'
                gap={24}
            >
                <Community
                    body={`Unlock a world of canine excellence by connecting with our vibrant community. Dive into a wealth of training resources, exclusive content, and exciting company updates tailored just for you. Join us in fostering a community bound by a shared passion for dog training and a commitment to the evolving journey of our beloved canine companions. Your connection with Evolve K9 goes beyond training—it's a shared experience, a source of inspiration, and a gateway to a world where every tail wags with joy. Embrace the journey; connect, learn, and evolve with us!`}
                />
            </Container> */}
            <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                bg='brandTan.300'
                mt={{ lg: 24 }}
                flexDirection='column'
                gap={{ base: 14, lg: 48 }}
                pb={{ base: 10, lg: 24 }}
            >
                <Programs />
                <Testimonials body='test' />
                <TrustedBrands />
            </Container>
        </Box>
    )
}
export default Home
