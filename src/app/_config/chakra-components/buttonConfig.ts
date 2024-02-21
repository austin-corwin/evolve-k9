import { ComponentStyleConfig } from '@chakra-ui/react'
import { tailwindConstants } from '../tailwind.constants'

const themeColor = tailwindConstants.theme.extend.colors
const color = tailwindConstants.theme.colors

const ButtonConfig: ComponentStyleConfig = {
    baseStyle: {
        borderColor: themeColor.dark,
        borderRadius: '0.25rem',
        borderWidth: '2px',
        color: color.black,
        m: 0,
        _hover: {
            bg: themeColor.dark,
            color: color.white,
            borderColor: themeColor.dark,
        },
        __active: {
            shadow: tailwindConstants?.theme?.extend?.boxShadow?.default,
        },
        __focus: {
            shadow: tailwindConstants?.theme?.extend?.boxShadow?.default,
        },
        fontWeight: 'semibold',
        transition: 'all 200ms ease-in',
        _loading: {
            pointerEvents: 'none',
            opacity: 0.6,
        },
        _disabled: {
            pointerEvents: 'none',
            opacity: 1,
            bg: color.gray['50'],
            color: 'gray.200',
            borderColor: 'gray.50',
            borderWidth: '2px',
        },
    },
    sizes: {
        xs: {
            fontSize: 'xs',
            py: '1',
            px: '3',
            h: 'none',
            m: 'none',
        },
        sm: {
            fontSize: 'sm',
            py: '2.5',
            px: '4',
            h: 'none',
            m: 'none',
        },
        md: {
            fontSize: 'md',
            py: '3',
            px: '6',
            h: 'none',
        },
        lg: {
            fontSize: 'lg',
            px: '8',
            py: '4',
            h: 'none',
        },
    },
    variants: {
        menu: {
            rounded: 4,
            w: { base: 'full', md: '240px', lg: '300' },
            py: 2,
            textAlign: 'start',
            borderWidth: 2,
            borderColor: color.gray[100],
            fontWeight: 'semi-bold',
            bg: 'transparent',
            color: color.gray[500],
            fontSize: '14px',
            px: 4,
            _hover: {
                borderColor: color.gray[500],
                bg: 'none',
                color: color.black,
            },
            _disabled: {
                bg: color.gray[50],
                color: color.gray[300],
                _hover: {
                    borderColor: color.gray[100],
                },
            },
        },
        default: {
            bg: color.white,
            color: color.black,
            borderColor: themeColor.dark,
            borderWidth: '2px',
            _hover: {
                bg: themeColor.dark,
                color: themeColor.light,
            },
        },
        primary: {
            borderColor: themeColor.primary,
            borderWidth: '2px',
            _hover: {
                bg: 'brandTan.300',
                color: 'brandGreen.300',
                borderColor: 'brandTan.300',
            },
            _focus: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.primary,
            },
            _active: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.primary,
            },
            bg: 'brandGreen.300',
            color: 'brandTan.300',
            fontFamily: 'mont',
        },
        secondary: {
            bg: themeColor.secondary,
            color: color.white,
            borderColor: `${themeColor.secondary}`,
            borderWidth: '2px',
            _hover: {
                bg: color.blue[600],
                borderColor: color.blue[600],
            },
            _active: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.secondary,
            },
            _focus: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.secondary,
            },
        },
        info: {
            bg: themeColor.info,
            color: color.white,
            borderColor: `${themeColor.info}`,
            borderWidth: '2px',
            _hover: {
                bg: color.blue[400],
                borderColor: color.blue[400],
            },
            _active: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.info,
            },
            _focus: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.info,
            },
        },
        success: {
            bg: themeColor.success,
            color: color.white,
            borderColor: themeColor.success,
            borderWidth: '2px',
            _hover: {
                bg: color.green[700],
                borderColor: color.green[700],
            },
            _active: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.success,
            },
            _focus: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.success,
            },
        },
        warning: {
            bg: themeColor.warning,
            color: color.black,
            borderColor: themeColor.warning,
            borderWidth: '2px',
            _hover: {
                bg: color.yellow[600],
                borderColor: color.yellow[600],
            },
            _active: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.warning,
            },
            _focus: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.warning,
            },
        },
        error: {
            bg: themeColor.error,
            color: color.white,
            borderColor: themeColor.error,
            borderWidth: '2px',
            _hover: {
                bg: color.red[600],
                borderColor: color.red[600],
                _disabled: {
                    bg: 'none',
                },
            },

            _active: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.error,
            },
            _focus: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.error,
            },
        },
        light: {
            bg: themeColor.light,
            color: color.black,
            borderColor: themeColor.light,
            borderWidth: '2px',
            _hover: {
                bg: 'gray.100',
                borderColor: 'gray.100',
                color: 'gray.500',
            },
            _active: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.default,
            },
            _focus: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.default,
            },
        },
        dark: {
            bg: themeColor.dark,
            color: color.white,
            borderColor: themeColor.dark,
            borderWidth: '2px',
            _hover: { bg: color.gray[400], borderColor: color.gray['400'] },
            _active: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.dark,
            },
            _focus: {
                shadow: tailwindConstants?.theme?.extend?.boxShadow?.dark,
            },
        },
        tab: {
            bg: 'gray.100',
            color: 'dark',
            borderColor: 'gray.100',
            borderWidth: '2px',
            _hover: { bg: 'gray.400', borderColor: 'gray.400' },
            _active: {
                background: 'dark',
                borderColor: 'dark',
                color: 'light',
            },
        },
        link: {
            color: themeColor.info,
            bg: 'transparent',
            borderColor: 'transparent',
            borderWidth: '2px',
            _hover: {
                color: 'blue.500',
                bg: 'transparent',
                shadow: 'none',
                borderColor: 'transparent',
            },
            _active: {
                color: 'blue.500',
                bg: 'transparent',
                textDecoration: 'underline',
            },
            _dark: {
                color: 'blue.300',
                _hover: {
                    color: 'blue.200',
                },
            },
        },
        nude: {
            color: 'none',
            bg: 'none',
            m: 0,
            p: 0,
            w: 'full',
            borderColor: 'transparent',
            _hover: {
                color: 'none',
                bg: 'transparent',
                shadow: 'none',
                borderColor: 'transparent',
            },
        },
        ghost: {
            border: 'none',
            fontSize: 'sm',
            _hover: {
                color: 'gray.500',
            },
        },
    },

    defaultProps: {
        size: 'md',
        variant: 'default',
    },
}

export default ButtonConfig
