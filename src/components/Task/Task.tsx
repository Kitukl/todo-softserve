import Card from "antd/es/card/Card"
import type { ITask } from "./types"

export const Task = ({task}: ITask) => {
    return (
        <div className="w-[12rem]">
            <Card title={task.title} variant="outlined">
                <div className="flex flex-col gap-3">
                    <div className="line-clamp-2">{task.description}</div>
                    <span className="text-red-500">Delete</span>
                </div>
            </Card>
        </div>
    )
}