import React from 'react'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PrimeReactProvider } from 'primereact/api'
import { AppProvider } from './Services/ContextApi/AppContext'
import { FormDataProvider } from './Services/ContextApi/FormDataContext'
import { store } from './Store/Store'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify'
import routes from './routes'
import { useRoutes } from 'react-router-dom'

const queryClient = new QueryClient()

const App: React.FC = () => {
  const allPages = useRoutes(routes)

  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Poppins', sans-serif",
    },
  }

  return (
    <Provider store={store}>
      <PrimeReactProvider value={{ cssTransition: true }}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <FormDataProvider>
              <Toaster toastOptions={toasterOptions} />
              {allPages}
              <ToastContainer hideProgressBar autoClose={2000} position="top-right" />
            </FormDataProvider>
          </AppProvider>
        </QueryClientProvider>
      </PrimeReactProvider>
    </Provider>
  )
}

export default App
