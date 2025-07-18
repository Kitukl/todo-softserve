import { DatePicker, Form, Input, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import TextArea from 'antd/es/input/TextArea'
import { forwardRef, useImperativeHandle } from 'react'
import type { ITask } from '../Task/types'

export const AddTaskForm = forwardRef(
	({ submit }: { submit: (values: ITask) => void }, ref) => {
		const [form] = useForm<ITask>()

		const handleFinish = (values: ITask) => {
			submit(values)
			form.resetFields()
		}

		useImperativeHandle(ref, () => ({
			submit: () => {
				form.submit()
			},
		}))

		return (
			<Form form={form} onFinish={handleFinish} layout='vertical'>
				<Form.Item<ITask>
					name='title'
					rules={[
						{ required: true, message: 'Заголовок обов`язковий!' },
						{
							max: 50,
							message: 'Заголовок не повинен перебільшувати 50 символів!',
						},
						{
							min: 5,
							message: 'Заголовок не повинен бути меншим ніж 5 символів!',
						},
					]}
				>
					<Input placeholder='Назва завдання' />
				</Form.Item>

				<Form.Item<ITask>
					name='description'
					rules={[
						{ required: true, message: 'Опис обов`язковий!' },
						{
							max: 200,
							message: 'Опис не повинен перебільшувати 200 символів!',
						},
						{
							min: 10,
							message: 'Опис не повинен бути меншим ніж 10 символів!',
						},
					]}
				>
					<TextArea placeholder='Опис завдання' rows={3} />
				</Form.Item>

				<Form.Item<ITask>
					name='status'
					rules={[{ required: true, message: 'Оберіть статус завдання!' }]}
				>
					<Select placeholder='Статус завдання'>
						<Select.Option value='todo'>To Do</Select.Option>
						<Select.Option value='in_progress'>In Progress</Select.Option>
						<Select.Option value='done'>Done</Select.Option>
					</Select>
				</Form.Item>

				<Form.Item<ITask>
					name='date'
					rules={[
						{ required: true, message: 'Виберіть дедлайн для завдання!' },
					]}
				>
					<DatePicker
						className='w-full'
						disabledDate={current =>
							current &&
							current.toDate() < new Date(new Date().setHours(0, 0, 0, 0))
						}
					/>
				</Form.Item>
			</Form>
		)
	}
)
