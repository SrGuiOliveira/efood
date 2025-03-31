import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/styles'
import RoutesPages from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesPages />
      <Footer />
    </BrowserRouter>
  )
}

export default App
