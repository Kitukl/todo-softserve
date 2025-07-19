export interface ITask {
	id: string
	title: string
	description: string
	status: 'Todo' | 'In Progress' | 'Done'
	date: Date
}
