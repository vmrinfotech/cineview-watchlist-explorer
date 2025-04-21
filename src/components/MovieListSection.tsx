
import { Movie } from "@/types/movie";
import { MovieGrid } from "@/components/MovieGrid";

interface MovieListSectionProps {
  title: string;
  description?: string;
  movies: Movie[];
  watchlist: Movie[];
  onAddToWatchlist: (movie: Movie) => void;
  onRemoveFromWatchlist: (movieId: number) => void;
  emptyMessage?: string;
}

export function MovieListSection({
  title,
  description,
  movies,
  watchlist,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  emptyMessage = "No movies found"
}: MovieListSectionProps) {
  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && <p className="text-muted-foreground mt-1">{description}</p>}
      </div>
      
      {movies.length > 0 ? (
        <MovieGrid
          movies={movies}
          watchlist={watchlist}
          onAddToWatchlist={onAddToWatchlist}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
        />
      ) : (
        <div className="w-full py-20 text-center bg-card rounded-lg">
          <p className="text-muted-foreground">{emptyMessage}</p>
        </div>
      )}
    </section>
  );
}
