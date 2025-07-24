import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../../redux/store/store'
import { Task } from './Task'

describe('Task', () => {
	test('Render Task component', async () => {
		render(
			<Provider store={store}>
				<Task
					id='123'
					title='Test Task'
					description='Test Description'
					status='Done'
					date={new Date()}
				/>
			</Provider>
		)
		expect(screen.getByText('Test Task')).toBeInTheDocument()

		expect(screen.getByText('Test Description')).toBeInTheDocument()

		expect(screen.getByText('Видалити')).toBeInTheDocument()
		expect(screen.getByText('Редагувати')).toBeInTheDocument()

		await userEvent.click(screen.getByText('Видалити'))
		expect(
			screen.getByText('Дійсно бажаєте видалити завдання "Test Task" ?')
		).toBeInTheDocument()
	})
})
