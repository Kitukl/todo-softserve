import Card from 'antd/es/card/Card'
import Modal from 'antd/es/modal/Modal'
import { useRef, useState } from 'react'
import { AddTaskForm } from '../AddTaskForm/AddTaskForm'
import type { ITask } from './types'

export const Task = ({ title, description, status, date }: ITask) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const [newTitle, setTitle] = useState<string>(title)
	const [newDescription, setDescription] = useState<string>(description)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [newStatus, setStatus] = useState<'Todo' | 'In Progress' | 'Done'>(
		status
	)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [newDate, setDate] = useState<Date>(date)

	const handleCancel = () => setIsOpen(false)
	const handleShow = () => setIsOpen(true)
	const handleSubmit = (values: ITask) => {
		console.log('Надіслано на бек редагування:', values)
		setTitle(values.title)
		setDescription(values.description)
		setStatus(values.status)
		setDate(values.date)
		setIsOpen(false)
	}
	const formRef = useRef<{ submit: () => void }>(null)

	return (
		<div className='w-[20rem]'>
			<Card title={newTitle} variant='outlined'>
				<div className='flex flex-col gap-3'>
					<div className='line-clamp-2'>{newDescription}</div>
					<div className='flex flex-row gap-10'>
						<span className='text-red-500 hover:text-red-800 duration-350 hover:cursor-pointer'>
							Видалити
						</span>
						<span
							className='text-blue-500 hover:text-blue-800 duration-300 hover:cursor-pointer'
							onClick={handleShow}
						>
							Редагувати
						</span>
					</div>
				</div>
			</Card>
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
		</div>
	)
}
