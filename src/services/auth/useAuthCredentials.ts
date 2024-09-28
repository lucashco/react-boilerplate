import {useContext} from 'react'

import {AuthCredentialsContext} from './AuthCredentialsProvider'
import {AuthCredentialsService} from './authCredentialsTypes'

export function useAuthCredentials(): AuthCredentialsService {
  return useAuthCredentialsContext()
}

const useAuthCredentialsContext = () => {
  const context = useContext(AuthCredentialsContext)

  if (!context) {
    throw new Error('AuthCredentials must be used with AuthCredentialsProvider')
  }

  return context
}
