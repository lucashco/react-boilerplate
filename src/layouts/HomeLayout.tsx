import { Navigate, NavLink, Outlet } from 'react-router-dom';

import { useAuthCredentials } from '@/services';

export function HomeLayout() {
  const { userId } = useAuthCredentials();

  if (userId) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  return (
    <div className="h-dvh bg-slate-100">
      <nav className="h-14 flex items-center justify-between border-b border-slate-200 px-20">
        <span className="text-4xl font-bold">LOGO</span>
        <div className="flex gap-3">
          <NavLink to="/" className="text-xl">
            Home
          </NavLink>
          <NavLink to="/login" className="text-xl text-cyan-500">
            Login
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
