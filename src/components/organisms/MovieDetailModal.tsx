import { X, Play, Plus, VolumeX } from "lucide-react"
import type { Movie } from "../molecules/MovieCard/Types"

interface Props {
  movie: Movie
  onClose: () => void
}

const MovieDetailModal: React.FC<Props> = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* MODAL */}
      <div className="relative z-10 w-[900px] max-w-[95%] overflow-hidden rounded-xl bg-zinc-900 text-white shadow-xl">
        
        {/* HERO IMAGE */}
        <div className="relative h-[450px]">
          <img
            src={movie.image}
            alt={movie.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent" />

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-black/60 p-2"
          >
            <X />
          </button>

          {/* ACTIONS */}
          <div className="absolute bottom-6 left-6">
            <h2 className="mb-4 text-3xl font-bold">{movie.title}</h2>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded bg-white px-6 py-2 text-black">
                <Play size={18} fill="black" /> Mulai
              </button>

              <button className="rounded-full border border-white/40 p-2">
                <Plus />
              </button>

              <button className="rounded-full border border-white/40 p-2">
                <VolumeX />
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-[2fr_1fr] gap-6 p-6 text-sm text-white/80">
          <div>
            <p className="mb-4">{movie.description}</p>
            <p className="font-semibold">Episode</p>
            {/* episode list nanti */}
          </div>

          <div>
            <p><span className="text-white">Cast:</span> Jason Sudeikis, dll</p>
            <p><span className="text-white">Genre:</span> {movie.genres?.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailModal
