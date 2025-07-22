import { DatePicker, Form, Input, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import TextArea from 'antd/es/input/TextArea'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { forwardRef, useEffect, useImperativeHandle } from 'react'
import type { ITask } from '../Task/types'
dayjs.extend(utc)

interface AddTaskFormProps {
	submit: (values: ITask) => void
	initialValues?: Partial<ITask>
}

export const AddTaskForm = forwardRef(
	({ submit, initialValues }: AddTaskFormProps, ref) => {
		const [form] = useForm<ITask>()

		useEffect(() => {
			if (initialValues) {
				form.setFieldsValue({
					...initialValues,
					date: initialValues.date ? dayjs(initialValues.date) : undefined,
				})
			} else {
				form.resetFields()
			}
		}, [initialValues, form])

		const handleFinish = (values: ITask) => {
			const formattedValues = {
				...values,
				date: dayjs(values.date).add(1, 'day').toDate(),
			}
			submit(formattedValues)
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
						<Select.Option value='Todo'>To Do</Select.Option>
						<Select.Option value='In Progress'>In Progress</Select.Option>
						<Select.Option value='Done'>Done</Select.Option>
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
