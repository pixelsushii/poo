export class Movie
{
    constructor(title, director, year, rating)
    {
        this.title = title;
        this.director = director;
        this.year = year;
        this.rating = rating;
    }

    render(parent)
    {
        const card = document.createElement('article');
        card.className = 'movie-card';
        if (this.rating >= 8)
        {
            card.classList.add('movie-card--top-rated');
        }

        const title = document.createElement('h2');
        title.textContent = this.title;

        const director = document.createElement('p');
        director.textContent = `Director: ${this.director}`;

        const year = document.createElement('p');
        year.textContent = `Year: ${this.year}`;

        const rating = document.createElement('p');
        rating.className = 'movie-rating';
        rating.textContent = `Rating: ${this.rating}/10${this.rating >= 8 ? ' ★' : ''}`;

        card.append(title, director, year, rating);
        parent.appendChild(card);
    }
}
