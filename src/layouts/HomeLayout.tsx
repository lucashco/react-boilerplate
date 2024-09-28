import {Navigate, NavLink, Outlet} from 'react-router-dom'

import {useAuthCredentials} from '@/services'

export function HomeLayout() {
  const {userId} = useAuthCredentials()

  if (userId) {
    return <Navigate to="/dashboard/profile" replace />
  }

  return (
    <div className="h-dvh bg-zinc-100">
      <nav className="flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-20">
        <span className="text-4xl font-bold">LOGO</span>
        <div className="flex gap-3">
          <NavLink to="/" className="text-xl">
            Home
          </NavLink>
          <NavLink to="/login" className="text-xl text-purple-600">
            Login
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
