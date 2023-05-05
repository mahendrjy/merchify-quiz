import { Children, ReactNode } from 'react'

type NavLinkProps = {
  className?: string
}

const NavLink = ({ className = 'w-5 h-5' }: NavLinkProps) => (
  <div
    className={`cursor-pointer border border-purple-400 hover:bg-purple-200 transition-colors bg-purple-50  rounded-full flex items-center justify-center ${className}`}
  />
)

const Header = () => {
  return (
    <header className="w-full h-10 px-4 border-b flex items-center justify-between py-5">
      <NavLink />
      <div className="flex items-center gap-4">
        <NavLink className="w-5 h-5" />
        <NavLink className="w-8 h-8" />
      </div>
    </header>
  )
}

export default Header
