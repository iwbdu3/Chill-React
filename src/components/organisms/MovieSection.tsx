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
  variant = "default",
}) => {
  const isContinue = variant === "continue"

  return (
    <section className={`mt-10 px-6 md:px-16 text-white`}>
      <h2 className="mb-6 text-xl font-bold sm:text-3xl">
        {title}
      </h2>

      {/* WRAPPER */}
      <div
        className={`
          relative -mx-6
          ${isContinue ? "h-[200px]" : ""}
        `}
      >
        <div
          className={`
            flex gap-4 overflow-x-auto no-scrollbar px-6
            ${isContinue ? "h-full items-start" : ""}
          `}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              variant={variant}
            />
          ))}
        </div>

        {/* NAVIGATION */}
        <NavigationButton direction="left" />
        <NavigationButton direction="right" />
      </div>
    </section>
  )
}

export default MovieSection
