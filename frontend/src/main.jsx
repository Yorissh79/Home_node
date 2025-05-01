import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { RouterProvider } from 'react-router'
import { router } from './router/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
