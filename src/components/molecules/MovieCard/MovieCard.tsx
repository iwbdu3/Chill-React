import React from "react"
import type { Movie } from "./Types"
import Badge from "../../atoms/Badge"
import { Play, Check, ChevronDown } from "lucide-react"

interface MovieCardProps {
  movie: Movie
  variant?: "default" | "continue"
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  variant = "default",
}) => {
  return (
    <div
      className="
        group
        relative
        w-[150px]
        sm:w-[230px]
        flex-shrink-0
      "
    >
      {/* ================= STATIC CARD ================= */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-zinc-900">
        
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

      {/* ================= HOVER CARD ================= */}
      {variant === "continue" && (
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-40px]
            z-[9999]
            w-[260px]
            -translate-x-1/2
            opacity-0
            scale-95
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:scale-100
            group-hover:pointer-events-auto
          "
        >
          <div className="overflow-hidden rounded-xl bg-zinc-900 shadow-2xl">
            
            {/* Hover Image */}
            <img
              src={movie.image}
              alt={movie.title}
              className="h-[320px] w-full object-cover"
            />

            {/* Hover Content */}
            <div className="p-4 text-white">
              
              {/* Actions */}
              <div className="mb-3 flex gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                  <Play size={18} fill="black" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
                  <Check size={18} />
                </button>
                <button className="ml-auto h-10 w-10 rounded-full border border-white/40 flex items-center justify-center">
                <ChevronDown size={18} />
                </button>
              </div>

              <div className="flex gap-4">
                {movie.ageRating && (
                  <p className="text-sm text-white/70 font-semibold bg-gray-600 border px-2 py-1 rounded-full border-gray-600">
                    {movie.ageRating}
                  </p>
                )}

                {movie.duration && (
                  <div className="mt-1 text-sm text-zinc-400">
                    {movie.duration}
                  </div>
                )}
              </div>
 
              {movie.genres && (
                <div className="mt-3 text-xs text-zinc-400 justify-between">
                  {movie.genres.join(" • ")}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieCard
