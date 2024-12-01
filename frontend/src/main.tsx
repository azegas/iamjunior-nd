import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '@/App';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('Root element with id "root" not found in index.html');
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>,
  );
}
