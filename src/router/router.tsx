import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { HomeLayout } from '@/layouts';
import { ProtectedLayout } from '@/layouts/ProtectedLayout';
import { HomePage, LoginPage, ProfilePage, RegisterPage } from '@/pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </>,
  ),
);
