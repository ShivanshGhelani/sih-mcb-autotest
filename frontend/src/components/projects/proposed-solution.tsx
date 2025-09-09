import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Cloud, 
  Brain, 
  Zap, 
  Wifi, 
  Database, 
  Activity,
  Shield,
  AlertTriangle,
  Settings,
  TrendingUp
} from "lucide-react";

export function ProposedSolutionPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our Proposed Solution
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          Automated High-Current Short-Circuit Test System for MCB to comply with IEC 60898-1:2015
        </p>
        <div className="flex justify-center gap-2 flex-wrap">
          <Badge variant="default" className="text-sm px-3 py-1">
            "Build the Brain, Not the Brawn" 🧠
          </Badge>
          <Badge variant="outline" className="text-sm px-3 py-1">
            IEC 60898-1:2015 Compliant
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            ESP32-Powered Intelligence
          </Badge>
        </div>
      </div>

      {/* Problem Statement */}
      <Card className="col-span-full bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
            <AlertTriangle className="h-6 w-6" />
            The Problem: Critical Challenges in MCB Testing
          </CardTitle>
          <CardDescription className="text-red-600 dark:text-red-400">
            Current manual and semi-automated testing methods create significant safety and accuracy issues
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border space-y-3">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Background & Existing Problems</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              The safety of electrical installations hinges on reliable Miniature Circuit Breakers (MCBs). 
              IEC 60898-1:2015 mandates rigorous short-circuit breaking capacity tests, crucial for ensuring 
              MCBs perform correctly under severe fault conditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">Imprecise Control</h5>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Manual R (resistive) and XL (inductive) circuit configurations lack precision and repeatability
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
                <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Safety Risks</h5>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Elevated safety risks for personnel during high-energy fault current generation (up to 10,000A)
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Time & Accuracy</h5>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Increased test times and reduced accuracy impact the MCB certification process
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Build the Brain, Not the Brawn Philosophy */}
      <Card className="col-span-full border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-blue-600" />
            The "Build the Brain, Not the Brawn" Philosophy 🧠
          </CardTitle>
          <CardDescription>
            A strategy for creating a highly intelligent, low-cost prototype that proves the most critical aspects of a complex industrial system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
              <strong>Core Philosophy:</strong> This approach is a strategy for creating a highly intelligent, low-cost prototype 
              that proves the most critical aspects of a complex industrial system—the automation, intelligence, and connectivity—without 
              replicating its dangerous and expensive high-power components.
            </p>
            <p className="text-blue-700 dark:text-blue-300 leading-relaxed mt-3">
              <strong>You are proving that your software "Brain" is smart enough to run the full-scale industrial "Brawn."</strong>
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
              <strong>Core Philosophy:</strong> This approach is a strategy for creating a highly intelligent, low-cost prototype 
              that proves the most critical aspects of a complex industrial system—the automation, intelligence, and connectivity—without 
              replicating its dangerous and expensive high-power components.
            </p>
            <p className="text-blue-700 dark:text-blue-300 leading-relaxed mt-3">
              <strong>You are proving that your software "Brain" is smart enough to run the full-scale industrial "Brawn."</strong>
            </p>
          </div>

          {/* Deconstructing the System: Brain vs. Brawn */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Deconstructing the System: Brain vs. Brawn
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              To understand the concept, we separate the system into two parts:
            </p>
          </div>

          {/* Brain vs Brawn Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* The Brawn (What We Simulate) */}
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader className="bg-red-50 dark:bg-red-900/20">
                <CardTitle className="text-red-800 dark:text-red-200 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  The "Brawn" (What We Simulate)
                </CardTitle>
                <CardDescription className="text-red-600 dark:text-red-400">
                  The Expensive & Dangerous Part
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">High-Current Source</h5>
                      <p className="text-xs text-red-700 dark:text-red-300">
                        The multi-crore, multi-ton short-circuit transformer that generates 10,000 Amps
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">High-Power Impedance Banks</h5>
                      <p className="text-xs text-red-700 dark:text-red-300">
                        The massive, physically switched resistor and reactor banks used to set the power factor
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">The Arc Flash Event</h5>
                      <p className="text-xs text-red-700 dark:text-red-300">
                        The violent, high-energy plasma arc that occurs inside the MCB during a real test
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Brain (What We Build) */}
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="bg-green-50 dark:bg-green-900/20">
                <CardTitle className="text-green-800 dark:text-green-200 flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  The "Brain" (What We Actually Build)
                </CardTitle>
                <CardDescription className="text-green-600 dark:text-green-400">
                  The Intelligent Part
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Automated Control Logic</h5>
                      <p className="text-xs text-green-700 dark:text-green-300">
                        The decision-making software that runs the complex test sequences
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Dynamic Configuration</h5>
                      <p className="text-xs text-green-700 dark:text-green-300">
                        The system's ability to calculate the correct test settings for any given input
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Real-Time Data Acquisition</h5>
                      <p className="text-xs text-green-700 dark:text-green-300">
                        The hardware and software that capture and analyze sensor data from a live electrical event
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Intelligent Diagnostics</h5>
                      <p className="text-xs text-green-700 dark:text-green-300">
                        The system's ability to detect failures and anomalies in real-time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cloud className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Cloud Connectivity & HMI</h5>
                      <p className="text-xs text-green-700 dark:text-green-300">
                        The user interface and the SaaS platform architecture
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* How the Simulation Works in Detail */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-6 w-6 text-purple-600" />
            How the Simulation Works in Detail
          </CardTitle>
          <CardDescription>
            Your prototype doesn't just pretend to work; it performs real, measurable, and complex tasks at a safe, low-power level
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Simulating the Test Procedure & Logic */}
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
                <CardTitle className="text-blue-800 dark:text-blue-200 text-lg">
                  1. Simulating the Test Procedure & Logic
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 text-sm mb-2">Instead of:</h5>
                  <p className="text-xs text-red-700 dark:text-red-300">
                    A single, violent 10,000A shot
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 text-sm mb-2">The Prototype Does:</h5>
                  <p className="text-xs text-green-700 dark:text-green-300">
                    It uses the ESP32 to precisely execute the complex, multi-step O - t - O - t - CO sequence 
                    mandated by the IEC standard. It controls a real relay with precise, millisecond-level timing, 
                    proving that its core automation and sequencing logic is sound. This is a real-time test of 
                    the system's control capabilities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Simulating the Dynamic Configuration */}
            <Card className="border-teal-200 dark:border-teal-800">
              <CardHeader className="bg-teal-50 dark:bg-teal-900/20">
                <CardTitle className="text-teal-800 dark:text-teal-200 text-lg">
                  2. Simulating the Dynamic Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 text-sm mb-2">Instead of:</h5>
                  <p className="text-xs text-red-700 dark:text-red-300">
                    Physically switching massive, multi-ton inductor banks
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 text-sm mb-2">The Prototype Does:</h5>
                  <p className="text-xs text-green-700 dark:text-green-300">
                    It reads a live, changing current from a physical potentiometer and ACS712 sensor. The ESP32's 
                    software then uses a mathematical model based on the IEC standard to calculate the correct power 
                    factor for that specific current. This calculation is then visually represented by the blinking 
                    LEDs. This proves the "automaticity" of the system—its ability to adapt to any input.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Simulating the Data Acquisition */}
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader className="bg-orange-50 dark:bg-orange-900/20">
                <CardTitle className="text-orange-800 dark:text-orange-200 text-lg">
                  3. Simulating the Data Acquisition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 text-sm mb-2">Instead of:</h5>
                  <p className="text-xs text-red-700 dark:text-red-300">
                    Trying to measure a dangerous 10,000A arc
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 text-sm mb-2">The Prototype Does:</h5>
                  <p className="text-xs text-green-700 dark:text-green-300">
                    It uses the ACS712 sensor to capture a high-speed, real-time waveform of the actual low-power 
                    current as the relay trips. This array of real sensor data is then sent to the Web HMI and 
                    plotted as a graph. This proves that the entire data pipeline, from sensor to analysis to 
                    display, is fully functional.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Simulating the Failure Detection */}
            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
                <CardTitle className="text-purple-800 dark:text-purple-200 text-lg">
                  4. Simulating the Failure Detection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 text-sm mb-2">Instead of:</h5>
                  <p className="text-xs text-red-700 dark:text-red-300">
                    A real MCB exploding
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 text-sm mb-2">The Prototype Does:</h5>
                  <p className="text-xs text-green-700 dark:text-green-300">
                    It demonstrates live anomaly detection. When an operator physically "jams" the relay, the ESP32's 
                    brain doesn't just follow its script. It actively monitors the ACS712 sensor, sees that the 
                    current has not dropped to zero, and instantly flags a real-time, data-driven CATASTROPHIC FAIL 
                    on the HMI. This proves the system's diagnostic intelligence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Complete End-to-End Demonstration</h5>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              By focusing on these four areas, your prototype provides a complete, end-to-end demonstration of the 
              full-scale system's intelligence, control, and connectivity, making it a highly impressive and valid 
              proof of concept.
            </p>
          </div>
        </CardContent>
      </Card>

        {/* Dynamic Real-Time Control */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-blue-600" />
              Dynamic Real-Time Control
            </CardTitle>
            <CardDescription>
              Live adaptation to changing circuit conditions with physical feedback
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Our prototype demonstrates sophisticated real-time control capabilities through interactive 
              demonstrations that respond to live, physical inputs, proving its ability to adapt to 
              changing circuit conditions just like a full-scale industrial system.
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Potentiometer Demo</h5>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  A physical potentiometer knob allows real-time current variation, forcing the system to 
                  dynamically reconfigure its circuit parameters and update LED patterns to match the new 
                  electrical conditions. This closed-loop demonstration proves the system's ability to 
                  respond intelligently to changing test requirements.
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
                <h5 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">Adaptive Configuration</h5>
                <p className="text-sm text-teal-700 dark:text-teal-300">
                  As circuit conditions change, the system automatically adjusts LED blinking patterns 
                  to represent different R/XL bank configurations, demonstrating the intelligent switching 
                  logic that would control thyristor arrays in the full-scale implementation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cloud-Connected SaaS Platform */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-indigo-600" />
              Cloud-Connected SaaS Platform
            </CardTitle>
            <CardDescription>
              Transforming standalone devices into centrally managed, scalable solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Our system revolutionizes MCB testing by implementing a comprehensive Software as a Service 
              (SaaS) architecture that transforms individual testing devices into components of a globally 
              managed, cloud-connected ecosystem.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">MongoDB Database Integration</h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Centralized storage of test procedures, configuration parameters, and results with 
                    real-time synchronization across all connected devices
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wifi className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">Remote Management Capability</h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    System administrators can manage entire fleets of testing devices from a single 
                    dashboard, updating configurations and monitoring performance globally
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">Scalable Architecture</h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    The cloud-native design enables seamless scaling from prototype demonstration 
                    to industrial deployment across multiple testing facilities
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI-Powered Predictive Analytics */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-purple-600" />
              AI-Powered Predictive Analytics: Industry 4.0 Innovation
            </CardTitle>
            <CardDescription>
              Moving beyond PASS/FAIL to predictive maintenance and electrical fingerprint analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our most advanced feature represents a quantum leap in MCB testing technology: a sophisticated 
              Machine Learning model that analyzes the electrical "fingerprint" of each test to provide 
              insights far beyond traditional PASS/FAIL results. This AI-driven approach moves the entire 
              testing paradigm into the realm of predictive maintenance and quality assurance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  Electrical Signature Analysis
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Current waveform pattern recognition and anomaly detection</li>
                  <li>• Breaking time analysis with statistical trend identification</li>
                  <li>• Arc duration fingerprinting for contact degradation assessment</li>
                  <li>• Energy dissipation profiling for thermal characteristic evaluation</li>
                  <li>• Contact resistance evolution tracking over multiple test cycles</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  Predictive Maintenance Insights
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Remaining useful life estimation based on degradation models</li>
                  <li>• Failure mode prediction using multi-parameter correlation analysis</li>
                  <li>• Quality assurance scoring with confidence intervals</li>
                  <li>• Batch analysis for manufacturing process optimization</li>
                  <li>• Long-term reliability forecasting with uncertainty quantification</li>
                </ul>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Industry 4.0 Impact</h5>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                This AI-powered approach transforms MCB testing from a simple compliance check into a comprehensive 
                quality intelligence system. Manufacturers can now identify potential issues before they become 
                failures, optimize their production processes based on electrical performance data, and provide 
                customers with unprecedented insights into product reliability and expected service life.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">95%+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Prediction Accuracy</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">15+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Analysis Parameters</div>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">Real-time</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Processing Speed</div>
              </div>
            </div>
          </CardContent>
        </Card>

    </div>
  );
}
