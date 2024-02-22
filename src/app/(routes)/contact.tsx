'use client'
import { Box, Container, VStack } from '@chakra-ui/react'
import { Navbar } from '../_components/Navbar'
import Hero from '../_features/hero/Hero'
import About from '../_features/about/About'
import { homepageConfig } from '../_config/pages/homepageConfig'
import Contact from '../_features/contact/Contact'
import Services from '../_features/services/Services'
const Home = () => {
    return (
        <Box bg='brandTan.300'>
            <Hero
                title={homepageConfig.hero.title}
                subtitle='evolve K9'
                action={homepageConfig.hero.action}
            />
            <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                bg='brandTan.300'
                mt={{ base: 16, lg: 24 }}
                flexDirection='column'
                gap={24}
            >
                <VStack gap={12}>
                    <About body={homepageConfig.about.body} />
                </VStack>
            </Container>
            <Contact />
            <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                bg='brandTan.300'
                mt={{ base: 16, lg: 24 }}
                flexDirection='column'
                gap={24}
            >
                <Services />
            </Container>
        </Box>
    )
}
export default Home
