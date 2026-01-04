import React from "react";
import Hero from "../../assets/images/Hero.png";
import Button from "../atoms/Button";
import { VolumeX } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${Hero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-6 pb-10 md:px-16 md:pb-16">
        <div className="w-full">
          {/* Text */}
          <div className="mb-6 max-w-2xl space-y-4">
            <h1 className="text-3xl font-bold md:text-5xl mb-6">
              Duty After School
            </h1>

            <p className="text-sm leading-relaxed text-gray-200 md:text-base">
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

              <span className="rounded-full border border-white/60 px-3 py-3 text-sm text-white/80">
                18+
              </span>
            </div>

            {/* Mute */}
            <Button
              variant="ghost"
              className="rounded-full border border-white/40"
              size="md"
            >
              <VolumeX />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
