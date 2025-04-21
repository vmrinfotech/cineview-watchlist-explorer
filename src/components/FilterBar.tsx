
import { FilterOptions } from "@/types/movie";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Filter, Search } from "lucide-react";
import { getAllGenres, getRatingOptions } from "@/data/movies";

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  const genres = getAllGenres();
  const ratings = getRatingOptions();

  const handleSearchFieldChange = (field: "title" | "director" | "actor" | null) => {
    onFilterChange({
      ...filters,
      searchField: field
    });
  };

  return (
    <div className="w-full p-4 bg-card rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Search input */}
        <div className="md:col-span-3 flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search movies..."
                className="pl-8"
                value={filters.searchQuery}
                onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  className={filters.searchField === null ? "bg-accent/20" : ""}
                  onClick={() => handleSearchFieldChange(null)}
                >
                  All Fields
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={filters.searchField === "title" ? "bg-accent/20" : ""}
                  onClick={() => handleSearchFieldChange("title")}
                >
                  Title
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={filters.searchField === "director" ? "bg-accent/20" : ""}
                  onClick={() => handleSearchFieldChange("director")}
                >
                  Director
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={filters.searchField === "actor" ? "bg-accent/20" : ""}
                  onClick={() => handleSearchFieldChange("actor")}
                >
                  Actor
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-xs text-muted-foreground">
            Search by: {filters.searchField ? filters.searchField : "all fields"}
          </div>
        </div>

        {/* Filters for genre and rating */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="genre">Genre</Label>
            <Select
              value={filters.genre || ""}
              onValueChange={(value) => 
                onFilterChange({ ...filters, genre: value === "" ? null : value })
              }
            >
              <SelectTrigger id="genre">
                <SelectValue placeholder="All Genres" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Genres</SelectItem>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="rating">Min Rating</Label>
            <Select
              value={filters.rating?.toString() || ""}
              onValueChange={(value) => 
                onFilterChange({ ...filters, rating: value === "" ? null : Number(value) })
              }
            >
              <SelectTrigger id="rating">
                <SelectValue placeholder="Any Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Rating</SelectItem>
                {ratings.map((rating) => (
                  <SelectItem key={rating} value={rating.toString()}>
                    {rating}+ Stars
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
