import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store/store'
import { Hero } from './Hero'

describe('Hero component', () => {
	test('Rendr all status section', () => {
		render(
			<Provider store={store}>
				<Hero />
			</Provider>
		)
		expect(screen.getByText('To-Do')).toBeInTheDocument()
		expect(screen.getByText('In Progress')).toBeInTheDocument()
		expect(screen.getByText('Done')).toBeInTheDocument()
	})
})
