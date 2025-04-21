
import { Movie } from "@/types/movie";
import { MovieCard } from "@/components/MovieCard";

interface MovieGridProps {
  movies: Movie[];
  watchlist: Movie[];
  onAddToWatchlist: (movie: Movie) => void;
  onRemoveFromWatchlist: (movieId: number) => void;
}

export function MovieGrid({ 
  movies, 
  watchlist, 
  onAddToWatchlist, 
  onRemoveFromWatchlist 
}: MovieGridProps) {
  const isInWatchlist = (movieId: number) => {
    return watchlist.some(movie => movie.id === movieId);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isInWatchlist={isInWatchlist(movie.id)}
          onAddToWatchlist={onAddToWatchlist}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
        />
      ))}
    </div>
  );
}
