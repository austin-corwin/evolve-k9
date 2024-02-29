import type { Metadata } from 'next'
import * as React from 'react'
import './globals.css'
import AppLayout from './_components/AppLayout'

export const metadata: Metadata = {
    title: 'Evolve K9 Training',
    description:
        "Welcome to Evolve K9! We are dedicated to empowering dogs to make good choices for themselves. Through our training programs, we instill decision-making skills that promote independence, confidence, and a stronger connection between dogs and their owners. Recognizing the importance of a cooperative partnership, our training methods provide owners with the control needed to guide and shape their dog's behavior.",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <AppLayout>{children}</AppLayout>
}
