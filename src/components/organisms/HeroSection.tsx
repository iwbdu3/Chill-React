import React, { useState } from "react"
import Hero from "../../assets/images/Hero.png"
import Button from "../atoms/Button"
import { VolumeX, ChevronDown } from "lucide-react"

interface HeroSectionProps {
  variant?: "default" | "withGenre"
}

const GENRES_LEFT = [
  "Aksi",
  "Anak-anak",
  "Anime",
  "Britania",
  "Drama",
  "Fantasi Ilmiah & Fantasi",
  "Kejahatan",
]

const GENRES_RIGHT = [
  "KDrama",
  "Komedi",
  "Petualangan",
  "Perang",
  "Romantis",
  "Sains & Alam",
  "Thriller",
]

const HeroSection: React.FC<HeroSectionProps> = ({
  variant = "default",
}) => {
  const [open, setOpen] = useState(false)
  const showGenre = variant === "withGenre"

  return (
    <section
      className="relative w-full aspect-[16/9] sm:h-[70vh] bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* VOLUME BUTTON – POJOK KANAN */}
      <Button
        variant="ghost"
        size="md"
        className="absolute bottom-2 right-6 z-10 rounded-full border border-white/40 bg-black/40 hover:bg-black/60 sm:bottom-14 sm:right-16 text-xs px-3 py-1.5 sm:px-6 sm:py-3"
      >
        <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-6 pb-2 sm:px-16 sm:pb-16">
        <div className="w-full max-w-2xl">
          {/* GENRE */}
          {showGenre && (
            <div className="relative mb-4 w-fit">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-md bg-black/70 px-4 py-2 text-sm font-medium hover:bg-black/80"
              >
                Genre
                <ChevronDown className="h-4 w-4" />
              </button>

              {open && (
                <div className="absolute left-0 top-full mt-2 w-[220px] sm:w-[360px] rounded-md bg-[#1f1f1f] p-4 shadow-lg">
                  <div className="grid grid-cols-2 gap-x-2 sm:gap-x-8 gap-y-2 text-xs sm:text-sm text-gray-200">
                    <div className="space-y-2">
                      {GENRES_LEFT.map((genre) => (
                        <p
                          key={genre}
                          className="cursor-pointer hover:text-white"
                        >
                          {genre}
                        </p>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {GENRES_RIGHT.map((genre) => (
                        <p
                          key={genre}
                          className="cursor-pointer hover:text-white"
                        >
                          {genre}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TEXT */}
          <div className="mb-4 space-y-4">
            <h1 className="text-2xl font-bold sm:text-6xl">
              Duty After School
            </h1>

            <p className="text-xs leading-relaxed text-gray-200 sm:text-base line-clamp-2 sm:line-clamp-none">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam
              keputusasaan, Departemen Pertahanan mulai merekrut lebih
              banyak tentara, termasuk siswa sekolah menengah.
            </p>
          </div>

          {/* ACTION BUTTON */}
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="md">
              Mulai
            </Button>

            <Button variant="outline" size="md">
              Selengkapnya
            </Button>

            <span className="rounded-full border border-white/60 px-1.5 py-1.5 sm:px-3 sm:py-3 text-xs sm:text-sm text-white/80">
              18+
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
