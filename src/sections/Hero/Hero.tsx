import { FloatButton, Modal } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTaskForm } from '../../components/AddTaskForm'
import { SearchSection } from '../../components/SearchSection'
import { StatusSection } from '../../components/StatusSection'
import { Task } from '../../components/Task'
import type { ITask } from '../../components/Task/types'
import type { AppDispatch, RootState } from '../../redux/store/store'
import { createTask, fetchTasks } from '../../thunks/taskThunks'

export const Hero = () => {
	const formRef = useRef<{ submit: () => void }>(null)
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useDispatch<AppDispatch>()

	const handleShow = () => setIsOpen(true)
	const handleCancel = () => setIsOpen(false)

	const handleSubmit = (values: ITask) => {
		dispatch(createTask(values))
		window.location.reload()
	}

	const { tasks, filters } = useSelector((state: RootState) => state.tasks)

	const filteredTasks = tasks.filter((task: ITask) => {
		const matchesText = task.title
			.toLowerCase()
			.includes(filters.searchText.toLowerCase())
		const matchesDate =
			!filters.date ||
			new Date(task.date).toDateString() ===
				new Date(filters.date).toDateString()
		return matchesText && matchesDate
	})

	useEffect(() => {
		dispatch(fetchTasks())
	}, [dispatch])

	return (
		<section className='w-full flex mt-[10rem] flex-col justify-evenly gap-15'>
			<h1 className='text-5xl text-blue-800 font-extrabold text-center'>
				Знайдіть завдання, яке вам потрібно!
			</h1>
			<div className='w-[40rem] mx-auto'>
				<SearchSection />
			</div>
			<div className='flex flex-row justify-evenly'>
				<StatusSection status='To-Do'>
					{filteredTasks
						.filter((task: ITask) => task.status === 'Todo')
						.map((task: ITask) => (
							<Task
								key={task.id}
								id={task.id}
								title={task.title}
								description={task.description}
								status={task.status}
								date={task.date}
							/>
						))}
				</StatusSection>
				<StatusSection status='In Progress'>
					{filteredTasks
						.filter((task: ITask) => task.status === 'In Progress')
						.map((task: ITask) => (
							<Task
								key={task.id}
								id={task.id}
								title={task.title}
								description={task.description}
								status={task.status}
								date={task.date}
							/>
						))}
				</StatusSection>
				<StatusSection status='Done'>
					{filteredTasks
						.filter((task: ITask) => task.status === 'Done')
						.map((task: ITask) => (
							<Task
								key={task.id}
								id={task.id}
								title={task.title}
								description={task.description}
								status={task.status}
								date={task.date}
							/>
						))}
				</StatusSection>
			</div>

			<FloatButton onClick={handleShow} type='primary' />
			<Modal
				title='Додати завдання'
				open={isOpen}
				closeIcon={<span aria-label='Custom Close Button'>×</span>}
				onOk={() => formRef.current?.submit()}
				okText='Зберегти'
				onCancel={handleCancel}
			>
				<AddTaskForm submit={handleSubmit} ref={formRef} />
			</Modal>
		</section>
	)
}
