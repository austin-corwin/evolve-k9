import { HStack, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import InstagramIcon from './InstagramIcon'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import FacebookIcon from './FacebookIcon'

interface ISocials {}

const Socials: React.FC<ISocials> = () => {
    return (
        <HStack>
            <InstagramIcon />
            <Link
                display='flex'
                alignItems='center'
                href='mailto:marcus.chapman@evolvek9.com'
                aria-label='Email evolve K9'
            >
                <Icon color='brandTan.300' boxSize={6} as={EnvelopeIcon} />
            </Link>
            <FacebookIcon />
        </HStack>
    )
}
export default Socials
