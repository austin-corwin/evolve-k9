'use client'
import { fonts } from '@/app/_config/fonts'
import Footer from '@/app/_features/footer/Footer'
import { Providers } from '@/app/providers'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import React from 'react'
import { Navbar } from './Navbar'
import MainNavDrawer from './navigation/MainNavDrawer'

interface IAppLayout {
    children: React.ReactNode
}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
    const { hind, montserrat } = fonts
    return (
        <html lang='en' className={`${hind.variable} ${montserrat.variable}`}>
            <body style={{ background: '#FFF5D2' }}>
                <Providers>
                    <main className='flex min-h-screen flex-col items-center justify-between'>
                        <Navbar />
                        {children}
                        <MainNavDrawer />
                    </main>
                    <Footer />
                </Providers>
            </body>
            <GoogleAnalytics gaId='G-Q34G8B7T77' />
            <GoogleTagManager gtmId='GTM-NJTJJTMV' />
        </html>
    )
}
export default AppLayout
