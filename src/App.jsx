import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const location = useLocation()
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
