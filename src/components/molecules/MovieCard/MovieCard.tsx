import React from "react"
import type { Movie } from "./Types"

interface MovieCardProps {
  movie: Movie
  variant?: "default" | "continue"
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  variant = "default",
}) => {
  return (
    <div className="group relative w-[230px] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:z-2 hover:scale-110">
      
      {/* Poster Container */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover"
        />

        {/* Hover Detail */}
        {variant === "continue" && (
          <div className="pointer-events-none absolute inset-0 hidden bg-black/90 p-4 text-white group-hover:block">
            
            <div className="mb-4 flex gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                ▶
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border">
                ✔
              </button>
            </div>

            {movie.episode && (
              <p className="text-sm font-semibold">"{movie.episode}"</p>
            )}

            {movie.progress !== undefined && (
              <div className="mt-2 h-1 w-full rounded bg-gray-700">
                <div
                  className="h-1 rounded bg-blue-600"
                  style={{ width: `${movie.progress}%` }}
                />
              </div>
            )}

            <div className="mt-3 text-xs text-gray-300">
              {movie.genres?.join(" • ")}
            </div>

            {movie.duration && (
              <div className="mt-2 text-xs">{movie.duration}</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieCard
