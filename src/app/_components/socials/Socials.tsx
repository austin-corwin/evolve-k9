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
            <Link display='flex' alignItems='center' href='mailto:marcus.chapman@evolvek9.com'>
                <Icon
                    color='brandTan.300'
                    boxSize={6}
                    as={EnvelopeIcon}
                    aria-label='Email evolve k9'
                />
            </Link>
            <FacebookIcon />
        </HStack>
    )
}
export default Socials
