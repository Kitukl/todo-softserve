import { DatePicker } from 'antd'
import Search from 'antd/es/input/Search'
import { useDispatch } from 'react-redux'
import { setDate, setSearchText } from '../../redux/slice/slice'

export const SearchSection = () => {
	const dispatch = useDispatch()
	return (
		<div className='w-full flex flex-row gap-10 items-center'>
			<Search
				placeholder='Введіть назву завдання'
				onSearch={value => dispatch(setSearchText(value))}
				enterButton
				size='large'
				allowClear
			/>
			<DatePicker
				size='large'
				placeholder='Виберіть дату'
				className='w-[20rem]'
				onChange={date => dispatch(setDate(date ? date.toDate() : null))}
			/>
		</div>
	)
}
