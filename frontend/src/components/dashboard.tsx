import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import { auth } from "@/api/auth"
import { dashboard } from "@/api/dashboard"
import { useEffect, useState } from "react"
import { 
  Activity, 
  Zap, 
  ClipboardCheck, 
  Play, 
  BarChart3, 
  Brain,
  AlertTriangle,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  Thermometer,
  TrendingUp
} from "lucide-react"
import { mockDashboardData, SystemStatus, TestResult, AIVerdict } from "@/data/dashboardData"
import type { DashboardData } from "@/data/dashboardData"

export function Dashboard() {
  const navigate = useNavigate()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
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
      
      // Try to fetch from API, fall back to mock data
      try {
        const data = await dashboard.getStats()
        console.log('Dashboard data received from API:', data)
        // Transform API data if needed
        setDashboardData(mockDashboardData) // Use mock for now
      } catch (apiError) {
        console.log('API not available, using mock data')
        setDashboardData(mockDashboardData)
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
      // Use mock data as fallback
      setDashboardData(mockDashboardData)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case SystemStatus.READY: return 'bg-green-500'
      case SystemStatus.TESTING: return 'bg-blue-500'
      case SystemStatus.FAULT: return 'bg-red-500'
      case SystemStatus.MAINTENANCE: return 'bg-orange-500'
      case SystemStatus.CALIBRATING: return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  const getResultIcon = (result: string) => {
    switch (result) {
      case TestResult.PASS: return <CheckCircle className="h-4 w-4 text-green-500" />
      case TestResult.FAIL: return <XCircle className="h-4 w-4 text-red-500" />
      case TestResult.PENDING: return <Clock className="h-4 w-4 text-yellow-500" />
      default: return <AlertTriangle className="h-4 w-4 text-gray-500" />
    }
  }

  const getAIVerdictColor = (verdict: string) => {
    switch (verdict) {
      case AIVerdict.HEALTHY: return 'text-green-600 bg-green-50'
      case AIVerdict.ANOMALY_DETECTED: return 'text-red-600 bg-red-50'
      case AIVerdict.DEGRADATION_WARNING: return 'text-orange-600 bg-orange-50'
      case AIVerdict.MAINTENANCE_REQUIRED: return 'text-purple-600 bg-purple-50'
      default: return 'text-gray-600 bg-gray-50'
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

  if (!dashboardData) {
    return (
      <div className="min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-red-600">Failed to load dashboard data</div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">MCB Testing Dashboard</h1>
          <p className="text-gray-600 mt-1">Automated High-Current Short-Circuit Test System</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="px-3 py-1">
            v{dashboardData.systemStatus.version}
          </Badge>
        </div>
      </div>

      {/* Top Row - System Status and Live Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Status Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-600" />
              <CardTitle>System Status</CardTitle>
            </div>
            <div className={`w-3 h-3 rounded-full ${getStatusColor(dashboardData.systemStatus.status)}`}></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{dashboardData.systemStatus.status}</span>
                <Badge className={getStatusColor(dashboardData.systemStatus.status) + ' text-white'}>
                  OPERATIONAL
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Uptime</p>
                  <p className="font-medium">{dashboardData.systemStatus.uptime.toFixed(1)}h</p>
                </div>
                <div>
                  <p className="text-gray-500">Next Maintenance</p>
                  <p className="font-medium">Sep 15, 2025</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Component Status</p>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  {Object.entries(dashboardData.systemStatus.components).map(([key, status]) => (
                    <div key={key} className="flex items-center space-x-1">
                      <div className={`w-2 h-2 rounded-full ${status ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Circuit Monitor Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-600" />
              <CardTitle>Live Circuit Monitor</CardTitle>
            </div>
            <Badge variant="outline">LIVE</Badge>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Voltage</p>
                  <p className="text-xl font-bold">{dashboardData.liveMetrics.voltage.toFixed(1)}V</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current</p>
                  <p className="text-xl font-bold">{dashboardData.liveMetrics.current.toFixed(2)}A</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Frequency</p>
                  <p className="text-xl font-bold">{dashboardData.liveMetrics.frequency.toFixed(2)}Hz</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Power</p>
                  <p className="text-xl font-bold">{dashboardData.liveMetrics.power.toFixed(1)}W</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Temperature</p>
                  <p className="text-xl font-bold">{dashboardData.liveMetrics.temperature.toFixed(1)}°C</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact R</p>
                  <p className="text-xl font-bold">{dashboardData.liveMetrics.contactResistance.toFixed(1)}mΩ</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second Row - Last Test and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Last Test Summary Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <ClipboardCheck className="h-5 w-5 text-green-600" />
              <CardTitle>Last Test Summary</CardTitle>
            </div>
            {getResultIcon(dashboardData.lastTestResult.result)}
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{dashboardData.lastTestResult.testType.replace(/_/g, ' ')}</p>
                  <p className="text-sm text-gray-500">
                    {dashboardData.lastTestResult.manufacturer} {dashboardData.lastTestResult.mcbRating}
                  </p>
                </div>
                <Badge className={dashboardData.lastTestResult.result === TestResult.PASS ? 'bg-green-500' : 'bg-red-500'}>
                  {dashboardData.lastTestResult.result}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Test ID</p>
                  <p className="font-medium">{dashboardData.lastTestResult.testId}</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">{dashboardData.lastTestResult.duration}s</p>
                </div>
                <div>
                  <p className="text-gray-500">Peak Current</p>
                  <p className="font-medium">{dashboardData.lastTestResult.measurements.peakCurrent}A</p>
                </div>
                <div>
                  <p className="text-gray-500">Breaking Time</p>
                  <p className="font-medium">{dashboardData.lastTestResult.measurements.breakingTime}ms</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">Operator</p>
                <p className="font-medium capitalize">{dashboardData.lastTestResult.operator}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <Play className="h-5 w-5 text-blue-600" />
              <CardTitle>Quick Actions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dashboardData.quickActions.map((action) => (
                <Button
                  key={action.id}
                  variant={action.isAvailable ? "default" : "secondary"}
                  className="w-full justify-between"
                  disabled={!action.isAvailable}
                >
                  <div className="flex items-center space-x-2">
                    {action.icon === 'Zap' && <Zap className="h-4 w-4" />}
                    {action.icon === 'AlertTriangle' && <AlertTriangle className="h-4 w-4" />}
                    {action.icon === 'Shield' && <Shield className="h-4 w-4" />}
                    {action.icon === 'Thermometer' && <Thermometer className="h-4 w-4" />}
                    <span className="text-sm">{action.title}</span>
                  </div>
                  <span className="text-xs text-gray-500">{action.estimatedDuration}min</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Third Row - Statistics and AI Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Test Statistics Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              <CardTitle>Test Statistics</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Tests Executed</p>
                  <p className="text-2xl font-bold">{dashboardData.dashboardStats.testsExecuted}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Compliance Rate</p>
                  <p className="text-2xl font-bold">{dashboardData.dashboardStats.complianceRate}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">System Uptime</p>
                  <p className="text-2xl font-bold">{dashboardData.dashboardStats.systemUptime}%</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Active Sessions</p>
                  <p className="text-2xl font-bold">{dashboardData.dashboardStats.activeSessions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Avg Duration</p>
                  <p className="text-2xl font-bold">{dashboardData.dashboardStats.averageTestDuration.toFixed(1)}min</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Energy Used</p>
                  <p className="text-2xl font-bold">{dashboardData.dashboardStats.totalEnergyConsumed.toFixed(1)}kWh</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Analysis Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-indigo-600" />
              <CardTitle>AI Analysis</CardTitle>
            </div>
            <Badge className={getAIVerdictColor(dashboardData.aiAnalysis.verdict)}>
              {dashboardData.aiAnalysis.verdict.replace(/_/g, ' ')}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Confidence Level</span>
                <span className="font-bold">{dashboardData.aiAnalysis.confidenceLevel}%</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Remaining Life</span>
                  <span className="font-medium">{dashboardData.aiAnalysis.predictiveInsights.estimatedRemainingLife}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Performance Trend</span>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="font-medium text-xs">{dashboardData.aiAnalysis.predictiveInsights.performanceTrend}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Anomaly Score</span>
                  <span className="font-medium">{dashboardData.aiAnalysis.predictiveInsights.anomalyScore}/100</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Recommendation</p>
                <p className="text-sm bg-blue-50 p-2 rounded">
                  {dashboardData.aiAnalysis.predictiveInsights.maintenanceRecommendation}
                </p>
              </div>
            </div>
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
            {dashboardData.recentActivity.slice(0, 5).map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4">
                <div className={`w-2 h-2 rounded-full ${
                  activity.severity === 'SUCCESS' ? 'bg-green-500' :
                  activity.severity === 'ERROR' ? 'bg-red-500' :
                  activity.severity === 'WARNING' ? 'bg-orange-500' :
                  'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-gray-500">
                    {activity.description} • {new Date(activity.timestamp).toLocaleTimeString()}
                  </p>
                </div>
                {activity.user && (
                  <Badge variant="outline" className="text-xs">
                    {activity.user}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
