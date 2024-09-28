import {useMutation} from '@tanstack/react-query'

import {MutationOptions} from '@/infra'
import {useAuthCredentials} from '@/services'

import {authService} from '../authService'
import {AuthCredentials} from '../authTypes'

interface Variables {
  email: string
  password: string
}

export function useSignInUseCase(options?: MutationOptions<AuthCredentials>) {
  const {saveCredentials} = useAuthCredentials()

  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onError: (error) => {
      if (options?.onError) {
        options.onError(error.message)
      }
    },
    onSuccess: (authCredentials) => {
      if (options?.onSuccess) {
        options.onSuccess(authCredentials)
      }
      saveCredentials(authCredentials)
    },
  })

  return {
    signIn: mutation.mutate,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  }
}
