import { FloatButton, Modal } from 'antd'
import { AddTaskForm } from '../../components/AddTaskForm'
import { SearchSection } from '../../components/SearchSection'
import { StatusSection } from '../../components/StatusSection'
import { Task } from '../../components/Task'
import type { ITask } from '../../components/Task/types'

import { useRef, useState } from 'react'

export const Hero = () => {
	const formRef = useRef<{ submit: () => void }>(null)

	const [isOpen, setIsOpen] = useState(false)

	const handleShow = () => setIsOpen(true)
	const handleCancel = () => setIsOpen(false)

	const handleSubmit = (values: ITask) => {
		console.log('Надіслано на бек:', values)
		setIsOpen(false)
	}

	const TASK = {
		title: 'Test',
		description: 'Test task',
		status: 'Done',
		date: new Date(),
	} as ITask

	return (
		<section className='w-full flex mt-[10rem] flex-col justify-evenly gap-15'>
			<h1 className='text-5xl text-blue-800 font-extrabold text-center'>
				Знайдіть завдання, яке вам потрібно!
			</h1>
			<div className='w-[40rem] mx-auto'>
				<SearchSection />
			</div>
			<div className='flex flex-row justify-evenly'>
				<StatusSection status='To-Do'>d</StatusSection>
				<StatusSection status='In Progress'>
					<Task
						title={TASK.title}
						description={TASK.description}
						status={TASK.status}
						date={TASK.date}
					/>
				</StatusSection>
				<StatusSection status='Done'>d</StatusSection>
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
