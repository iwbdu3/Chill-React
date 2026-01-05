import React from "react";
import Hero from "../../assets/images/Hero.png";
import Button from "../atoms/Button";
import { VolumeX } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full aspect-[16/9] sm:h-[70vh] bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${Hero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-6 pb-2 sm:px-16 sm:pb-16">
        <div className="w-full">
          {/* Text */}
          <div className="mb-2 sm:mb-6 max-w-2xl space-y-4">
            <h1 className="text-2xl font-bold sm:text-6xl mb-2 sm:mb-6">
              Duty After School
            </h1>

            <p className="text-xs leading-relaxed text-gray-200 sm:text-base line-clamp-2 sm:line-clamp-none">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam
              keputusasaan, Departemen Pertahanan mulai merekrut lebih
              banyak tentara, termasuk siswa sekolah menengah. Mereka
              pun segera menjadi pejuang garis depan dalam perang.
            </p>
          </div>

          {/* Action */}
          <div className="flex items-center justify-between">
            {/* Left actions */}
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="md">
                Mulai
              </Button>

              <Button variant="outline" size="md">
                Selengkapnya
              </Button>

              <span className="rounded-full border border-white/60 sm:px-3 px-1.5 sm:py-3 py-1.5 text-xs sm:text-sm text-white/80">
                18+
              </span>
            </div>

            {/* Mute */}
            <Button
              variant="ghost"
              className="rounded-full border border-white/40"
              size="md"
            >
              <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
