import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Shield, 
  Activity, 
  Gauge, 
  Settings,
  AlertTriangle,
  CheckCircle,
  Timer,
  TrendingUp,
  Battery,
  CircuitBoard,
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

const IcsBreakingCapacityTest: React.FC = () => {
  const [testStatus, setTestStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  
  const testParameters: TestParameter[] = [
    { name: 'Test Current (Ics)', value: '6000', unit: 'A', status: 'normal' },
    { name: 'Test Voltage', value: '230', unit: 'V', status: 'normal' },
    { name: 'Power Factor', value: '0.85', unit: 'cosφ', status: 'normal' },
    { name: 'Frequency', value: '50', unit: 'Hz', status: 'normal' },
    { name: 'Test Sequence', value: 'O-t-O-t-CO', unit: 'cycles', status: 'normal' }
  ];

  const testResults: TestResult[] = [
    { parameter: 'Breaking Time', expected: '< 3ms', actual: '2.1ms', status: 'pass' },
    { parameter: 'Arc Extinction', expected: 'Complete', actual: 'Complete', status: 'pass' },
    { parameter: 'Post-Test Dielectric', expected: '1500V', actual: '1650V', status: 'pass' },
    { parameter: 'Thermal Trip Function', expected: 'Operational', actual: 'Operational', status: 'pass' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <Zap className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Ics Breaking Capacity Test
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Service short-circuit breaking capacity validation per IEC 60898-1:2015
          </p>
        </div>
      </div>

      {/* Test Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            Test Protocol Overview
          </CardTitle>
          <CardDescription>
            Automated O-t-O-t-CO sequence testing at rated service current capacity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The Ics (Service Breaking Capacity) test validates the MCB's ability to interrupt short-circuit 
            currents and remain serviceable for continued operation. This test uses the complete O-t-O-t-CO 
            sequence followed by comprehensive post-test verification.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Test Sequence</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                O (Open) → t (time delay) → O (Open) → t (time delay) → CO (Close-Open)
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Post-Test Checks</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Dielectric strength test and thermal trip verification
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Expected Result</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete interruption with continued serviceability
              </p>
            </div>
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
            Test Results & Analysis
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
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircuitBoard className="h-6 w-6 text-blue-600" />
            "Build the Brain, Not the Brawn" - Simulation Intelligence
          </CardTitle>
          <CardDescription>
            How our prototype demonstrates industrial-grade testing logic
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our ESP32-based prototype simulates the complete Ics testing intelligence without dangerous 
            high-current implementation. The system proves all critical automation logic through safe, 
            controlled demonstrations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                <Power className="h-4 w-4" />
                Sequence Control Logic
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Relay-based demonstration of precise O-t-O-t-CO timing sequences with millisecond accuracy, 
                proving the automation logic for industrial switching control.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                <Gauge className="h-4 w-4" />
                Real-Time Monitoring
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                ACS712 current sensor provides live feedback demonstrating the monitoring capabilities 
                needed for industrial fault detection and post-test verification.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IcsBreakingCapacityTest;
