import React from "react"
import Logo from "../assets/images/Logo.png"
import Bg from "../assets/images/Cinema.jpg"
import { useNavigate } from "react-router-dom"
import InputField from "../components/molecules/InputField"
import { EyeOff } from "lucide-react"
import Button from "../components/atoms/Button"

const Login: React.FC = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.removeItem("token") // contoh
    navigate("/")
  }
  
  const handleRegister = () => {
    localStorage.removeItem("token") // contoh
    navigate("/register")
  }

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white/10 p-6 sm:p-8 backdrop-blur-xl text-white shadow-2xl">
          
          {/* Logo */}
          <div className="mb-2 sm:mb-4 flex justify-center">
            <img src={Logo} alt="Chill" className="h-12 sm:h-16" />
          </div>

          {/* Title */}
          <div className="mb-2 sm:mb-4 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold">Masuk</h2>
          <p className="text-sm text-gray-300">
            Selamat datang kembali!
          </p>
          </div>

          {/* Form */}
          <form className="space-y-3 sm:space-y-4">

            <InputField
              label="Username"
              placeholder="Masukkan username"
            />

            <InputField
              label="Kata Sandi"
              type="password"
              placeholder="Masukkan kata sandi"
              icon={<EyeOff size={18} />}
            />

            {/* Links */}
            <div className="flex justify-between text-xs sm:text-sm text-gray-300">
              <span>
                Belum punya akun?{" "}
                <button
                  type="button"
                  onClick={handleRegister}
                  className="text-white hover:underline"
                >
                  Daftar
                </button>
              </span>
              <button className="hover:underline">
                Lupa kata sandi?
              </button>
            </div>


            {/* Submit */}
            <Button
                onClick={handleLogin}
                className="w-full flex items-center justify-center"
                variant="dark"
                size="sm"
              >
                Masuk
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-3 text-gray-400 text-xs sm:text-sm">
                <div className="h-px flex-1 bg-white/20" />
                Atau
                <div className="h-px flex-1 bg-white/20" />
              </div>

              {/* Google Login */}
              <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full flex items-center justify-center gap-3 border border-white/20"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-5 w-5"
                />
                Masuk dengan Google
              </Button>
          </form>   
        </div>
      </div>
    </div>
  )
}

export default Login
