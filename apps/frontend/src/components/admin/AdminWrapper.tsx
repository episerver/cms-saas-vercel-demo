'use client'

import { AuthProvider } from './AuthContext'
import { LoginButton } from './LoginButton'
import { ImageEditPanel } from './ImageEditPanel'

export function AdminWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {children}
      <LoginButton />
      <ImageEditPanel />
    </AuthProvider>
  )
}
