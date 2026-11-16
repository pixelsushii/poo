import { Member } from './types/member.js';

class Main
{
    constructor()
    {
        this.memberHolder = document.getElementById('member-holder');
        this.departmentFilter = document.getElementById('department-filter');
        this.members = [];
    }

    async initialize()
    {
        const teamFile = await fetch('./data/team.json');
        if (!teamFile.ok)
        {
            throw new Error(`Could not load team members: ${teamFile.status}`);
        }

        const teamData = await teamFile.json();
        this.members = teamData.map((memberData) =>
        {
            return new Member(
                memberData.name,
                memberData.position,
                memberData.department,
                memberData.available
            );
        });

        const departments = [...new Set(this.members.map((member) => member.department))].sort();
        departments.forEach((department) =>
        {
            const option = document.createElement('option');
            option.value = department;
            option.textContent = department;
            this.departmentFilter.appendChild(option);
        });

        this.departmentFilter.addEventListener('change', () => this.render());
        this.render();
    }

    render()
    {
        const selectedDepartment = this.departmentFilter.value;
        this.memberHolder.replaceChildren();

        this.members
            .filter((member) =>
            {
                return selectedDepartment === 'all' || member.department === selectedDepartment;
            })
            .forEach((member) => member.render(this.memberHolder));
    }
}

const app = new Main();
app.initialize();
