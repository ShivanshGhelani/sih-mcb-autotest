import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Activity, 
  Shield, 
  Zap,
  Clock,
  TrendingUp,
  AlertOctagon,
  FileText,
  Monitor,
  Gauge
} from 'lucide-react';

interface TestCase {
  id: string;
  name: string;
  description: string;
  systemAction: string;
  expectedOutcome: string;
  status: 'success' | 'warning' | 'critical';
  icon: React.ReactNode;
  details?: string[];
}

const TestCasesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('success');

  const successCases: TestCase[] = [
    {
      id: 'TC-S1',
      name: 'Full Pass at Service Capacity (Ics)',
      description: 'Complete O - t - O - t - CO sequence at rated service current',
      systemAction: 'The system subjects the MCB to the O - t - O - t - CO sequence at its rated service current (e.g., 6,000A). After the sequence, the system automatically performs a Dielectric Strength test and a Thermal Trip Verification test.',
      expectedOutcome: 'PASS. The HMI reports that the MCB successfully interrupted the fault and passed all post-test verifications, confirming it is still fully serviceable.',
      status: 'success',
      icon: <CheckCircle className="h-5 w-5" />,
      details: [
        'Service capacity validation at 6,000A',
        'Automated post-test verification sequence',
        'Dielectric strength confirmation',
        'Thermal trip mechanism validation',
        'Full serviceability certification'
      ]
    },
    {
      id: 'TC-S2',
      name: 'Pass at Reduced Current',
      description: 'Extended endurance testing with multiple operations',
      systemAction: 'The system performs the long and demanding 6 x O, 3 x CO sequence at a reduced current (e.g., 500A).',
      expectedOutcome: 'PASS. The HMI confirms successful interruption for all nine operations and a pass on the post-test Dielectric check.',
      status: 'success',
      icon: <Activity className="h-5 w-5" />,
      details: [
        'Nine total operations (6 O + 3 CO)',
        'Reduced current testing at 500A',
        'Endurance validation sequence',
        'Post-test dielectric verification',
        'Operational reliability confirmation'
      ]
    },
    {
      id: 'TC-S3',
      name: 'Fail Safe Pass at Ultimate Capacity (Icn)',
      description: 'Maximum capacity testing with controlled failure acceptance',
      systemAction: 'The system subjects new samples of the MCB to the O - t - CO sequence at its ultimate, highest rated current (e.g., 10,000A).',
      expectedOutcome: 'PASS (Failsafe). The HMI reports that the MCB successfully interrupted the fault and failed safely without explosion or flash-over. The report notes that the device is not expected to be serviceable for continued use.',
      status: 'success',
      icon: <Shield className="h-5 w-5" />,
      details: [
        'Ultimate capacity testing at 10,000A',
        'Controlled failure mode validation',
        'Safety containment verification',
        'No explosion or flash-over',
        'Planned end-of-service confirmation'
      ]
    }
  ];

  const failureCases: TestCase[] = [
    {
      id: 'TC-F1',
      name: 'Post-Test Dielectric Failure',
      description: 'Internal insulation degradation after fault interruption',
      systemAction: 'The MCB correctly interrupts the fault during the Ics test. However, when the system applies the 1,500V Dielectric Strength test, it measures a high leakage current above the allowed threshold.',
      expectedOutcome: 'FAIL. The HMI shows a "Degradation Failure" alert. The report specifies: "Reason: Post-Test Dielectric Strength Failed. Internal insulation compromised."',
      status: 'warning',
      icon: <AlertTriangle className="h-5 w-5" />,
      details: [
        'Successful initial fault interruption',
        '1,500V dielectric test failure',
        'High leakage current detected',
        'Internal insulation compromise',
        'Device degradation classification'
      ]
    },
    {
      id: 'TC-F2',
      name: 'Post-Test Thermal Trip Failure',
      description: 'Overload protection mechanism damage',
      systemAction: 'The MCB interrupts the Ics fault and passes the dielectric check. However, when the system performs the Thermal Trip Verification, the device either fails to trip within the required time or trips too quickly.',
      expectedOutcome: 'FAIL. The HMI shows a "Degradation Failure" alert. The report specifies: "Reason: Post-Test Thermal Trip Out of Specification. Overload protection mechanism damaged."',
      status: 'warning',
      icon: <TrendingUp className="h-5 w-5" />,
      details: [
        'Fault interruption successful',
        'Dielectric test passed',
        'Thermal trip timing failure',
        'Overload protection compromised',
        'Time-current characteristic deviation'
      ]
    }
  ];

  const criticalCases: TestCase[] = [
    {
      id: 'TC-C1',
      name: 'Failure to Interrupt (Contacts Welded)',
      description: 'Catastrophic failure with current continuation',
      systemAction: 'The system applies the short-circuit current, but the MCB\'s contacts weld shut or the arc is not extinguished. The high-speed DAQ detects that the current does not drop to zero within milliseconds. The system\'s master safety interlock immediately trips a backup breaker.',
      expectedOutcome: 'CRITICAL FAIL. The HMI displays a system-wide, high-priority alert: "CATASTROPHIC FAILURE: MCB FAILED TO INTERRUPT CURRENT. SYSTEM SHUTDOWN." The captured waveform showing the continuous fault is saved for analysis.',
      status: 'critical',
      icon: <XCircle className="h-5 w-5" />,
      details: [
        'Contact welding detection',
        'Arc extinction failure',
        'High-speed DAQ monitoring',
        'Automatic backup breaker activation',
        'Complete system shutdown protocol'
      ]
    },
    {
      id: 'TC-C2',
      name: 'External Flashover / Case Rupture',
      description: 'Physical enclosure failure with external arc',
      systemAction: 'The MCB attempts to interrupt the current, but its casing fails, ejecting hot gases and plasma. The system\'s physical sensors (indicator fuses, optical arc detectors) are triggered instantly.',
      expectedOutcome: 'CRITICAL FAIL. The HMI displays a high-priority alert: "SAFETY FAILURE: EXTERNAL ARC FLASH DETECTED. MCB ENCLOSURE COMPROMISED."',
      status: 'critical',
      icon: <AlertOctagon className="h-5 w-5" />,
      details: [
        'Enclosure rupture detection',
        'Hot gas and plasma ejection',
        'Optical arc flash sensors',
        'Indicator fuse activation',
        'Emergency safety protocols'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'warning': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300';
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case 'critical': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  const renderTestCase = (testCase: TestCase) => (
    <Card key={testCase.id} className="h-full hover:shadow-lg transition-all duration-200 border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${
              testCase.status === 'success' ? 'bg-green-100 text-green-600 dark:bg-green-900/20' :
              testCase.status === 'warning' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/20' :
              'bg-red-100 text-red-600 dark:bg-red-900/20'
            }`}>
              {testCase.icon}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {testCase.id}: {testCase.name}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {testCase.description}
              </CardDescription>
            </div>
          </div>
          <Badge className={getStatusColor(testCase.status)}>
            <div className="flex items-center gap-1">
              {getStatusIcon(testCase.status)}
              {testCase.status.toUpperCase()}
            </div>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* System Action */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <Gauge className="h-4 w-4 text-blue-600" />
            System Action
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
            {testCase.systemAction}
          </p>
        </div>

        {/* Expected Outcome */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <Monitor className="h-4 w-4 text-purple-600" />
            Expected HMI Report
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
            {testCase.expectedOutcome}
          </p>
        </div>

        {/* Key Details */}
        {testCase.details && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <FileText className="h-4 w-4 text-green-600" />
              Key Test Parameters
            </h4>
            <ul className="space-y-1">
              {testCase.details.map((detail, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              IEC 60898-1 Test Cases & Diagnostics
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive MCB testing scenarios with intelligent failure detection
            </p>
          </div>
        </div>
        
        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">Success Cases</p>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-300">{successCases.length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Degradation Cases</p>
                  <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{failureCases.length}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">Critical Cases</p>
                  <p className="text-2xl font-bold text-red-700 dark:text-red-300">{criticalCases.length}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Test Cases Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="success" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Success Cases
          </TabsTrigger>
          <TabsTrigger value="degradation" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Degradation Cases
          </TabsTrigger>
          <TabsTrigger value="critical" className="flex items-center gap-2">
            <XCircle className="h-4 w-4" />
            Critical Cases
          </TabsTrigger>
        </TabsList>

        <TabsContent value="success" className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Success Test Scenarios
              </h2>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                Expected Performance
              </Badge>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              These scenarios validate that the MCB performs exactly as expected according to IEC 60898-1 
              standards and is certified as safe for continued operation.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {successCases.map(renderTestCase)}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="degradation" className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Non-Critical Failure Scenarios
              </h2>
              <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300">
                Degradation Detected
              </Badge>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              These scenarios identify MCBs that interrupt the main fault but suffer internal damage, 
              failing subsequent verification checks. The failure is contained safely within the device.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {failureCases.map(renderTestCase)}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="critical" className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <AlertOctagon className="h-5 w-5 text-red-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Critical Failure Scenarios
              </h2>
              <Badge className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300">
                Safety Risk
              </Badge>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              These scenarios represent dangerous, catastrophic failures that pose significant safety risks. 
              The system is designed to detect these instantly and trigger emergency safety protocols.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {criticalCases.map(renderTestCase)}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Technical Standards Note */}
      <Card className="bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Zap className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                IEC 60898-1 Compliance Framework
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                All test cases are designed in strict accordance with IEC 60898-1 international standard 
                for circuit breakers for overcurrent protection. The intelligent testing system automatically 
                executes the prescribed test sequences, monitors critical parameters in real-time, and 
                provides comprehensive safety validation through advanced sensor integration and AI-powered 
                failure detection algorithms.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestCasesPage;
