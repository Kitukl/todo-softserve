import { DatePicker } from 'antd'
import Search from 'antd/es/input/Search'

export const SearchSection = () => {
	return (
		<div className='w-full flex flex-row gap-10 items-center'>
			<Search
				placeholder='Введіть назву завдання'
				onSearch={() => console.log('test')}
				enterButton
				size='large'
				allowClear
			/>
			<DatePicker
				size='large'
				placeholder='Виберіть дату'
				className='w-[20rem]'
			/>
		</div>
	)
}
