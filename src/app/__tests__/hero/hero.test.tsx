import { homepageConfig } from '@/app/_config/pages/homepageConfig'
import Hero from '@/app/_features/hero/Hero'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Hero', () => {
    const { hero } = homepageConfig
    const { title, subtitle, action } = hero
    it('Should render hero component', () => {
        render(<Hero title={title} subtitle={subtitle} action={action} />)

        const heroTitle = screen.getByRole('heading', { level: 1 })
        const heroSubtitle = screen.getByRole('heading', { level: 2 })
        const scheduleConsultationButton = screen.getByTestId('hero-action')

        expect(heroTitle).toBeInTheDocument()
        expect(heroSubtitle).toBeInTheDocument()
        expect(scheduleConsultationButton).toBeInTheDocument()
    })
    it('Button click routes to contact', () => {
        render(<Hero title={title} subtitle={subtitle} action={action} />)

        const scheduleConsultationButton = screen.getByTestId('hero-action')
        expect(scheduleConsultationButton).toHaveAttribute('href', '/contact')
    })
})
