import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LaDolceVita from './pages/LaDolceVita'

const RoutesPages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/la-dolce-vita-trattoria" element={<LaDolceVita />} />
  </Routes>
)

export default RoutesPages
