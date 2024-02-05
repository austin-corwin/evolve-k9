'use client'
import { Navbar } from '../_components/Navbar'
import Hero from '../_features/hero/Hero'
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero
                title='Where training meets transformation'
                subtitle='evolve K9'
                action={{ label: 'SEE MORE', href: '#' }}
            />
        </>
    )
}
export default Home
