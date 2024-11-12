import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../(routes)/page'

describe('Page', () => {
    it('Renders page headings correctly', () => {
        render(<Page />)

        const h1Heading = screen.getByRole('heading', { level: 1 })
        const h2Headings = screen.getAllByRole('heading', { level: 2 })

        expect(h1Heading).toBeInTheDocument()
        h2Headings.forEach((h2Heading) => {
            expect(h2Heading).toBeInTheDocument()
        })
    })
})
