'use client'
import { Box, Container, VStack } from '@chakra-ui/react'
import { Navbar } from '../_components/Navbar'
import Hero from '../_features/hero/Hero'
import About from '../_features/about/About'
const Home = () => {
    return (
        <Box bg='brandTan.200'>
            <Hero
                title='Where training meets transformation'
                subtitle='evolve K9'
                action={{ label: 'SEE MORE', href: '#' }}
            />
            <Container
                display='flex'
                maxW={{ base: 340, md: 800, lg: 800, xl: 1280 }}
                bg='brandTan.200'
                mt={{ base: 16, lg: 24 }}
            >
                <VStack gap={24}>
                    <About />
                </VStack>
            </Container>
        </Box>
    )
}
export default Home
