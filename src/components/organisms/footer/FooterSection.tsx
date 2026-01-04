import React from "react"
import { genreColumns, helpLinks } from "./FooterData"
import Logo from "../../../assets/images/logo.png"

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 items-center">
          
          {/* Brand */}
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="mb-4 w-[120px]"
            />
            <p className="text-sm text-gray-400">
              ©2023 Chill All Rights Reserved.
            </p>
          </div>

          {/* Genre */}
          <div className="md:col-span-2">
            <h4 className="mb-4 font-semibold text-white">Genre</h4>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-4">
              {genreColumns.map((column, idx) => (
                <ul key={idx} className="space-y-2 text-sm text-gray-300">
                  {column.map((item) => (
                    <li
                      key={item}
                      className="cursor-pointer hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Bantuan */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Bantuan</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {helpLinks.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-white"
                >
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
