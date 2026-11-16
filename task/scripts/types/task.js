export class Task
{
    constructor(text, category, completed)
    {
        this.text = text;
        this.category = category;
        this.completed = completed;
    }

    render(parent)
    {
        const card = document.createElement('article');
        card.className = 'task-card';

        const text = document.createElement('p');
        text.className = 'task-text';
        text.textContent = this.text;

        const category = document.createElement('p');
        category.className = 'task-category';
        category.textContent = `Category: ${this.category}`;

        const completeButton = document.createElement('button');
        completeButton.type = 'button';
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () =>
        {
            this.completed = true;
            this.updateCompletedState(text, completeButton);
        });

        card.append(text, category, completeButton);
        parent.appendChild(card);
        this.updateCompletedState(text, completeButton);
    }

    updateCompletedState(text, completeButton)
    {
        text.classList.toggle('task-text--completed', this.completed);
        completeButton.disabled = this.completed;
        if (this.completed)
        {
            completeButton.textContent = 'Completed';
        }
    }
}
