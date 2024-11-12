import { Navbar } from '@/app/_components/Navbar'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Page from '@/app/(routes)/page'
import MainNavDrawer from '@/app/_components/navigation/MainNavDrawer'

describe('Page', () => {
    it('Mobile nav button opens drawer', () => {
        window.innerWidth = 388
        render(
            <main className='flex min-h-screen flex-col items-center justify-between'>
                <Navbar />
                <Page />
                <MainNavDrawer />
            </main>,
        )
        const drawerId = 'mobile-menu-drawer'

        const hiddenElement = screen.queryByTestId(drawerId)
        expect(hiddenElement).not.toBeInTheDocument()

        const menuToggleButton = screen.getByTestId('menu-toggle-button')
        fireEvent.click(menuToggleButton)

        expect(screen.getByTestId(drawerId)).toBeInTheDocument()
    })
})
