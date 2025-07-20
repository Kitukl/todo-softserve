import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { ITask } from '../../components/Task/types'
import {
	createTask,
	deleteTaskApi,
	editTaskApi,
	fetchTasks,
} from '../../thunks/taskThunks'

interface FilterState {
	searchText: string
	date: Date | null
}

interface TasksState {
	tasks: ITask[]
	filters: FilterState
}

const initialState: TasksState = {
	tasks: [],
	filters: {
		searchText: '',
		date: null,
	},
}

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		setSearchText: (state, action: PayloadAction<string>) => {
			state.filters.searchText = action.payload
		},
		setDate: (state, action: PayloadAction<Date | null>) => {
			state.filters.date = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchTasks.fulfilled, (state, action) => {
			state.tasks = action.payload
		})
		builder.addCase(createTask.fulfilled, (state, action) => {
			state.tasks.push(action.payload)
		})
		builder.addCase(editTaskApi.fulfilled, (state, action) => {
			const idx = state.tasks.findIndex(t => t.id === action.payload.id)
			if (idx !== -1) state.tasks[idx] = action.payload
		})
		builder.addCase(deleteTaskApi.fulfilled, (state, action) => {
			state.tasks = state.tasks.filter(t => t.id !== action.payload)
		})
	},
})

export const { setSearchText, setDate } = tasksSlice.actions
export default tasksSlice.reducer
