import { Star, Play, Check, ChevronDown } from "lucide-react";
import type { ContinueMovie } from "../../data/ContinueMovies";

interface ContinueMovieCardProps {
  movie: ContinueMovie;
}

const ContinueMovieCard = ({ movie }: ContinueMovieCardProps) => {
  return (
    <div className="group relative w-[300px] flex-shrink-0">
      
      {/* STATIC CARD */}
      <div className="relative h-[160px] overflow-hidden rounded-xl bg-zinc-900">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-3 left-3 right-3 flex justify-between text-sm text-white">
          <span className="truncate font-medium">{movie.title}</span>
          <span className="flex items-center gap-1 text-white/80">
            <Star size={14} className="fill-white" />
            {movie.rating}/5
          </span>
        </div>
      </div>

      {/* HOVER OVERLAY (OUT OF FLOW) */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-40px]
          z-[9999]
          w-[340px]
          -translate-x-1/2
          opacity-0
          scale-95
          transition-all
          duration-300
          hover:cursor-pointer
          group-hover:opacity-100
          group-hover:scale-100
          group-hover:pointer-events-auto
        "
      >
        <div className="overflow-hidden rounded-xl bg-zinc-900 shadow-2xl">
          <img
            src={movie.image}
            alt={movie.title}
            className="h-[180px] w-full object-cover"
          />

          <div className="p-4 text-white">
            {/* ACTIONS */}
            <div className="mb-3 flex items-center gap-3">
              <button className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center">
                <Play size={18} fill="black" />
              </button>

              <button className="h-10 w-10 rounded-full border border-white/40 flex items-center justify-center">
                <Check size={18} />
              </button>

              <button className="ml-auto h-10 w-10 rounded-full border border-white/40 flex items-center justify-center">
                <ChevronDown size={18} />
              </button>
            </div>

            {movie.episode && (
              <p className="text-sm font-semibold">“{movie.episode}”</p>
            )}

            {movie.progress !== undefined && (
              <div className="mt-2 h-1 w-full rounded bg-zinc-700">
                <div
                  className="h-1 rounded bg-blue-600"
                  style={{ width: `${movie.progress}%` }}
                />
              </div>
            )}

            {movie.genres && (
              <div className="mt-3 text-xs text-zinc-400">
                {movie.genres.join(" • ")}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContinueMovieCard;
