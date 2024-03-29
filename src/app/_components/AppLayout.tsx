'use client'
import { Providers } from '@/app/providers'
import React, { use } from 'react'
import { MenuItem, Navbar } from './Navbar'
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    VStack,
} from '@chakra-ui/react'
import Footer from '@/app/_features/footer/Footer'
import useDrawer from '@/app/_state/stores/useDrawer'
import { fonts } from '@/app/_config/fonts'
import { GoogleAnalytics } from '@next/third-parties/google'

interface IAppLayout {
    children: React.ReactNode
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
    const isOpen = useDrawer((state) => state.isOpen)
    const setIsOpen = useDrawer((state) => state.setIsOpen)
    const { hind, montserrat } = fonts
    return (
        <html lang='en' className={`${hind.variable} ${montserrat.variable}`}>
            <body style={{ background: '#FFF5D2' }}>
                <form name='contact' data-netlify netlify-honeypot='bot-field' hidden>
                    <input type='text' name='first_name' />
                    <input type='text' name='last_name' />
                    <input type='text' name='zip_code' />
                    <input type='text' name='area_of_interest' />
                    <input type='email' name='email' />
                    <input type='text' name='phone_number' />
                    <input type='checkbox' name='opt_in' />
                </form>
                <Providers>
                    <main className='flex min-h-screen flex-col items-center justify-between'>
                        <Navbar />
                        {children}
                        <Drawer isOpen={isOpen} placement='right' onClose={() => setIsOpen(false)}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <Box h='full' bg='#FFF5D2'>
                                    <DrawerCloseButton />
                                    {/* <DrawerHeader>Create your account</DrawerHeader> */}
                                    <DrawerBody pt={8}>
                                        {/* <Input placeholder='Type here...' /> */}
                                        {/* <MenuLinks isOpen={isOpen} /> */}
                                        <VStack
                                            spacing={8}
                                            align='center'
                                            justify={[
                                                'center',
                                                'space-between',
                                                'flex-end',
                                                'flex-end',
                                            ]}
                                            pt={[4, 4, 0, 0]}
                                        >
                                            <Box onClick={() => setIsOpen(false)}>
                                                <MenuItem to='/#about'>About</MenuItem>
                                            </Box>
                                            <Box onClick={() => setIsOpen(false)}>
                                                <MenuItem to='/#programs'>Programs</MenuItem>
                                            </Box>
                                            <Box onClick={() => setIsOpen(false)}>
                                                <MenuItem to='/contact'>Contact</MenuItem>
                                            </Box>
                                        </VStack>
                                    </DrawerBody>
                                </Box>
                            </DrawerContent>
                        </Drawer>
                    </main>
                    <Footer />
                </Providers>
            </body>
            <GoogleAnalytics gaId='G-Q34G8B7T77' />
        </html>
    )
}
export default AppLayout
