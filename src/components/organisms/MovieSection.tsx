import MovieCard from "../molecules/MovieCard/MovieCard"
import type { Movie } from "../molecules/MovieCard/Types"

interface MovieSectionProps {
  title: string
  movies: Movie[]
  variant?: "default" | "continue"
}

const MovieSection: React.FC<MovieSectionProps> = ({
  title,
  movies,
  variant,
}) => {
  return (
    <section className="px-6 md:px-16 mt-10">
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>

    <div className="relative">

      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            variant={variant}
          />
        ))}
      </div>

      {/* Navigation */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 hover:bg-black">
          ←
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 hover:bg-black">
          →
        </button>
    </div>
    </section>
  )
}

export default MovieSection
