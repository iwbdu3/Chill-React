import React, { useState } from "react"
import { genreColumns, helpLinks } from "./FooterData"
import Logo from "../../../assets/images/Logo.png"
import { ChevronRight } from "lucide-react"

const Footer: React.FC = () => {
  const [open, setOpen] = useState<null | "genre" | "help">(null)

  return (
    <footer className="mt-12 border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* ================= BRAND ================= */}
        <div className="mb-10 sm:hidden">
          <img src={Logo} alt="Logo" className="mb-4 w-[120px]" />
          <p className="text-sm text-gray-400">
            ©2023 Chill All Rights Reserved
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="space-y-6 md:hidden">

          {/* Genre */}
          <button
            onClick={() => setOpen(open === "genre" ? null : "genre")}
            className="flex w-full items-center justify-between text-lg"
          >
            Genre
            <ChevronRight
              className={`transition-transform ${
                open === "genre" ? "rotate-90" : ""
              }`}
            />
          </button>

          {open === "genre" && (
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              {genreColumns.flat().map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}

          {/* Bantuan */}
          <button
            onClick={() => setOpen(open === "help" ? null : "help")}
            className="flex w-full items-center justify-between text-lg"
          >
            Bantuan
            <ChevronRight
              className={`transition-transform ${
                open === "help" ? "rotate-90" : ""
              }`}
            />
          </button>

          {open === "help" && (
            <ul className="space-y-2 text-sm text-gray-400">
              {helpLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden sm:grid sm:grid-cols-4 sm:gap-12">

          {/* Brand */}
          <div>
            <img src={Logo} alt="Logo" className="mb-4 w-[120px]" />
            <p className="text-sm text-gray-400">
              ©2023 Chill All Rights Reserved.
            </p>
          </div>

          {/* Genre */}
          <div className="sm:col-span-2">
            <h4 className="mb-4 font-semibold">Genre</h4>
            <div className="grid grid-cols-4 gap-x-10 gap-y-2 text-sm text-gray-300">
              {genreColumns.map((column, idx) => (
                <ul key={idx} className="space-y-2">
                  {column.map((item) => (
                    <li key={item} className="hover:text-white cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Bantuan */}
          <div>
            <h4 className="mb-4 font-semibold">Bantuan</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {helpLinks.map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
