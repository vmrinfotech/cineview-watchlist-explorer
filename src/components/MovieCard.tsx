
import { useState } from "react";
import { Movie } from "@/types/movie";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
  isInWatchlist: boolean;
  onAddToWatchlist: (movie: Movie) => void;
  onRemoveFromWatchlist: (movieId: number) => void;
}

export function MovieCard({ 
  movie, 
  isInWatchlist, 
  onAddToWatchlist, 
  onRemoveFromWatchlist 
}: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="w-full h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative pb-[150%] overflow-hidden">
        <img 
          src={movie.poster} 
          alt={`${movie.title} poster`}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 stroke-yellow-400" />
            {movie.rating.toFixed(1)}
          </Badge>
        </div>
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        <div 
          className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <p className="text-xs text-white/80 mb-2">{movie.description}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            {movie.genres.map(genre => (
              <Badge key={genre} variant="outline" className="bg-white/10 text-white text-xs">
                {genre}
              </Badge>
            ))}
          </div>
          <Button 
            variant={isInWatchlist ? "destructive" : "default"}
            size="sm"
            className="w-full"
            onClick={() => {
              if (isInWatchlist) {
                onRemoveFromWatchlist(movie.id);
              } else {
                onAddToWatchlist(movie);
              }
            }}
          >
            {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </Button>
        </div>
      </div>
      <CardHeader className="pb-2 pt-3">
        <h3 className="font-bold text-lg line-clamp-1">{movie.title}</h3>
        <p className="text-sm text-muted-foreground">{movie.year} • {movie.director}</p>
      </CardHeader>
    </Card>
  );
}
