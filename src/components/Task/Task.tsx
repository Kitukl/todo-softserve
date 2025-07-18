import Card from 'antd/es/card/Card'
import type { ITask } from './types'

export const Task = ({ title, description }: ITask) => {
	return (
		<div className='w-[20rem]'>
			<Card title={title} variant='outlined'>
				<div className='flex flex-col gap-3'>
					<div className='line-clamp-2'>{description}</div>
					<span className='text-red-500 hover:text-red-800 duration-350 hover:cursor-pointer'>
						Delete
					</span>
				</div>
			</Card>
		</div>
	)
}
