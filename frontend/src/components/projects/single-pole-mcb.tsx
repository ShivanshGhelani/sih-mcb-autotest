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
  Users,
  Building
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

const SinglePoleMCBTest: React.FC = () => {
  const testParameters: TestParameter[] = [
    { name: 'Rated Voltage', value: '230', unit: 'V AC', status: 'normal' },
    { name: 'Rated Current', value: '6-63', unit: 'A', status: 'normal' },
    { name: 'Frequency', value: '50', unit: 'Hz', status: 'normal' },
    { name: 'Breaking Capacity', value: '6000', unit: 'A', status: 'normal' },
    { name: 'Curve Type', value: 'B, C, D', unit: 'Class', status: 'normal' }
  ];

  const testResults: TestResult[] = [
    { parameter: 'Rated Current Performance', expected: 'No Trip', actual: 'Stable', status: 'pass' },
    { parameter: 'Overload Protection', expected: '1.45×In Trip', actual: '1.42×In', status: 'pass' },
    { parameter: 'Short Circuit Breaking', expected: '6kA Success', actual: 'Complete', status: 'pass' },
    { parameter: 'Curve Characteristic', expected: 'Type C', actual: 'Compliant', status: 'pass' }
  ];

  const curveTypes = [
    {
      type: 'B Curve',
      description: '3-5 × In tripping current',
      application: 'Resistive loads, lighting circuits',
      color: 'bg-blue-500'
    },
    {
      type: 'C Curve',
      description: '5-10 × In tripping current',
      application: 'Mixed loads, general purpose',
      color: 'bg-green-500'
    },
    {
      type: 'D Curve',
      description: '10-20 × In tripping current',
      application: 'High inrush current loads',
      color: 'bg-orange-500'
    }
  ];

  const applicationAreas = [
    {
      name: 'Residential Installations',
      description: 'Home electrical panels and distribution boards',
      icon: <Building className="h-5 w-5 text-blue-600" />,
      currentRange: '6A - 32A'
    },
    {
      name: 'Commercial Buildings',
      description: 'Office buildings, retail spaces, small industries',
      icon: <Users className="h-5 w-5 text-green-600" />,
      currentRange: '16A - 63A'
    },
    {
      name: 'Industrial Applications',
      description: 'Motor protection, lighting circuits, control panels',
      icon: <Power className="h-5 w-5 text-orange-600" />,
      currentRange: '32A - 63A'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <Zap className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Single Pole MCB Test
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive testing of single-pole miniature circuit breakers
          </p>
        </div>
      </div>

      {/* Test Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            Single Pole MCB Testing Protocol
          </CardTitle>
          <CardDescription>
            Complete validation suite for single-pole circuit breakers per IEC 60898-1
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Single pole MCBs are the most common type of circuit breaker used in residential and 
            commercial installations. This comprehensive test validates their performance across 
            all operating conditions including normal load, overload, and short-circuit scenarios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Test Coverage</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Rated current, overload, short-circuit, and curve characteristic validation
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Current Range</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Testing from 6A to 63A rated current specifications
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Curve Types</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                B, C, and D curve characteristic verification
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Curve Characteristics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-green-600" />
            MCB Curve Characteristics
          </CardTitle>
          <CardDescription>
            Understanding trip curve types and their applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {curveTypes.map((curve, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                <div className={`w-16 h-16 ${curve.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{curve.type.charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {curve.type}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {curve.description}
                </p>
                <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-xs">
                  {curve.application}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Application Areas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-6 w-6 text-purple-600" />
            Application Areas & Current Ratings
          </CardTitle>
          <CardDescription>
            Common installation scenarios for single-pole MCBs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {applicationAreas.map((area, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-lg border">
                  {area.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{area.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{area.description}</p>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 text-xs">
                    {area.currentRange}
                  </Badge>
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
            Test Results & Performance Validation
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
            Prototype Intelligence - Single Pole Testing Logic
          </CardTitle>
          <CardDescription>
            Demonstrating comprehensive MCB testing algorithms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our ESP32 prototype demonstrates the complete testing logic for single-pole MCBs 
            through intelligent simulation. The system validates all critical parameters and 
            curve characteristics without requiring high-power test equipment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                <Gauge className="h-4 w-4" />
                Curve Validation Logic
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Mathematical algorithms validate B, C, and D curve characteristics through 
                precise timing analysis, proving the trip curve compliance logic works correctly.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                <Power className="h-4 w-4" />
                Multi-Current Testing
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Automated current scaling algorithms demonstrate testing capabilities across 
                the full 6A-63A range with proper parameter adjustment for each rating.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SinglePoleMCBTest;
