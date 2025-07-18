import { Task } from "../../components/Task"
import type { ITask } from "../../components/Task/types"

export const Hero = () => {

    const TASK = {
        task: {
            title: 'Test',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione quaerat, in debitis itaque eaque libero ea iure quam ex accusantium hic ad eos laborum reprehenderit laboriosam quo maiores voluptatum.',
            status: 'todo',
            date: new Date()
        }
    } as ITask

    return (
        <section className="flex mt-[10rem]">
            <Task task={TASK.task}/> 
        </section>
    )
}