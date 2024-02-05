// import componentConfig from "./components/componentConfig";

import { extendBaseTheme, extendTheme, ThemeConfig } from '@chakra-ui/react'

import { tailwindConstants as tailwind } from './tailwind.constants'

const theme: ThemeConfig = extendTheme({
    fonts: {
        heading: 'var(--font-montserrat), sans-serif',
        body: 'var(--font-hind), sans-serif',
        mont: 'var(--font-montserrat), sans-serif',
        hind: 'var(--font-hind), sans-serif',
    },
    //   components: componentConfig,
    colors: {
        ...tailwind.theme.extend.colors,
        ...tailwind.theme.colors,
        primary: {
            main: '#7bb9e8',
            50: '#e3f2fd',
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: '#42a5f5',
            500: '#2196f3',
            600: '#1e88e5',
            700: '#1976d2',
            800: '#1565c0',
            900: '#0d47a1',
        },
        mono: {
            '50': '#000',
            '100': '#000',
            '200': '#000',
            '300': '#000',
            '400': '#000',
            '500': '#000',
            '600': '#FFF',
            '700': '#FFF',
            '800': '#FFF',
            '900': '#FFF',
        },
    },
    breakpoints: {
        base: '0em',
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
        '3xl': '106em',
    },
    extend: {
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        animation: {
            ...tailwind.theme.extend.animation,
        },
        keyframes: {
            ...tailwind.theme.extend.keyframes,
        },
        borderWidth: {
            ...tailwind.theme.extend.borderWidth,
        },
        boxShadow: {
            ...tailwind.theme.extend.boxShadow,
        },
        translate: {
            ...tailwind.theme.extend.translate,
        },
        minWidth: {
            ...tailwind.theme.extend.minWidth,
        },
        minHeight: {
            ...tailwind.theme.extend.minHeight,
        },
        maxHeight: {
            ...tailwind.theme.extend.maxHeight,
        },
        // fontFamily: {
        //     mont: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
        // },
    },
})

export default theme
