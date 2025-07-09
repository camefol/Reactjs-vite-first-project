import './App.css'
import { Home, Profile, About, NotFound } from './pages';
import Layout  from './components/layout/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProviderWrapper } from './providers/queryProvider';


function App() {
  return (
    <Router>
        <Layout>
        <QueryClientProviderWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </QueryClientProviderWrapper>
          </Layout>
    </Router>
  )
}

export default App
