import { AxiosRequestConfig } from 'axios';

import { api } from '@/api';

import { UserAPI } from '../User';
import { AuthCredentialsAPI, SignUpDataAPI } from './authTypes';

const REFRESH_TOKEN_URL = 'auth/refresh-token';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  // const response = await api.post<AuthCredentialsAPI>('auth/login', {
  //   email: email,
  //   password: password,
  // });

  // return response.data;

  // This is just a test
  // Change it for a real functionality

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'johndoe@email.com' && password === '123123123') {
        resolve({
          auth: {
            type: 'type',
            token: 'token',
            refreshToken: 'refreshToken',
            expire_at: 'expire_at',
          },
          user: {
            id: 1,
            email: 'johndoe@email.com',
          },
        });
      }

      reject('Invalid user');
    }, 5000);
  });
}

async function signOut(): Promise<string> {
  const response = await api.get('auth/profile/logout');

  return response.data;
}

async function singUp(data: SignUpDataAPI): Promise<UserAPI> {
  const response = await api.post<UserAPI>('auth/register', data);
  return response.data;
}

async function refreshToken(token: string): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>(REFRESH_TOKEN_URL, {
    refreshToken: token,
  });

  return response.data;
}

function isRefreshTokenRequest(request: AxiosRequestConfig) {
  const url = request.url;

  return url === REFRESH_TOKEN_URL;
}

export const authApi = {
  signIn,
  signOut,
  singUp,
  refreshToken,
  isRefreshTokenRequest,
};
