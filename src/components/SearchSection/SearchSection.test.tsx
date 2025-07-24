import { fireEvent, render, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import { Provider } from 'react-redux'
import { store } from '../../redux/store/store'
import { SearchSection } from './SearchSection'

describe('SearchSection', () => {
	test('Render SearchSection component', () => {
		render(
			<Provider store={store}>
				<SearchSection />
			</Provider>
		)
		expect(
			screen.getByPlaceholderText('Введіть назву завдання')
		).toBeInTheDocument()
		expect(screen.getByPlaceholderText('Виберіть дату')).toBeInTheDocument()
	})

	test('Dispatch setSearch', () => {
		render(
			<Provider store={store}>
				<SearchSection />
			</Provider>
		)
		const input = screen.getByPlaceholderText('Введіть назву завдання')
		fireEvent.change(input, { target: { value: 'test' } })
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

		const value = store.getState().tasks.filters.searchText
		expect(value).toBe('test')
	})

	test('Dispatch setDate', () => {
		render(
			<Provider store={store}>
				<SearchSection />
			</Provider>
		)
		const dateInput = screen.getByPlaceholderText('Виберіть дату')
		const pastDate = dayjs().subtract(2, 'day')
		fireEvent.change(dateInput, {
			target: { value: pastDate.format('DD.MM.YYYY') },
		})
		const value = store.getState().tasks.filters.date
		expect(value).toBeNull()
	})
})
