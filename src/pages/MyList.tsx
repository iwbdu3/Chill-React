import React from "react"
import MovieCard from "../components/molecules/MovieCard/MovieCard"
import { myListMovies } from "../data/MyListMovies"
import Navbar from "../components/organisms/Navbar"
import Footer from "../components/organisms/footer/FooterSection"

const MyList: React.FC = () => {
  return (
    <>
        <main className="text-white bg-black min-h-screen">
            <Navbar />

            {/* CONTENT */}
            <section className="px-6 pt-28 sm:px-16">
                
                {/* Title */}
                <h1 className="mb-8 text-2xl font-bold sm:text-3xl">
                Daftar Saya
                </h1>

                {/* Movie */}
                <div className="flex flex-wrap gap-4">
                    {myListMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    </>  
  )
}

export default MyList
