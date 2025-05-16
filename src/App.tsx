import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RoutesPages from './routes'

import { GlobalStyle } from './styles/styles'
import Footer from './components/Footer'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesPages />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
