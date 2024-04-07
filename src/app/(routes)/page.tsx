'use client'
import React from 'react'
import axios from 'axios'
import { Box, Container, VStack } from '@chakra-ui/react'
import { homepageConfig } from '../_config/pages/homepageConfig'
import About from '../_features/about/About'
import Contact from '../_features/contact/Contact'
import Hero from '../_features/hero/Hero'
import Programs from '../_features/programs/Programs'
import Testimonials from '../_features/testimonials/Testimonials'
import useData from '../_state/stores/useData'

const auth = `cce16500cc2de2e4c1fe3afeb9d92c329666111d8910a719f09a14c39f4f486520e9aed6b9e5e0d6b4aeb7fef6acd79b26872d8c63dead5636cf42a22bd83b82f2adfb2434f7474db6cd50264c88f1e59776b6a2bbf10db81395828ef38aeb7cf6dbab9f2d38888bc7f1a06ea76d98679ec2729460f949031adabcaf1c277506`

const Home = () => {
    const data = useData((state) => state.data)
    const setData = useData((state) => state.setData)
    React.useEffect(() => {
        console.log('token is', auth)
        axios
            .get('http://localhost:1337/api/main-nav?populate=*', {
                headers: {
                    Authorization: `Bearer cce16500cc2de2e4c1fe3afeb9d92c329666111d8910a719f09a14c39f4f486520e9aed6b9e5e0d6b4aeb7fef6acd79b26872d8c63dead5636cf42a22bd83b82f2adfb2434f7474db6cd50264c88f1e59776b6a2bbf10db81395828ef38aeb7cf6dbab9f2d38888bc7f1a06ea76d98679ec2729460f949031adabcaf1c277506`,
                },
            })
            .then((response) => {
                const { data } = response
                setData(data?.data?.attributes?.MainNavigation)
                console.log(data?.data?.attributes?.MainNavigation)
            })
    }, [])

    return (
        <Box bg='brandTan.300'>
            <Hero
                title={data?.phoneNumber}
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
                mt={{ base: 16, lg: 24 }}
                flexDirection='column'
                gap={24}
                pb={24}
            >
                <Programs />
                <Testimonials body='test' />
            </Container>
        </Box>
    )
}

Home.getInitialProps = async () => {
    try {
        const res = await axios.get('http://localhost:1337/api/main-nav?populate=*', {
            headers: {
                Authorization: `Bearer cce16500cc2de2e4c1fe3afeb9d92c329666111d8910a719f09a14c39f4f486520e9aed6b9e5e0d6b4aeb7fef6acd79b26872d8c63dead5636cf42a22bd83b82f2adfb2434f7474db6cd50264c88f1e59776b6a2bbf10db81395828ef38aeb7cf6dbab9f2d38888bc7f1a06ea76d98679ec2729460f949031adabcaf1c277506`,
            },
        })
        const homepageData = res.data
        return { homepageData }
    } catch (error) {
        return { error }
    }
}
export default Home
