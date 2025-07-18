import { useEffect, useState } from 'react'

export const Header = () => {
	const [date, setDate] = useState<string>('')

	useEffect(() => {
		const today = new Date().toLocaleDateString('uk-UA', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		})
		setDate(today)
	}, [])

	return (
		<header className='flex flex-row absolute z-50 bg-[#F8F8F8] border-b border-white w-full h-[6rem] shadow-lg items-center justify-around'>
			<h2 className='text-2xl text-blue-400 font-bold'>To-Do by Oleh Kit</h2>
			<span>{date}</span>
		</header>
	)
}
