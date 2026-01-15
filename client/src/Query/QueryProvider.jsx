import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient();
const QueryProvider = ({children}) => {
  return (
     <QueryClientProvider client={queryCleint}>
          {children}
     </QueryClientProvider>
  )
}

export default QueryProvider;