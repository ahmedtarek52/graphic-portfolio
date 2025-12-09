import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="max-w-3xl mx-auto text-center py-24">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Sorry, the page you are looking for could not be found.</p>
      <div className="space-x-3">
        <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Go Home</Link>
        <Link to="/categories" className="px-4 py-2 border rounded-md">Browse Services</Link>
      </div>
    </div>
  )
}
