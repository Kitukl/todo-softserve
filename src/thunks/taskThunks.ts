import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { ITask } from '../components/Task/types'

export const fetchTasks = createAsyncThunk<ITask[]>(
	'tasks/fetchTasks',
	async () => {
		const response = await axios.get<ITask[]>(
			'http://localhost:5146/api/Task/tasks'
		)
		return response.data
	}
)

export const createTask = createAsyncThunk<ITask, ITask>(
	'tasks/createTask',
	async task => {
		const response = await axios.post<ITask>(
			'http://localhost:5146/api/Task/create',
			task
		)
		return response.data
	}
)

export const editTaskApi = createAsyncThunk<ITask, ITask>(
	'tasks/editTask',
	async task => {
		const response = await axios.put<ITask>(
			`http://localhost:5146/api/Task/update/${task.id}`,
			task
		)
		return response.data
	}
)

export const deleteTaskApi = createAsyncThunk<string, string>(
	'tasks/deleteTask',
	async id => {
		await axios.delete(`http://localhost:5146/api/Task/delete/${id}`)
		return id
	}
)
