import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import User from '../../assets/images/user.png'
import { useNavigate } from "react-router-dom"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  const closeDropdown = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("token") // contoh
    closeDropdown()
    navigate("/login")
  }

  return (
    <nav className="w-full bg-black text-white px-10 py-6 fixed top-0 left-0 z-20">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo & Menu */}
        <div className="flex items-center gap-12">
          <Link to="/">
            <img
              src={Logo}
              alt="Chill Logo"
              className="h-12 object-contain"
            />
          </Link>

          <ul className="hidden md:flex gap-12 font-bold text-lg">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Series
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-300">
                Film
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-300">
                Daftar Saya
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Dropdown */}
        <div className="relative hidden md:block text-lg font-bold z-10">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 hover:text-gray-300 focus:outline-none"
          >
            <img src={User} alt="" className="h-8 w-8 rounded-full" />
            <span className="text-sm">▾</span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-3 w-48 rounded-md bg-gray-800 shadow-lg overflow-hidden">
              <Link
                to="/"
                onClick={closeDropdown}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Profil Saya
              </Link>
              <Link
                to="/"
                onClick={closeDropdown}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Ubah Premium
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left hover:bg-gray-700"
              >
                Keluar
              </button>

            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
