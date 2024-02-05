import { Montserrat, Hind } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
})
const hind = Hind({
    subsets: ['latin'],
    variable: '--font-hind',
    weight: ['300', '400', '500', '600', '700'],
})

export const fonts = {
    montserrat,
    hind,
}
