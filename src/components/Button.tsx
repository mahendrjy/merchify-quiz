type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
  className?: string
}

const Button = ({
  onClick,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center bg-purple-800 text-white font-semibold py-2 mx-auto mt-6 px-8 rounded-full hover:bg-purple-600 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
