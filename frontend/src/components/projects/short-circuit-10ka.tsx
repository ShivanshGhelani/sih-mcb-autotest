import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Activity, 
  Gauge, 
  Settings,
  AlertTriangle,
  CheckCircle,
  Timer,
  Shield,
  TrendingUp,
  CircuitBoard,
  AlertOctagon,
  Power
} from 'lucide-react';

interface TestParameter {
  name: string;
  value: string;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
}

interface TestResult {
  parameter: string;
  expected: string;
  actual: string;
  status: 'pass' | 'fail' | 'pending';
}

const ShortCircuitTest10kA: React.FC = () => {
  const testParameters: TestParameter[] = [
    { name: 'Test Current (Icn)', value: '10000', unit: 'A', status: 'critical' },
    { name: 'Test Voltage', value: '230', unit: 'V', status: 'normal' },
    { name: 'Power Factor', value: '0.85', unit: 'cosφ', status: 'normal' },
    { name: 'Test Sequence', value: 'O-t-CO', unit: 'cycles', status: 'normal' },
    { name: 'Arc Duration', value: '<10', unit: 'ms', status: 'critical' }
  ];

  const testResults: TestResult[] = [
    { parameter: 'Current Interruption', expected: 'Complete', actual: 'Complete', status: 'pass' },
    { parameter: 'Arc Extinction Time', expected: '<10ms', actual: '7.2ms', status: 'pass' },
    { parameter: 'No Explosion', expected: 'Safe Failure', actual: 'Contained', status: 'pass' },
    { parameter: 'External Flashover', expected: 'None', actual: 'None', status: 'pass' },
    { parameter: 'Device Serviceability', expected: 'Not Required', actual: 'End-of-Life', status: 'pass' }
  ];

  const safetyFeatures = [
    {
      name: 'Arc Containment',
      description: 'Internal arc flash safely contained within MCB housing',
      icon: <Shield className="h-5 w-5 text-blue-600" />,
      status: 'active'
    },
    {
      name: 'Rapid Interruption',
      description: 'Ultra-fast current interruption within milliseconds',
      icon: <Zap className="h-5 w-5 text-yellow-600" />,
      status: 'active'
    },
    {
      name: 'Controlled Failure',
      description: 'Predictable end-of-life failure mode without hazards',
      icon: <AlertOctagon className="h-5 w-5 text-orange-600" />,
      status: 'active'
    },
    {
      name: 'External Safety',
      description: 'No external arc flash or hot gas ejection',
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      status: 'verified'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg">
          <AlertOctagon className="h-8 w-8 text-red-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Short-Circuit Test (10kA)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Ultimate breaking capacity (Icn) validation per IEC 60898-1:2015
          </p>
        </div>
      </div>

      {/* Danger Warning */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
            <AlertTriangle className="h-6 w-6" />
            High-Energy Test Protocol - Maximum Safety Required
          </CardTitle>
          <CardDescription className="text-red-600 dark:text-red-400">
            Ultimate breaking capacity test at maximum rated current
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-lg border border-red-300 dark:border-red-700">
            <p className="text-red-800 dark:text-red-200 font-semibold mb-2">⚠️ Critical Test Conditions</p>
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              This test subjects the MCB to its absolute maximum rated current (10,000A) using the 
              O-t-CO sequence. The device is expected to safely interrupt the current but may not 
              remain serviceable. This is a destructive test requiring maximum safety protocols.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Test Objective</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Verify safe interruption capability at ultimate rated current
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Expected Outcome</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete current interruption with controlled failure mode
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Post-Test State</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Device not required to be serviceable after test completion
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            Integrated Safety Systems
          </CardTitle>
          <CardDescription>
            Comprehensive protection during high-energy testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-lg border">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{feature.name}</h4>
                    <Badge className={
                      feature.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                    }>
                      {feature.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Test Parameters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-6 w-6 text-green-600" />
            Test Parameters & Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testParameters.map((param, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">{param.name}</h4>
                  <Badge className={
                    param.status === 'normal' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
                    param.status === 'warning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
                    'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                  }>
                    {param.status}
                  </Badge>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{param.value}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{param.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Test Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-purple-600" />
            Test Results & Safety Validation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {testResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                <div className="flex items-center gap-3">
                  {result.status === 'pass' ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : result.status === 'fail' ? (
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  ) : (
                    <Timer className="h-5 w-5 text-yellow-600" />
                  )}
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">{result.parameter}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expected: {result.expected}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-gray-100">Actual: {result.actual}</p>
                  <Badge className={
                    result.status === 'pass' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
                    result.status === 'fail' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
                  }>
                    {result.status.toUpperCase()}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Simulation Intelligence */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircuitBoard className="h-6 w-6 text-red-600" />
            "Build the Brain, Not the Brawn" - Safety Logic Simulation
          </CardTitle>
          <CardDescription>
            Demonstrating critical safety protocols without dangerous implementation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our prototype simulates the complete safety monitoring and emergency response logic 
            required for 10kA testing without implementing dangerous high-current systems. 
            The ESP32 demonstrates all critical safety algorithms through controlled scenarios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                <Power className="h-4 w-4" />
                Emergency Shutdown Logic
              </h4>
              <p className="text-sm text-red-700 dark:text-red-300">
                Relay-based demonstration of instant emergency shutdown protocols when critical 
                failures are detected, proving the safety interlock systems work correctly.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Arc Flash Detection
              </h4>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                LED patterns simulate optical arc detection sensors, demonstrating the real-time 
                monitoring capabilities needed for personnel safety during high-energy testing.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShortCircuitTest10kA;
