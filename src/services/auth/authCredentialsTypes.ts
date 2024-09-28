import {AuthCredentials} from '@/features'

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null
  userId: number | null
  saveCredentials: (ac: AuthCredentials) => Promise<void>
  removeCredentials: () => Promise<void>
  isLoading: boolean
}
