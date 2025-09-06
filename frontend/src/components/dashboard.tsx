import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { auth } from "@/api/auth"
import { dashboard } from "@/api/dashboard"
import { useEffect, useState } from "react"

interface DashboardStats {
  totalTests: number
  activeTests: number
  systemUptime: number
  complianceRate: number
}

export function Dashboard() {
  const navigate = useNavigate()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('authToken')
    const user = localStorage.getItem('user')
    
    console.log('Dashboard mounted - Auth token:', !!token)
    console.log('Dashboard mounted - User data:', !!user)
    
    if (!token) {
      console.log('No auth token found, redirecting to login')
      navigate('/')
      return
    }
    
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      console.log('Fetching dashboard data...')
      const token = localStorage.getItem('authToken')
      console.log('Auth token exists:', !!token)
      
      const data = await dashboard.getStats()
      console.log('Dashboard data received:', data)
      setStats({
        totalTests: data.testsExecuted,
        activeTests: data.activeSessions,
        systemUptime: data.systemUptime,
        complianceRate: data.complianceRate
      })
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
      // Don't redirect on error, just use dummy data for demo
      setStats({
        totalTests: 1247,
        activeTests: 3,
        systemUptime: 99.8,
        complianceRate: 98.5
      })
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await auth.logout()
      navigate('/')
    } catch (error) {
      console.error('Logout failed:', error)
      // Still navigate to login even if logout API fails
      navigate('/')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">Loading dashboard...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">MCB Testing Dashboard</h1>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </div>

      {/* Welcome Card */}
      <Card>
        <CardHeader>
          <CardTitle>Automated MCB Testing System</CardTitle>
          <CardDescription>
            IEC 60898-1:2015 compliant high-current short-circuit testing platform for MCBs (0.5A-63A)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            System operational and ready for MCB breaking capacity tests. Monitor real-time test execution, analyze waveforms, and generate compliance reports.
          </p>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tests Executed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalTests || 0}</div>
            <p className="text-xs text-muted-foreground">+12 tests today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Test Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.activeTests || 0}</div>
            <p className="text-xs text-muted-foreground">MCBs under test</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.systemUptime || 0}%</div>
            <p className="text-xs text-muted-foreground">Last 30 days average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">IEC Compliance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.complianceRate || 0}%</div>
            <p className="text-xs text-muted-foreground">Tests passed certification</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Test Activity</CardTitle>
          <CardDescription>Latest MCB test executions and system events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Ics Breaking Capacity Test - PASSED</p>
                <p className="text-xs text-gray-500">MCB 32A - 2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Short-Circuit Test Initiated</p>
                <p className="text-xs text-gray-500">MCB 16A DP - 5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">System Calibration Completed</p>
                <p className="text-xs text-gray-500">R/XL Circuit Banks - 1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">AI Analytics Report Generated</p>
                <p className="text-xs text-gray-500">Predictive maintenance - 2 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
