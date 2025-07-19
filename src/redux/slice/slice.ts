import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { ITask } from '../../components/Task/types'

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
		addTask: (state, action: PayloadAction<ITask>) => {
			state.tasks.push(action.payload)
		},
		editTask: (state, action: PayloadAction<ITask>) => {
			const idx = state.tasks.findIndex(t => t.id === action.payload.id)
			if (idx !== -1) state.tasks[idx] = action.payload
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter(t => t.id !== action.payload)
		},
		setSearchText: (state, action: PayloadAction<string>) => {
			state.filters.searchText = action.payload
		},
		setDate: (state, action: PayloadAction<Date | null>) => {
			state.filters.date = action.payload
		},
	},
})

export const { addTask, setSearchText, setDate, editTask, deleteTask } =
	tasksSlice.actions
export default tasksSlice.reducer
