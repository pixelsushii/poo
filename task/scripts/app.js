import { Task } from './types/task.js';

class Main
{
    constructor()
    {
        this.taskHolder = document.getElementById('task-holder');
        this.tasks = [];
    }

    async initialize()
    {
        const tasksFile = await fetch('./data/tasks.json');
        if (!tasksFile.ok)
        {
            throw new Error(`Could not load tasks: ${tasksFile.status}`);
        }

        const tasksData = await tasksFile.json();
        this.tasks = tasksData.map((taskData) =>
        {
            return new Task(taskData.text, taskData.category, taskData.completed);
        });

        this.render();
    }

    render()
    {
        this.taskHolder.replaceChildren();
        this.tasks.forEach((task) => task.render(this.taskHolder));
    }
}

const app = new Main();
app.initialize();
