export class Member
{
    constructor(name, position, department, available)
    {
        this.name = name;
        this.position = position;
        this.department = department;
        this.available = available;
    }

    render(parent)
    {
        const card = document.createElement('article');
        card.className = 'member-card';

        const name = document.createElement('h2');
        name.textContent = this.name;

        const position = document.createElement('p');
        position.textContent = this.position;

        const department = document.createElement('p');
        department.className = 'member-department';
        department.textContent = `Department: ${this.department}`;

        const availability = document.createElement('p');
        availability.className = this.available
            ? 'member-availability member-availability--available'
            : 'member-availability member-availability--unavailable';
        availability.textContent = this.available ? 'Disponible' : 'No disponible';

        card.append(name, position, department, availability);
        parent.appendChild(card);
    }
}
