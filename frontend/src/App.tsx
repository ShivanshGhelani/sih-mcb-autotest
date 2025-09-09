import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from './components/login-page'
import { Layout } from './components/layout'
import { Dashboard } from './components/dashboard'
import { TeamPage } from './components/team-page'
import { ProtectedRoute } from './components/ProtectedRoute'
import { IECCompliancePage } from './components/projects/iec-compliance'
import { HighCurrentTestingPage } from './components/projects/high-current-testing'
import { SafetyMonitoringPage } from './components/projects/safety-monitoring'
import { ProblemStatementPage } from './components/projects/problem-statement'
import { ProposedSolutionPage } from './components/projects/proposed-solution'
import { TestCasesDiagnosticsPage } from './components/projects/test-cases-diagnostics'
import IcsBreakingCapacityTest from './components/projects/ics-breaking-capacity'
import OvercurrentProtectionTest from './components/projects/overcurrent-protection'
import ShortCircuitTest10kA from './components/projects/short-circuit-10ka'
import SinglePoleMCBTest from './components/projects/single-pole-mcb'
import MultiPoleMCBTest from './components/projects/multi-pole-mcb'
import TestCasesPage from './components/projects/test-cases'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/team" element={
          <ProtectedRoute>
            <Layout>
              <TeamPage />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/team/*" element={
          <ProtectedRoute>
            <Layout>
              <TeamPage />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/projects/iec-compliance" element={
          <ProtectedRoute>
            <Layout>
              <IECCompliancePage />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/projects/high-current" element={
          <ProtectedRoute>
            <Layout>
              <HighCurrentTestingPage />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/projects/safety" element={
          <ProtectedRoute>
            <Layout>
              <SafetyMonitoringPage />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/projects/problem-statement" element={
          <ProtectedRoute>
            <Layout>
              <ProblemStatementPage />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/projects/solution" element={
          <ProtectedRoute>
            <Layout>
              <ProposedSolutionPage />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/projects/diagnostics" element={
          <ProtectedRoute>
            <Layout>
              <TestCasesDiagnosticsPage />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/tests/ics-breaking" element={
          <ProtectedRoute>
            <Layout>
              <IcsBreakingCapacityTest />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/tests/overcurrent" element={
          <ProtectedRoute>
            <Layout>
              <OvercurrentProtectionTest />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/tests/short-circuit" element={
          <ProtectedRoute>
            <Layout>
              <ShortCircuitTest10kA />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/tests/single-pole" element={
          <ProtectedRoute>
            <Layout>
              <SinglePoleMCBTest />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/tests/multi-pole" element={
          <ProtectedRoute>
            <Layout>
              <MultiPoleMCBTest />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/tests/test-cases" element={
          <ProtectedRoute>
            <Layout>
              <TestCasesPage />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
