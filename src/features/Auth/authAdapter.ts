import {userAdapter} from '../User/userAdapter'
import {AuthCredentials, AuthCredentialsAPI} from './authTypes'

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI
): AuthCredentials {
  return {
    token: authCredentialsAPI.auth.token,
    refreshToken: authCredentialsAPI.auth.refreshToken,
    tokenExpireAt: authCredentialsAPI.auth.expire_at,
    user: userAdapter.toUser(authCredentialsAPI.user),
  }
}

export const authAdapter = {
  toAuthCredentials,
}
