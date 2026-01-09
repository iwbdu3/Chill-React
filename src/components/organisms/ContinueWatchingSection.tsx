import ContinueMovieCard from "../molecules/ContinueMovieCard";
import { continueMovies } from "../../data/ContinueMovies";
import NavigationButton from "../atoms/NavigationButton";

const ContinueWatchingSection = () => {
  return (
    <section className="relative mt-10 px-6 text-white md:px-16">
      <h2 className="mb-6 text-xl sm:text-3xl font-bold">
        Melanjutkan Tonton Film
      </h2>

      {/* FIXED HEIGHT WRAPPER */}
      <div className="relative -mx-6 h-[200px] overflow-visible">
        <div
          className="
            flex
            gap-4
            overflow-x-auto
            overflow-y-hidden
            no-scrollbar
            px-6
            h-full
            items-start
          "
        >
          {continueMovies.map((movie) => (
            <ContinueMovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* NAVIGATION BUTTONS */}
        <NavigationButton direction="left" />
        <NavigationButton direction="right" />
      </div>
    </section>
  );
};


export default ContinueWatchingSection;
