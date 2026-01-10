import MovieCard from "../molecules/MovieCard/MovieCard"
import type { Movie } from "../molecules/MovieCard/Types"
import NavigationButton from "../atoms/NavigationButton"

interface MovieSectionProps {
  title: string
  movies: Movie[]
  variant?: "default" | "continue"
}

const MovieSection: React.FC<MovieSectionProps> = ({
  title,
  movies,
}) => {
  return (
    <section className="px-6 md:px-16 mt-10">
      <h2 className="mb-6 text-xl sm:text-3xl font-bold">{title}</h2>

      <div className="relative">

        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>

        {/* Navigation */}
        <NavigationButton direction="left" />
        <NavigationButton direction="right" />
      </div>
    </section>
  )
}

export default MovieSection
