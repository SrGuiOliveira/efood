import { BrowserRouter } from 'react-router-dom'
import RoutesPages from './routes'

import { GlobalStyle } from './styles/styles'
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
