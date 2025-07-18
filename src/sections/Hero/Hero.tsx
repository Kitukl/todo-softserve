import { SearchSection } from '../../components/SearchSection'
import { StatusSection } from '../../components/StatusSection'
import { Task } from '../../components/Task'
import type { ITask } from '../../components/Task/types'

export const Hero = () => {
	const TASK = {
		task: {
			title: 'Test',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione quaerat, in debitis itaque eaque libero ea iure quam ex accusantium hic ad eos laborum reprehenderit laboriosam quo maiores voluptatum.',
			status: 'todo',
			date: new Date(),
		},
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
				<StatusSection status='To-Do'>
					<Task task={TASK.task} />
					<Task task={TASK.task} />
				</StatusSection>
				<StatusSection status='In Progress'>
					<Task task={TASK.task} />
					<Task task={TASK.task} />
				</StatusSection>
				<StatusSection status='Done'>
					<Task task={TASK.task} />
					<Task task={TASK.task} />
				</StatusSection>
			</div>
		</section>
	)
}
