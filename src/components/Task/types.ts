export interface ITask {
	title: string
	description: string
	status: 'Todo' | 'In Progress' | 'Done'
	date: Date
}
