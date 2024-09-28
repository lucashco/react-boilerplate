import {QueryClientProvider} from '@tanstack/react-query'
import {RouterProvider} from 'react-router-dom'

import {queryClient} from '@/infra'
import {router} from '@/router'
import {AuthCredentialsProvider} from '@/services'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthCredentialsProvider>
        <RouterProvider router={router} />
      </AuthCredentialsProvider>
    </QueryClientProvider>
  )
}

export default App
