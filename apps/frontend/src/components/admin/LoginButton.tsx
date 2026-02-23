'use client'

import { useState } from 'react'
import { useAuth } from './AuthContext'

export function LoginButton() {
  const { isAuthenticated, email, isLoading, login, logout } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const [formEmail, setFormEmail] = useState('')
  const [formPassword, setFormPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (isLoading) {
    return null
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const success = await login(formEmail, formPassword)

      if (success) {
        setShowModal(false)
        setFormEmail('')
        setFormPassword('')
      } else {
        setError('Invalid email or password')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid email or password')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLogout = async () => {
    await logout()
  }

  if (isAuthenticated) {
    return (
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 bg-white rounded-lg shadow-lg px-4 py-2 border border-gray-200">
        <span className="text-sm text-gray-600">
          Logged in as <strong>{email}</strong>
        </span>
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:text-red-700 font-medium"
        >
          Logout
        </button>
      </div>
    )
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-4 right-4 z-50 bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100 border border-blue-600 text-sm font-medium"
      >
        Admin Login
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-4">
            <h2 className="text-xl font-bold mb-4">Admin Login</h2>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formEmail}
                  onChange={e => setFormEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={formPassword}
                  onChange={e => setFormPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                  {error}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 border border-blue-600 disabled:opacity-50"
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false)
                    setError('')
                  }}
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
