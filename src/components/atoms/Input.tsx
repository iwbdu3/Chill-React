interface InputProps {
  type: string
  placeholder: string
}

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 border rounded"
    />
  )
}

export default Input
