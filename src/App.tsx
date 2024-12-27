import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Page from './Page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page" element={<Page />} />
    </Routes>
  )
}

export default App
