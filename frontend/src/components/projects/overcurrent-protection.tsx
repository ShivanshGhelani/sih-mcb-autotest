import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Activity, 
  Gauge, 
  Settings,
  AlertTriangle,
  CheckCircle,
  Timer,
  Clock,
  Thermometer,
  Zap,
  TrendingUp,
  CircuitBoard
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

const OvercurrentProtectionTest: React.FC = () => {
  const testParameters: TestParameter[] = [
    { name: 'Rated Current (In)', value: '16', unit: 'A', status: 'normal' },
    { name: 'Test Current Range', value: '1.13-2.55×In', unit: 'A', status: 'normal' },
    { name: 'Ambient Temperature', value: '30', unit: '°C', status: 'normal' },
    { name: 'Test Duration', value: '1-60', unit: 'min', status: 'normal' },
    { name: 'Tolerance', value: '±10', unit: '%', status: 'normal' }
  ];

  const testResults: TestResult[] = [
    { parameter: 'Trip Time at 1.13×In', expected: 'No Trip (>1h)', actual: 'No Trip', status: 'pass' },
    { parameter: 'Trip Time at 1.45×In', expected: '1-60 min', actual: '42 min', status: 'pass' },
    { parameter: 'Trip Time at 2.55×In', expected: '1-60 sec', actual: '28 sec', status: 'pass' },
    { parameter: 'Temperature Coefficient', expected: 'Within limits', actual: 'Compliant', status: 'pass' }
  ];

  const timeCurveData = [
    { current: '1.13×In', time: '>1 hour', color: 'bg-green-500' },
    { current: '1.45×In', time: '1-60 min', color: 'bg-yellow-500' },
    { current: '2.55×In', time: '1-60 sec', color: 'bg-orange-500' },
    { current: '>3×In', time: '<1 sec', color: 'bg-red-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
          <Shield className="h-8 w-8 text-orange-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Overcurrent Protection Test
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Thermal overload protection verification per IEC 60898-1:2015
          </p>
        </div>
      </div>

      {/* Test Overview */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-6 w-6 text-orange-600" />
            Thermal Protection Protocol
          </CardTitle>
          <CardDescription>
            Time-current characteristic validation for overload protection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The overcurrent protection test validates the MCB's thermal trip mechanism, ensuring proper 
            response to overload conditions. This test verifies the time-current characteristic curve 
            compliance with IEC 60898-1 specifications across multiple current levels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Test Points</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                1.13×In (no trip), 1.45×In (conditional), 2.55×In (mandatory trip)
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Temperature Effects</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ambient temperature compensation and thermal coefficient validation
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Time Measurement</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Precise trip time recording from seconds to hours
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time-Current Characteristic */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Time-Current Characteristic Curve
          </CardTitle>
          <CardDescription>
            IEC 60898-1 compliant trip time validation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeCurveData.map((point, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                <div className={`w-16 h-16 ${point.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{point.current}</span>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  Current Level
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Trip Time: {point.time}
                </p>
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
            Test Configuration & Parameters
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
            Test Results & Compliance Verification
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
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircuitBoard className="h-6 w-6 text-orange-600" />
            Prototype Intelligence - Thermal Simulation
          </CardTitle>
          <CardDescription>
            Demonstrating industrial thermal protection logic
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our ESP32 prototype simulates thermal protection intelligence through mathematical modeling 
            and real-time calculations. The system demonstrates time-current characteristic validation 
            without requiring dangerous overload conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Time-Current Modeling
              </h4>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                Mathematical algorithms calculate expected trip times based on current levels, 
                proving the thermal protection logic for industrial applications.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                <Gauge className="h-4 w-4" />
                Temperature Compensation
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Environmental sensor integration demonstrates ambient temperature effects 
                on thermal trip characteristics and compensation algorithms.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OvercurrentProtectionTest;
