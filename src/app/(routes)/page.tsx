'use client'
import { Box, Container, VStack } from '@chakra-ui/react'
import { Navbar } from '../_components/Navbar'
import Hero from '../_features/hero/Hero'
import About from '../_features/about/About'
import { homepageConfig } from '../_config/pages/homepageConfig'
const Home = () => {
    return (
        <Box bg='brandTan.100'>
            <Hero
                title={homepageConfig.hero.title}
                subtitle='evolve K9'
                action={homepageConfig.hero.action}
            />
            <Container
                display='flex'
                maxW={{ base: 340, md: 800, lg: 800, xl: 1280 }}
                bg='brandTan.100'
                mt={{ base: 16, lg: 24 }}
            >
                <VStack gap={24}>
                    <About body={homepageConfig.about.body} />
                </VStack>
            </Container>
        </Box>
    )
}
export default Home
