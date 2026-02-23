'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

type AuthState = {
  isAuthenticated: boolean
  email: string | null
  isLoading: boolean
}

type AuthContextType = AuthState & {
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
    email: null,
    isLoading: true,
  })

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/me')
      const data = await res.json()
      setState({
        isAuthenticated: data.authenticated,
        email: data.email || null,
        isLoading: false,
      })
    } catch {
      setState({ isAuthenticated: false, email: null, isLoading: false })
    }
  }, [])

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (data.success) {
        setState({ isAuthenticated: true, email, isLoading: false })
        return true
      }
      return false
    } catch {
      return false
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
    } finally {
      setState({ isAuthenticated: false, email: null, isLoading: false })
    }
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <AuthContext.Provider value={{ ...state, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
