import MovieCard from "../molecules/MovieCard/MovieCard"
import { continueMovies } from "../../data/ContinueMovies"
import NavigationButton from "../atoms/NavigationButton"

const ContinueWatchingSection = () => {
  return (
    <section className="relative mt-10 px-6 md:px-16 text-white">
      <h2 className="mb-6 text-xl sm:text-3xl font-bold">
        Melanjutkan Tonton Film
      </h2>

      {/* FIXED HEIGHT */}
      <div className="relative -mx-6 h-[200px] overflow-visible">
        <div className="flex h-full items-start gap-4 overflow-x-auto no-scrollbar px-6">
          {continueMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              variant="continue"
            />
          ))}
        </div>

        <NavigationButton direction="left" />
        <NavigationButton direction="right" />
      </div>
    </section>
  )
}

export default ContinueWatchingSection
