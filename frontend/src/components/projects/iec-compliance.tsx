import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, FileText, Target, Zap, Clock } from "lucide-react";

export function IECCompliancePage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          IEC 60898-1 Compliance Intelligence
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Demonstrating the automation intelligence required for international safety standard compliance
        </p>
        <Badge variant="default" className="text-lg px-4 py-2">
          Smart Compliance Logic
        </Badge>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Fundamental Role Card */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-600" />
              Fundamental Role of IEC 60898-1
            </CardTitle>
            <CardDescription>
              Critical safety standard ensuring MCB reliability under severe fault conditions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              IEC 60898-1:2015 serves as the cornerstone international standard for ensuring the safety and reliability 
              of Miniature Circuit Breakers (MCBs) under severe fault conditions. Our prototype demonstrates the 
              intelligent automation logic required to execute these complex compliance procedures, proving that 
              sophisticated control algorithms can ensure adherence to international safety standards without 
              requiring expensive industrial equipment.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                <strong>"Build the Brain, Not the Brawn":</strong> Our system proves that intelligent software can 
                manage the complex requirements of IEC 60898-1 compliance testing. By demonstrating the automation 
                logic, real-time decision-making, and precise parameter control, we validate that our "Brain" can 
                ensure legally defensible certification results when scaled to control industrial systems.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Short-Circuit Test Challenges */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              Clause 9.12 Compliance Intelligence
            </CardTitle>
            <CardDescription>
              Demonstrating the automation logic needed for complex short-circuit interruption testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              The short-circuit tests detailed in clause 9.12 present significant technical challenges requiring 
              sophisticated automation intelligence. Our prototype demonstrates the control logic needed to manage 
              these complex requirements through intelligent simulation and real-time decision-making algorithms.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Intelligent logic for managing 10kA-equivalent control algorithms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Real-time power factor calculation from 0.5 to 0.95 cos φ</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Dynamic parameter adjustment and sequence control logic</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Automated compliance verification and reporting intelligence</span>
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Arc duration and energy dissipation measurement</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Breaking Capacity Ratings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-600" />
              Breaking Capacity Classifications
            </CardTitle>
            <CardDescription>
              Critical distinction between Icn and Ics ratings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  Icn (Ultimate Breaking Capacity)
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Maximum fault current the MCB can interrupt. After this test, the MCB need not be 
                  capable of carrying its rated current, representing the absolute limit of protection.
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Ics (Service Breaking Capacity)
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Breaking capacity after which the MCB remains capable of carrying its rated current. 
                  Typically 50-100% of Icn, ensuring continued service capability after fault interruption.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test Sequences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-teal-600" />
              Automated Test Sequences
            </CardTitle>
            <CardDescription>
              Complex multi-operation test duties requiring precise automation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Our system automates the intricate test sequences mandated by IEC 60898-1, ensuring 
              consistent execution of complex operational duties.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="font-mono">O</Badge>
                <span className="text-sm">Open operation - Making and immediately breaking at fault current</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="font-mono">CO</Badge>
                <span className="text-sm">Close-Open - Closing into fault and immediate opening</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="font-mono">t</Badge>
                <span className="text-sm">Time interval - Specified recovery period between operations</span>
              </div>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
              <p className="text-sm text-teal-800 dark:text-teal-200">
                <strong>Example Sequence:</strong> O-t-O-t-CO represents two open operations with time 
                intervals followed by a close-open operation, all executed with microsecond precision.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Post-Test Verification */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-indigo-600" />
              Post-Test Verification Protocol
            </CardTitle>
            <CardDescription>
              Comprehensive verification ensuring continued MCB functionality
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Following short-circuit testing, our system automatically performs essential post-test 
              verification procedures to validate MCB integrity and continued operational capability.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Dielectric Strength Test:</strong> 2.5kV RMS voltage application for 1 minute</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Thermal Trip Verification:</strong> Calibrated overload simulation at 2.55 × In</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Contact Resistance:</strong> Measurement of conductor path integrity</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Mechanical Operation:</strong> Manual operation verification post-test</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Metrological Framework */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-red-600" />
              ISO/IEC 17025 Metrological Framework
            </CardTitle>
            <CardDescription>
              Ensuring legally defensible and internationally recognized test results
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our testing system is designed with a comprehensive metrological framework targeting 
              ISO/IEC 17025 accreditation, ensuring that all test results are legally defensible and 
              internationally recognized. This framework encompasses calibration procedures, measurement 
              uncertainty analysis, and traceability to national standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">±0.5%</div>
                <div className="text-sm text-red-700 dark:text-red-300 mt-1">Current Measurement Accuracy</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">±1.0%</div>
                <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">Voltage Measurement Accuracy</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">±0.1ms</div>
                <div className="text-sm text-green-700 dark:text-green-300 mt-1">Time Measurement Resolution</div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Accreditation Benefits:</strong> ISO/IEC 17025 compliance ensures our test results 
                are accepted by regulatory bodies worldwide, providing manufacturers with internationally 
                recognized certification that facilitates global market access and regulatory compliance.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
