import { RouterProvider } from 'react-router-dom';

import { router } from '@/router';

import { AuthCredentialsProvider } from './services';

function App() {
  return (
    <AuthCredentialsProvider>
      <RouterProvider router={router} />
    </AuthCredentialsProvider>
  );
}

export default App;
