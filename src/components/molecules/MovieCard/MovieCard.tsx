import React from "react"
import { Play, Check, ChevronDown } from "lucide-react"
import type { Movie } from "./Types"
import Badge from "../../atoms/Badge"

interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div
      className="
        group
        relative
        w-[150px]
        sm:w-[230px]
        flex-shrink-0
        transition-all
        duration-500
        hover:z-[999]
      "
    >
      {/* CARD WRAPPER */}
      <div
        className="
          relative
          overflow-visible
          transition-all
          duration-500
          group-hover:scale-125
          group-hover:-translate-y-8
        "
      >
        {/* POSTER */}
        <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-zinc-900">

          {/* Badge */}
          {movie.badge && (
            <Badge
              text={movie.badge}
              variant={
                movie.badge.toLowerCase().includes("top")
                  ? "danger"
                  : "primary"
              }
            />
          )}

          <img
            src={movie.image}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* HOVER PANEL */}
        <div
          className="
            absolute
            left-0
            right-0
            top-full
            z-50
            h-0
            overflow-hidden
            rounded-b-lg
            bg-zinc-900
            opacity-0
            transition-all
            duration-500
            delay-150
            group-hover:h-[160px]
            group-hover:opacity-100
          "
        >
          <div className="p-4 text-white">

            {/* ACTION BUTTONS */}
            <div className="mb-3 flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                <Play size={16} fill="black" />
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40">
                <Check size={16} />
              </button>

              <button className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/40">
                <ChevronDown size={16} />
              </button>
            </div>

            {/* META */}
            <div className="mb-1 flex items-center gap-2 text-xs text-white/80">
              {movie.ageRating && (
                <span className="rounded-full border border-white/40 px-2 py-1 text-[10px] font-semibold">
                  {movie.ageRating}
                </span>
              )}

              {movie.duration && <span>{movie.duration}</span>}
            </div>


            {/* GENRES */}
            {movie.genres && (
              <div className="text-xs text-zinc-400">
                {movie.genres.join(" • ")}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
