import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalStyle } from './styles/styles'
import RoutesPages from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <RoutesPages />
      <Footer />
    </BrowserRouter>
  )
}

export default App
