import Navbar from '../components/organisms/Navbar'
import HeroSection from '../components/organisms/HeroSection'
import MovieSection from '../components/organisms/MovieSection'
import { topRatingMovies as topRatingMoviess } from '../data/TopRatingMovies'
import { trendingMovies } from '../data/TrendingMovies'
import FooterSection from '../components/organisms/footer/FooterSection'
import { continueMovies } from '../data/ContinueMovies'
import { seriesFromChills } from '../data/SeriesFromChill'

const Film = () => {
  return (
    <>
      <main className="text-white bg-black min-h-screen">

        <Navbar />
        

        <HeroSection variant="withGenre" />

        <MovieSection
          title="Melanjutkan Tonton Film"
          movies={continueMovies}
          variant="continue"
        />

        <MovieSection
          title="Series Persembahan Chill"
          movies={seriesFromChills}
        />

        <MovieSection
          title="Top Rating Film dan Series Hari Ini"
          movies={topRatingMoviess}
        />

        <MovieSection
          title="Film Trending"
          movies={trendingMovies}
        />

        <MovieSection
          title="Rilis Baru"
          movies={trendingMovies}
        />

        <FooterSection />
      </main>
    </>
  )
}

export default Film
