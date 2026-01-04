import { Star } from "lucide-react";
import type { ContinueMovie } from "../../data/ContinueMovies";

interface ContinueMovieCardProps {
  movie: ContinueMovie;
}

const ContinueMovieCard = ({ movie }: ContinueMovieCardProps) => {
  return (
    <div className="relative min-w-[300px] overflow-hidden rounded-xl">
      {/* Badge */}
      {movie.badge && (
        <span className="absolute left-3 top-3 z-10 rounded bg-blue-600 px-2 py-1 text-xs font-semibold">
          {movie.badge}
        </span>
      )}

      {/* Image */}
      <img
        src={movie.image}
        alt={movie.title}
        className="h-[160px] w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Info */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-sm text-white">
        <span className="font-medium truncate">{movie.title}</span>
        <span className="flex items-center gap-1 text-white/80">
          <Star size={14} className="fill-white" />
          {movie.rating}/5
        </span>
      </div>
    </div>
  );
};

export default ContinueMovieCard;
