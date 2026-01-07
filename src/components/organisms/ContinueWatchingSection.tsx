import ContinueMovieCard from "../molecules/ContinueMovieCard";
import { continueMovies } from "../../data/ContinueMovies";
import NavigationButton from "../atoms/NavigationButton";

const ContinueWatchingSection = () => {
  return (
    <section className="mt-6 px-6 text-white md:px-16">
      <h2 className="mb-6 text-xl sm:text-3xl font-bold">
        Melanjutkan Tonton Film
      </h2>

      <div className="relative -mx-6 overflow-visible">
        {/* Movie List */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 py-10">
          {continueMovies.map((movie) => (
            <ContinueMovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Navigation */}
        <NavigationButton direction="left" />
        <NavigationButton direction="right" />
      </div>
    </section>
  );
};

export default ContinueWatchingSection;
