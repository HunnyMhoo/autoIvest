import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-6">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn-primary">
        Return to Homepage
      </Link>
    </div>
  )
}

export default NotFoundPage 