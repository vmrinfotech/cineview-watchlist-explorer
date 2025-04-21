
export interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
  genres: string[];
  actors: string[];
  rating: number;
  poster: string;
  description: string;
  dateAdded: string; // ISO date string
}

export type Genre = 
  | "Action" 
  | "Adventure" 
  | "Animation" 
  | "Comedy" 
  | "Crime" 
  | "Documentary" 
  | "Drama" 
  | "Fantasy" 
  | "Horror" 
  | "Mystery" 
  | "Romance" 
  | "Sci-Fi" 
  | "Thriller";

export interface FilterOptions {
  genre: string | null;
  rating: number | null;
  searchQuery: string;
  searchField: "title" | "director" | "actor" | null;
}
