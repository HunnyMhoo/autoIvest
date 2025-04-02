import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            AutoInvest Coach+
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/goals" className="text-gray-600 hover:text-primary transition-colors">
              My Goals
            </Link>
            <Link to="/rules" className="text-gray-600 hover:text-primary transition-colors">
              My Rules
            </Link>
            <Link to="/simulator" className="text-gray-600 hover:text-primary transition-colors">
              Simulator
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-primary focus:outline-none" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 