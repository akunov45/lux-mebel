import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app/App'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')
createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
