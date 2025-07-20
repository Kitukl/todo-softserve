import Card from 'antd/es/card/Card'
import Modal from 'antd/es/modal/Modal'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../redux/store/store'
import { deleteTaskApi, editTaskApi } from '../../thunks/taskThunks'
import { AddTaskForm } from '../AddTaskForm/AddTaskForm'
import type { ITask } from './types'

export const Task = ({ id, title, description, status, date }: ITask) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const dispatch = useDispatch<AppDispatch>()

	const handleCancel = () => setIsOpen(false)
	const handleShow = () => setIsOpen(true)
	const handleDelete = () => dispatch(deleteTaskApi(id))
	const handleSubmit = (values: ITask) => {
		dispatch(editTaskApi({ ...values, id }))
		window.location.reload()
	}
	const formRef = useRef<{ submit: () => void }>(null)

	return (
		<div className='w-[20rem]'>
			<Card title={title} variant='outlined'>
				<div className='flex flex-col gap-3'>
					<div className='line-clamp-2'>{description}</div>
					<div className='flex flex-row gap-10'>
						<span
							className='text-red-500 hover:text-red-800 duration-350 hover:cursor-pointer'
							onClick={handleDelete}
						>
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
				title='Редагувати завдання'
				open={isOpen}
				closeIcon={<span aria-label='Custom Close Button'>×</span>}
				onOk={() => formRef.current?.submit()}
				okText='Зберегти'
				onCancel={handleCancel}
			>
				<AddTaskForm
					submit={handleSubmit}
					ref={formRef}
					initialValues={{ id, title, description, status, date }}
				/>
			</Modal>
		</div>
	)
}
