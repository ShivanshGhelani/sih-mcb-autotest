import { LoginForm } from "@/components/login-form"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { auth } from "@/api/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

type PageState = 'login' | 'forgot-password' | 'otp-verification'

export function LoginPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [pageState, setPageState] = useState<PageState>('login')
  const [resetEmail, setResetEmail] = useState("")
  const [otp, setOtp] = useState("")

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    if (!username || !password) {
      setError("Please enter both username and password")
      setIsLoading(false)
      return
    }

    try {
      const response = await auth.login({ username, password })

      if (response.success) {
        console.log('Login successful, redirecting to dashboard')
        navigate('/dashboard')
      } else {
        setError(response.message || 'Login failed')
      }
    } catch (error: any) {
      console.error('Login error:', error)
      
      // Handle different types of errors
      if (error.response?.status === 401) {
        setError('Invalid username or password')
      } else if (error.response?.status === 500) {
        setError('Server error. Please try again later.')
      } else if (error.code === 'NETWORK_ERROR') {
        setError('Network error. Please check your connection.')
      } else {
        setError(error.response?.data?.message || error.message || 'Login failed. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleForgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    setResetEmail(email)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setPageState('otp-verification')
    }, 1000)
  }

  const handleOtpVerification = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    console.log('OTP entered:', otp)
    
    // Check if OTP is 123456
    if (otp === "123456") {
      console.log('OTP verified successfully')
      setTimeout(() => {
        setIsLoading(false)
        
        // Simulate successful password reset and auto-login
        // Set dummy auth data like a successful login would
        const dummyToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NzgyZjMxZjU2ZWM2ZDUwOGQ1MjQzYzEiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNzM2NTk2NzY3LCJleHAiOjE3MzY2ODMxNjd9.dummy'
        const dummyUser = {
          id: '6782f31f56ec6d508d5243c1',
          email: resetEmail,
          username: 'admin',
          name: 'Admin User'
        }
        
        // Store authentication data
        localStorage.setItem('authToken', dummyToken)
        localStorage.setItem('user', JSON.stringify(dummyUser))
        
        console.log('Auth data stored, navigating to dashboard')
        console.log('Token stored:', localStorage.getItem('authToken') ? 'Yes' : 'No')
        console.log('User stored:', localStorage.getItem('user') ? 'Yes' : 'No')
        
        // Navigate to dashboard
        navigate('/dashboard')
      }, 1000)
    } else {
      console.log('Invalid OTP entered:', otp)
      setTimeout(() => {
        setIsLoading(false)
        setError("Invalid OTP. Please use 123456 for demo.")
      }, 1000)
    }
  }

  const renderLogin = () => (
    <form onSubmit={handleLogin}>
      <LoginForm 
        onForgotPassword={() => setPageState('forgot-password')} 
        isLoading={isLoading}
        error={error}
      />
    </form>
  )

  const renderForgotPassword = () => (
    <Card>
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>
          Enter your email address and we'll send you an OTP to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <div className="grid gap-3">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending OTP..." : "Send OTP"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setPageState('login')
                setError("")
              }}
            >
              Back to Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )

  const renderOtpVerification = () => (
    <Card>
      <CardHeader>
        <CardTitle>Enter Verification Code</CardTitle>
        <CardDescription>
          We've sent a 6-digit code to {resetEmail}. Enter the code below to reset your password.
          <br />
          <span className="text-sm font-medium text-blue-600 mt-2 block">
            Demo: Use 123456
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleOtpVerification} className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <Label htmlFor="otp">Verification Code</Label>
            <InputOTP
              value={otp}
              onChange={(value) => setOtp(value)}
              maxLength={6}
              className="w-full"
            >
              <InputOTPGroup className="gap-2">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={isLoading || otp.length !== 6}>
              {isLoading ? "Verifying..." : "Verify & Reset Password"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setPageState('forgot-password')
                setOtp("")
                setError("")
              }}
            >
              Back
            </Button>
          </div>
          <div className="text-center text-sm text-gray-600">
            Didn't receive the code?{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => {
                // Simulate resend OTP
                setError("")
                alert("OTP resent! Use 123456")
              }}
            >
              Resend OTP
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  )

  const getPageTitle = () => {
    switch (pageState) {
      case 'forgot-password':
        return 'Reset Password'
      case 'otp-verification':
        return 'Verify Code'
      default:
        return 'Welcome Back'
    }
  }

  const getPageDescription = () => {
    switch (pageState) {
      case 'forgot-password':
        return 'Enter your email to reset your password'
      case 'otp-verification':
        return 'Enter the verification code sent to your email'
      default:
        return 'Sign in to your AmpereX account'
    }
  }

  const renderCurrentPage = () => {
    switch (pageState) {
      case 'forgot-password':
        return renderForgotPassword()
      case 'otp-verification':
        return renderOtpVerification()
      default:
        return renderLogin()
    }
  }

  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mb-6">
            <img 
              src="/logo.png" 
              alt="AmpereX Logo" 
              className="h-16 w-auto mx-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h1>
          <p className="text-gray-600 mt-2">{getPageDescription()}</p>
        </div>
        {error && pageState !== 'login' && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        {renderCurrentPage()}
      </div>
    </div>
  )
}
