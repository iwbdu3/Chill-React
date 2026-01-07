import { Star, Play, Check, ChevronDown } from "lucide-react";
import type { ContinueMovie } from "../../data/ContinueMovies";

interface ContinueMovieCardProps {
  movie: ContinueMovie;
}

const ContinueMovieCard = ({ movie }: ContinueMovieCardProps) => {
  return (
    <div
      className="
        group
        relative
        min-w-[300px]
        flex-shrink-0
        cursor-pointer
        transition-transform
        duration-300
        hover:scale-125
        hover:z-[999]
      "
    >
      {/* MAIN CARD */}
      <div className="relative z-10 overflow-hidden rounded-xl bg-zinc-900">

        {/* BADGE */}
        {movie.badge && (
          <span className="absolute left-3 top-3 z-20 rounded bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
            {movie.badge}
          </span>
        )}

        {/* IMAGE */}
        <img
          src={movie.image}
          alt={movie.title}
          className="h-[160px] w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* INFO */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-sm text-white">
          <span className="truncate font-medium">{movie.title}</span>
          <span className="flex items-center gap-1 text-white/80">
            <Star size={14} className="fill-white" />
            {movie.rating}/5
          </span>
        </div>
      </div>

      {/* HOVER PANEL */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-full
          z-[1000]
          opacity-0
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:pointer-events-auto
        "
      >
        <div className="rounded-b-xl bg-zinc-900 p-4 text-white shadow-2xl">

          {/* ACTIONS */}
          <div className="mb-3 flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
              <Play size={18} fill="black" />
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
              <Check size={18} />
            </button>

            <button className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
              <ChevronDown size={18} />
            </button>
          </div>

          {/* EPISODE */}
          {movie.episode && (
            <p className="text-sm font-semibold">“{movie.episode}”</p>
          )}

          {/* PROGRESS */}
          {movie.progress !== undefined && (
            <div className="mt-2 h-1 w-full rounded bg-zinc-700">
              <div
                className="h-1 rounded bg-blue-600"
                style={{ width: `${movie.progress}%` }}
              />
            </div>
          )}

          {/* GENRES */}
          {movie.genres && (
            <div className="mt-3 text-xs text-zinc-400">
              {movie.genres.join(" • ")}
            </div>
          )}

          {/* DURATION */}
          {movie.duration && (
            <div className="mt-1 text-xs text-zinc-400">
              {movie.duration}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContinueMovieCard;
