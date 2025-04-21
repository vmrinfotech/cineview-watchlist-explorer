
import { useState, useMemo } from "react";
import { Movie, FilterOptions } from "@/types/movie";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { movies } from "@/data/movies";
import { FilterBar } from "@/components/FilterBar";
import { MovieListSection } from "@/components/MovieListSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  // State for watchlist using localStorage
  const [watchlist, setWatchlist] = useLocalStorage<Movie[]>("watchlist", []);
  
  // State for filters
  const [filters, setFilters] = useState<FilterOptions>({
    genre: null,
    rating: null,
    searchQuery: "",
    searchField: null
  });
  
  // Add movie to watchlist
  const handleAddToWatchlist = (movie: Movie) => {
    setWatchlist([...watchlist, movie]);
  };
  
  // Remove movie from watchlist
  const handleRemoveFromWatchlist = (movieId: number) => {
    setWatchlist(watchlist.filter(movie => movie.id !== movieId));
  };
  
  // Filter movies based on current filters
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      // Filter by genre if selected
      if (filters.genre && !movie.genres.includes(filters.genre)) {
        return false;
      }
      
      // Filter by rating if selected
      if (filters.rating && movie.rating < filters.rating) {
        return false;
      }
      
      // Search functionality
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        
        if (filters.searchField === "title") {
          return movie.title.toLowerCase().includes(query);
        } else if (filters.searchField === "director") {
          return movie.director.toLowerCase().includes(query);
        } else if (filters.searchField === "actor") {
          return movie.actors.some(actor => 
            actor.toLowerCase().includes(query)
          );
        } else {
          // Search all fields if no specific field is selected
          return (
            movie.title.toLowerCase().includes(query) ||
            movie.director.toLowerCase().includes(query) ||
            movie.actors.some(actor => actor.toLowerCase().includes(query))
          );
        }
      }
      
      return true;
    });
  }, [filters]);
  
  // Get top-rated movies (rating >= 8.5)
  const topRatedMovies = useMemo(() => {
    return movies
      .filter(movie => movie.rating >= 8.5)
      .sort((a, b) => b.rating - a.rating);
  }, []);
  
  // Get recently added movies (sort by dateAdded)
  const recentlyAddedMovies = useMemo(() => {
    return [...movies]
      .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
      .slice(0, 5);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cinema-purple to-cinema-accent bg-clip-text text-transparent">
            CineView
          </h1>
          <p className="text-muted-foreground">Your personal movie watchlist explorer</p>
        </header>
        
        <Tabs defaultValue="explore" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="explore">Explore Movies</TabsTrigger>
            <TabsTrigger value="watchlist">My Watchlist</TabsTrigger>
          </TabsList>
          
          <TabsContent value="explore">
            <FilterBar filters={filters} onFilterChange={setFilters} />
            
            {filters.searchQuery || filters.genre || filters.rating ? (
              <MovieListSection
                title="Search Results"
                movies={filteredMovies}
                watchlist={watchlist}
                onAddToWatchlist={handleAddToWatchlist}
                onRemoveFromWatchlist={handleRemoveFromWatchlist}
                emptyMessage="No movies match your search criteria"
              />
            ) : (
              <>
                <MovieListSection
                  title="Recently Added"
                  description="The latest additions to our movie collection"
                  movies={recentlyAddedMovies}
                  watchlist={watchlist}
                  onAddToWatchlist={handleAddToWatchlist}
                  onRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
                
                <MovieListSection
                  title="Top Rated Movies"
                  description="Highly rated films that critics and audiences love"
                  movies={topRatedMovies}
                  watchlist={watchlist}
                  onAddToWatchlist={handleAddToWatchlist}
                  onRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
                
                <MovieListSection
                  title="All Movies"
                  movies={movies}
                  watchlist={watchlist}
                  onAddToWatchlist={handleAddToWatchlist}
                  onRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            )}
          </TabsContent>
          
          <TabsContent value="watchlist">
            <MovieListSection
              title="My Watchlist"
              description="Movies you've saved to watch later"
              movies={watchlist}
              watchlist={watchlist}
              onAddToWatchlist={handleAddToWatchlist}
              onRemoveFromWatchlist={handleRemoveFromWatchlist}
              emptyMessage="Your watchlist is empty. Add some movies to watch later!"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
