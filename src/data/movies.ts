
import { Movie } from "@/types/movie";

// Sample movie data
export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genres: ["Sci-Fi", "Action", "Thriller"],
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    rating: 8.8,
    poster: "https://picsum.photos/seed/inception/300/450",
    description: "A thief who enters the dreams of others to steal their secrets.",
    dateAdded: "2023-04-15T14:00:00Z"
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genres: ["Drama"],
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    rating: 9.3,
    poster: "https://picsum.photos/seed/shawshank/300/450",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    dateAdded: "2023-04-18T10:30:00Z"
  },
  {
    id: 3,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genres: ["Crime", "Drama"],
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    rating: 9.2,
    poster: "https://picsum.photos/seed/godfather/300/450",
    description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    dateAdded: "2023-04-10T16:45:00Z"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genres: ["Crime", "Drama"],
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    rating: 8.9,
    poster: "https://picsum.photos/seed/pulpfiction/300/450",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    dateAdded: "2023-04-12T09:15:00Z"
  },
  {
    id: 5,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    rating: 9.0,
    poster: "https://picsum.photos/seed/darkknight/300/450",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    dateAdded: "2023-04-20T08:00:00Z"
  },
  {
    id: 6,
    title: "Parasite",
    director: "Bong Joon Ho",
    year: 2019,
    genres: ["Comedy", "Drama", "Thriller"],
    actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    rating: 8.6,
    poster: "https://picsum.photos/seed/parasite/300/450",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    dateAdded: "2023-04-21T11:20:00Z"
  },
  {
    id: 7,
    title: "La La Land",
    director: "Damien Chazelle",
    year: 2016,
    genres: ["Comedy", "Drama", "Romance"],
    actors: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt"],
    rating: 8.0,
    poster: "https://picsum.photos/seed/lalaland/300/450",
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    dateAdded: "2023-04-19T14:30:00Z"
  },
  {
    id: 8,
    title: "Get Out",
    director: "Jordan Peele",
    year: 2017,
    genres: ["Horror", "Mystery", "Thriller"],
    actors: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    rating: 7.7,
    poster: "https://picsum.photos/seed/getout/300/450",
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    dateAdded: "2023-04-16T17:50:00Z"
  },
  {
    id: 9,
    title: "Spider-Man: Into the Spider-Verse",
    director: "Bob Persichetti",
    year: 2018,
    genres: ["Animation", "Action", "Adventure"],
    actors: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
    rating: 8.4,
    poster: "https://picsum.photos/seed/spiderverse/300/450",
    description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    dateAdded: "2023-04-14T12:10:00Z"
  },
  {
    id: 10,
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    year: 2014,
    genres: ["Adventure", "Comedy", "Crime"],
    actors: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    rating: 8.1,
    poster: "https://picsum.photos/seed/grandbudapest/300/450",
    description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    dateAdded: "2023-04-17T15:40:00Z"
  },
  {
    id: 11,
    title: "The Matrix",
    director: "Lana Wachowski",
    year: 1999,
    genres: ["Action", "Sci-Fi"],
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    rating: 8.7,
    poster: "https://picsum.photos/seed/matrix/300/450",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    dateAdded: "2023-04-09T13:25:00Z"
  },
  {
    id: 12,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    rating: 8.6,
    poster: "https://picsum.photos/seed/interstellar/300/450",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    dateAdded: "2023-04-13T18:00:00Z"
  }
];

// Helper to get all unique genres from movies
export const getAllGenres = (): string[] => {
  const genreSet = new Set<string>();
  
  movies.forEach(movie => {
    movie.genres.forEach(genre => {
      genreSet.add(genre);
    });
  });
  
  return Array.from(genreSet).sort();
};

// Helper to get rating options (1-10)
export const getRatingOptions = (): number[] => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
};
