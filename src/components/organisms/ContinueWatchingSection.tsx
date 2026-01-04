import ContinueMovieCard from "../molecules/ContinueMovieCard";
import { continueMovies } from "../../data/ContinueMovies";

const ContinueWatchingSection = () => {
  return (
    <section className="px-6 text-white md:px-16">
      <h2 className="mb-6 text-3xl font-bold">
        Melanjutkan Tonton Film
      </h2>

      <div className="relative">
        {/* Movie List */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {continueMovies.map((movie) => (
            <ContinueMovieCard key={movie.id} movie={movie} />
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
  );
};

export default ContinueWatchingSection;
