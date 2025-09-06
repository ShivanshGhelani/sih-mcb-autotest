import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from './components/login-page'
import { Layout } from './components/layout'
import { Dashboard } from './components/dashboard'
import { TeamPage } from './components/team-page'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        <Route path="/team" element={
          <Layout>
            <TeamPage />
          </Layout>
        } />
        <Route path="/team/*" element={
          <Layout>
            <TeamPage />
          </Layout>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
