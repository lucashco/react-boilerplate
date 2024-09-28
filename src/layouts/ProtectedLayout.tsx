import {Navigate, NavLink, Outlet} from 'react-router-dom'

import {useAuthCredentials} from '@/services'

export function ProtectedLayout() {
  const {userId} = useAuthCredentials()

  if (!userId) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="h-dvh bg-slate-100">
      <nav className="flex h-14 items-center justify-between border-b border-slate-200 px-20">
        <span className="text-2xl font-bold">Bem vindo</span>
        <div className="flex gap-3">
          <NavLink to="/" className="text-xl">
            Profile
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
