import Navbar from '../components/organisms/Navbar'
import HeroSection from '../components/organisms/HeroSection'
import ContinueWatchingSection from '../components/organisms/ContinueWatchingSection'
import MovieSection from '../components/organisms/MovieSection'
import { topRatingMovies as topRatingMoviess } from '../data/TopRatingMovies'
import { trendingMovies } from '../data/TrendingMovies'
import FooterSection from '../components/organisms/footer/FooterSection'

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="text-white bg-black min-h-screen">
      <HeroSection />

      <ContinueWatchingSection />

      <MovieSection
        title="Top Rating Film dan Series Hari Ini"
        movies={topRatingMoviess}
        variant="continue"
      />

      <MovieSection
        title="Film Trending"
        movies={trendingMovies}
        variant="continue"
      />

      <MovieSection
        title="Rilis Baru"
        movies={trendingMovies}
        variant="continue"
      />

      <FooterSection />
      </main>
    </>
  )
}

export default Home
