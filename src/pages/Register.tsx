import { EyeOff } from "lucide-react"
import { useNavigate } from "react-router-dom"
import InputField from "../components/molecules/InputField"
import Bg from "../assets/images/Register.jpg"
import Logo from "../assets/images/Logo.png"
import Button from "../components/atoms/Button"

export default function Register() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white/10 p-6 sm:p-8 backdrop-blur-xl text-white shadow-2xl">

          {/* Logo */}
          <div className="mb-2 sm:mb-4 flex justify-center">
            <img src={Logo} alt="Chill Logo" className="h-12 sm:h-16" />
          </div>

          {/* Title */}
          <div className="mb-2 sm:mb-4 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">Daftar</h2>
            <p className="text-sm text-gray-300">Selamat datang!</p>
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

            <InputField
              label="Konfirmasi Kata Sandi"
              type="password"
              placeholder="Masukkan kata sandi"
              icon={<EyeOff size={18} />}
            />

            <p className="text-xs sm:text-sm text-gray-300">
              Sudah punya akun?{" "}
              <button
                type="button"
                onClick={handleLogin}
                className="text-white underline hover:opacity-80"
              >
                Masuk
              </button>
            </p>

            {/* Submit */}
            <Button
              className="w-full flex items-center justify-center"
              variant="dark"
              size="sm"
            >
              Daftar
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3 text-gray-400 text-xs sm:text-sm">
              <div className="h-px flex-1 bg-white/20" />
              Atau
              <div className="h-px flex-1 bg-white/20" />
            </div>

            {/* Google */}
            <Button
              variant="ghost" 
                  size="sm" 
                  className="w-full flex items-center justify-center gap-3 border border-white/20"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Daftar dengan Google
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
