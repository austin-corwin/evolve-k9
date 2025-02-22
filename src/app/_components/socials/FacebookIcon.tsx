import { Link } from '@chakra-ui/react'
import React from 'react'

interface IFacebookIcon {}

const FacebookIcon: React.FC<IFacebookIcon> = () => {
    return (
        <Link
            display='flex'
            alignItems='center'
            href='https://www.facebook.com/profile.php?id=61557243442278'
            aria-label="View evolve K9's Facebook"
        >
            <svg
                fill='#FFF5D2'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
            >
                <path d='M12 2C6.477 2 2 6.477 2 12c0 5.013 3.693 9.153 8.505 9.876V14.65H8.031v-2.629h2.474v-1.749c0-2.896 1.411-4.167 3.818-4.167 1.153 0 1.762.085 2.051.124v2.294h-1.642c-1.022 0-1.379.969-1.379 2.061v1.437h2.995l-.406 2.629h-2.588v7.247C18.235 21.236 22 17.062 22 12c0-5.523-4.477-10-10-10z'></path>
            </svg>
        </Link>
    )
}
export default FacebookIcon
