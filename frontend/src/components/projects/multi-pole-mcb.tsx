import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  Settings,
  AlertTriangle,
  CheckCircle,
  Timer,
  Shield,
  CircuitBoard,
  Power,
  Gauge,
  Zap,
  Grid,
  RotateCcw,
  Link,
  AlertOctagon
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

const MultiPoleMCBTest: React.FC = () => {
  const testParameters: TestParameter[] = [
    { name: 'Configuration', value: 'DP/TP/FP', unit: 'Poles', status: 'normal' },
    { name: 'Rated Voltage', value: '230/400', unit: 'V AC', status: 'normal' },
    { name: 'Rated Current', value: '6-63', unit: 'A', status: 'normal' },
    { name: 'Breaking Capacity', value: '6000', unit: 'A', status: 'normal' },
    { name: 'Phase Coordination', value: 'Synchronized', unit: 'Mode', status: 'normal' }
  ];

  const testResults: TestResult[] = [
    { parameter: 'Phase Synchronization', expected: 'Simultaneous', actual: 'Coordinated', status: 'pass' },
    { parameter: 'Common Trip Mechanism', expected: 'All Poles', actual: 'All Poles', status: 'pass' },
    { parameter: 'Breaking Performance', expected: '6kA Success', actual: 'Complete', status: 'pass' },
    { parameter: 'Phase Balance', expected: 'Within ±5%', actual: '±2.1%', status: 'pass' }
  ];

  const poleConfigurations = [
    {
      type: 'Double Pole (DP)',
      description: '2-pole configuration for single-phase loads',
      phases: 'L1, L2',
      application: 'Single-phase circuits, split-phase systems',
      voltage: '230V',
      color: 'bg-blue-500'
    },
    {
      type: 'Triple Pole (TP)',
      description: '3-pole configuration for three-phase loads',
      phases: 'L1, L2, L3',
      application: 'Three-phase motors, balanced loads',
      voltage: '400V',
      color: 'bg-green-500'
    },
    {
      type: 'Four Pole (FP)',
      description: '4-pole configuration with neutral protection',
      phases: 'L1, L2, L3, N',
      application: 'Three-phase with neutral, IT systems',
      voltage: '400V',
      color: 'bg-purple-500'
    }
  ];

  const testSequences = [
    {
      name: 'Phase Coordination Test',
      description: 'Verify simultaneous operation of all poles',
      icon: <Link className="h-5 w-5 text-blue-600" />,
      steps: ['Apply fault to single phase', 'Monitor all pole responses', 'Verify simultaneous tripping']
    },
    {
      name: 'Common Trip Mechanism',
      description: 'Validate mechanical linkage between poles',
      icon: <RotateCcw className="h-5 w-5 text-green-600" />,
      steps: ['Manual trip activation', 'Check all pole positions', 'Verify mechanical integrity']
    },
    {
      name: 'Phase Balance Validation',
      description: 'Ensure equal performance across all phases',
      icon: <Grid className="h-5 w-5 text-purple-600" />,
      steps: ['Individual phase testing', 'Compare trip characteristics', 'Validate balance tolerance']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <Grid className="h-8 w-8 text-purple-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Multi-Pole MCB Test
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive testing of multi-pole miniature circuit breakers (DP/TP/FP)
          </p>
        </div>
      </div>

      {/* Test Overview */}
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-purple-600" />
            Multi-Pole MCB Testing Protocol
          </CardTitle>
          <CardDescription>
            Advanced testing for double, triple, and four-pole circuit breakers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Multi-pole MCBs provide simultaneous protection for multiple phases in electrical systems. 
            This comprehensive test validates their coordinated operation, ensuring all poles trip 
            simultaneously when any single pole detects a fault condition, maintaining system safety 
            and preventing phase imbalance issues.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Coordination Testing</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Validation of simultaneous pole operation and common trip mechanism
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Phase Balance</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Verification of equal performance across all phases within tolerance
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">System Integration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Testing in realistic multi-phase electrical system configurations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pole Configurations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-green-600" />
            Multi-Pole Configurations
          </CardTitle>
          <CardDescription>
            Understanding different pole arrangements and their applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {poleConfigurations.map((config, index) => (
              <Card key={index} className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${config.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{config.type.split(' ')[0].charAt(0)}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{config.type}</CardTitle>
                      <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-xs">
                        {config.voltage}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{config.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Phases:</span>
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 text-xs">
                        {config.phases}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      <strong>Application:</strong> {config.application}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Test Sequences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertOctagon className="h-6 w-6 text-orange-600" />
            Multi-Pole Test Sequences
          </CardTitle>
          <CardDescription>
            Specialized testing procedures for multi-pole coordination
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testSequences.map((sequence, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white dark:bg-gray-700 rounded-lg border">
                    {sequence.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{sequence.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{sequence.description}</p>
                    <div className="space-y-1">
                      {sequence.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs text-gray-500 dark:text-gray-500">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
            Test Results & Coordination Validation
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
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircuitBoard className="h-6 w-6 text-purple-600" />
            Multi-Phase Simulation Intelligence
          </CardTitle>
          <CardDescription>
            Demonstrating complex multi-pole coordination logic
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our ESP32 prototype demonstrates sophisticated multi-phase coordination logic through 
            synchronized relay control and phase monitoring. The system proves the complex algorithms 
            needed for multi-pole MCB testing without requiring dangerous multi-phase high-current systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                <Gauge className="h-4 w-4" />
                Phase Coordination Logic
              </h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Multiple relay arrays demonstrate synchronized phase control, proving the 
                timing precision needed for coordinated multi-pole breaker testing.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                <Power className="h-4 w-4" />
                Balance Monitoring
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Multi-sensor arrays validate phase balance algorithms and tolerance monitoring 
                capabilities required for industrial multi-phase testing systems.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiPoleMCBTest;
