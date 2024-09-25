import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useSignInUseCase } from '@/features';

import { LoginSchema, loginSchema } from './schema';

export function LoginPage() {
  const { signIn, isLoading, isError } = useSignInUseCase();
  const { register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'johndoe@email.com',
      password: '123123123',
    },
  });

  function handleSignIn(data: LoginSchema) {
    signIn({ email: data.email, password: data.password });
  }

  return (
    <div className="flex h-full items-center justify-center">
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="w-full max-w-96 rounded-lg bg-white p-6 shadow-sm"
      >
        <h1 className="mb-4 text-center text-4xl">Login Page</h1>
        <fieldset className="mb-2">
          <label htmlFor="email" className="text-sm text-zinc-900">
            E-mail
          </label>
          <input
            id="email"
            className="w-full rounded-md border border-zinc-200 p-2"
            {...register('email')}
          />
        </fieldset>
        <fieldset className="mb-2">
          <label htmlFor="password" className="text-sm text-zinc-900">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full rounded-md border border-zinc-200 p-2"
            {...register('password')}
          />
        </fieldset>
        <button
          disabled={!formState.isValid || isLoading}
          data-isLoading={isLoading}
          data-disabled={!formState.isValid}
          className="w-full rounded-md bg-purple-600 p-2 text-white data-[isLoading=true]:animate-bounce data-[disabled=true]:bg-zinc-400"
        >
          Log In
        </button>
        {isError && (
          <span className="text-sm text-red-500">
            Erro ao enviar formulario
          </span>
        )}
      </form>
    </div>
  );
}
