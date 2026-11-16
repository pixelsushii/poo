//Declaramos la clase Product
//Export hace que podamos leer Product desde otros archivos
export class Product 
{
    constructor(name, description, price)
    {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    Render(parent)
    {
        const card = document.createElement('div');

        card.innerHTML = `
            <h2>${this.name}</h2>
            <p>${this.description}</p>
            <p>${this.price}</p>
        `;
        
        parent.appendChild(card);
    }
}