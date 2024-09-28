import {api} from '@/api'

import {authAdapter} from './authAdapter'
import {authApi} from './authApi'
import {AuthCredentials, SignUpData} from './authTypes'

async function signIn(
  email: string,
  password: string
): Promise<AuthCredentials> {
  const authCredentialsAPI = await authApi.signIn(email, password)

  return authAdapter.toAuthCredentials(authCredentialsAPI)
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut()

  return message
}

async function singUp(signUpData: SignUpData): Promise<void> {
  await authApi.singUp(signUpData)
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

function removeToken() {
  api.defaults.headers.common.Authorization = null
}

async function authenticateByRefreshToken(
  refreshToken: string
): Promise<AuthCredentials> {
  const acAPI = await authApi.refreshToken(refreshToken)

  return authAdapter.toAuthCredentials(acAPI)
}

export const authService = {
  signIn,
  signOut,
  singUp,
  updateToken,
  removeToken,
  authenticateByRefreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
}
