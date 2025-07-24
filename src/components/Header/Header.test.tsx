import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
	test('Render header', () => {
		render(<Header />)
		const today = new Date()
			.toLocaleDateString('uk-UA', {
				day: 'numeric',
				month: 'long',
				year: 'numeric',
			})
			.toString()
		expect(screen.getByText(today)).toBeInTheDocument()
	})
})
