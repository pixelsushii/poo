import { Movie } from './types/movie.js';

class Main
{
    constructor()
    {
        this.movieHolder = document.getElementById('movie-holder');
        this.movies = [];
    }

    async initialize()
    {
        const moviesFile = await fetch('./data/movies.json');
        if (!moviesFile.ok)
        {
            throw new Error(`Could not load movies: ${moviesFile.status}`);
        }

        const moviesData = await moviesFile.json();
        this.movies = moviesData.map((movieData) =>
        {
            return new Movie(
                movieData.title,
                movieData.director,
                movieData.year,
                movieData.rating
            );
        });

        this.render();
    }

    render()
    {
        this.movieHolder.replaceChildren();
        this.movies.forEach((movie) => movie.render(this.movieHolder));
    }
}

const app = new Main();
app.initialize();
