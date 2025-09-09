import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Clock, 
  Shield, 
  Zap, 
  Target, 
  TrendingDown,
  Users,
  DollarSign,
  FileX,
  Settings,
  Activity,
  CheckCircle
} from "lucide-react";

export function ProblemStatementPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Problem Statement
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          Automated High-Current Short-Circuit Test System for MCB to comply with IEC 60898-1:2015
        </p>
        <div className="flex justify-center gap-2 flex-wrap">
          <Badge variant="destructive" className="text-sm px-3 py-1">
            Critical Safety Issue
          </Badge>
          <Badge variant="outline" className="text-sm px-3 py-1">
            Industry Challenge
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            Innovation Opportunity
          </Badge>
        </div>
      </div>

      {/* Background Section */}
      <Card className="col-span-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
            <Target className="h-6 w-6" />
            Background: The Critical Role of MCB Testing
          </CardTitle>
          <CardDescription className="text-blue-600 dark:text-blue-400">
            Why reliable Miniature Circuit Breaker testing is fundamental to electrical safety
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border space-y-3">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              The safety of electrical installations worldwide hinges on reliable Miniature Circuit Breakers (MCBs). 
              IEC 60898-1:2015 mandates rigorous short-circuit breaking capacity tests, crucial for ensuring 
              MCBs perform correctly under severe fault conditions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <strong>The Stakes:</strong> Electrical installations in homes, offices, and industrial facilities 
              depend on MCBs to protect against dangerous fault currents. A single failure in MCB testing can 
              lead to equipment damage, fires, or loss of life when the breaker fails to interrupt a short circuit 
              in real-world conditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10,000A</div>
                <div className="text-xs text-blue-700 dark:text-blue-300">Maximum fault current MCBs must interrupt</div>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Millions</div>
                <div className="text-xs text-indigo-700 dark:text-indigo-300">MCBs tested annually worldwide</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Critical</div>
                <div className="text-xs text-purple-700 dark:text-purple-300">Importance for electrical safety</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Problems Section */}
      <Card className="col-span-full bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
            <AlertTriangle className="h-6 w-6" />
            Existing Problems: Critical Flaws in Current Testing Methods
          </CardTitle>
          <CardDescription className="text-red-600 dark:text-red-400">
            Current manual and semi-automated testing methods create significant safety and accuracy issues
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-red-800 dark:text-red-200 font-medium">
            Current manual or semi-automated testing methods for MCBs introduce significant challenges that 
            compromise safety, accuracy, and efficiency in the MCB certification process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Safety Issues */}
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader className="bg-red-50 dark:bg-red-900/20">
                <CardTitle className="text-red-800 dark:text-red-200 flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5" />
                  Elevated Safety Risks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">High-Energy Exposure</h5>
                      <p className="text-xs text-red-700 dark:text-red-300">
                        Personnel exposed to dangerous fault currents up to 10,000A during manual test setup and execution
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">Human Error Risk</h5>
                      <p className="text-xs text-red-700 dark:text-red-300">
                        Manual configuration increases risk of incorrect setup leading to equipment damage or injury
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">Arc Flash Hazards</h5>
                      <p className="text-xs text-red-700 dark:text-red-300">
                        Uncontrolled exposure to violent plasma arcs during MCB interruption testing
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accuracy Issues */}
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader className="bg-orange-50 dark:bg-orange-900/20">
                <CardTitle className="text-orange-800 dark:text-orange-200 flex items-center gap-2 text-lg">
                  <Target className="h-5 w-5" />
                  Imprecise Control Systems
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-orange-800 dark:text-orange-200">Manual R/XL Configuration</h5>
                      <p className="text-xs text-orange-700 dark:text-orange-300">
                        Resistive and inductive circuit configurations lack precision and repeatability
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-orange-800 dark:text-orange-200">Parameter Drift</h5>
                      <p className="text-xs text-orange-700 dark:text-orange-300">
                        Inability to maintain consistent test conditions across multiple test cycles
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileX className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-orange-800 dark:text-orange-200">Measurement Errors</h5>
                      <p className="text-xs text-orange-700 dark:text-orange-300">
                        Manual data collection introduces timing errors and measurement inaccuracies
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Efficiency Issues */}
            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader className="bg-yellow-50 dark:bg-yellow-900/20">
                <CardTitle className="text-yellow-800 dark:text-yellow-200 flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5" />
                  Increased Test Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <TrendingDown className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">Setup Time Overhead</h5>
                      <p className="text-xs text-yellow-700 dark:text-yellow-300">
                        Extensive manual configuration time between test procedures reduces throughput
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">Operator Dependency</h5>
                      <p className="text-xs text-yellow-700 dark:text-yellow-300">
                        Skilled operator availability becomes bottleneck in testing operations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileX className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">Manual Documentation</h5>
                      <p className="text-xs text-yellow-700 dark:text-yellow-300">
                        Time-consuming manual report generation and compliance documentation
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Economic Impact */}
            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
                <CardTitle className="text-purple-800 dark:text-purple-200 flex items-center gap-2 text-lg">
                  <DollarSign className="h-5 w-5" />
                  Economic & Quality Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <TrendingDown className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-purple-800 dark:text-purple-200">Reduced Accuracy</h5>
                      <p className="text-xs text-purple-700 dark:text-purple-300">
                        Inconsistent test results impact MCB certification quality and reliability
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-purple-800 dark:text-purple-200">Higher Operational Costs</h5>
                      <p className="text-xs text-purple-700 dark:text-purple-300">
                        Increased labor requirements and extended test cycles drive up certification costs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileX className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-purple-800 dark:text-purple-200">Compliance Risks</h5>
                      <p className="text-xs text-purple-700 dark:text-purple-300">
                        Manual processes increase risk of non-compliance with IEC 60898-1 requirements
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Description */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-600" />
            Required Solution: Automated High-Current Testing System
          </CardTitle>
          <CardDescription>
            Comprehensive requirements for addressing current testing limitations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This proposal outlines an automated machine to precisely control test currents, voltages, and circuit impedance, 
            executing high-current short-circuit tests on single pole, SPN, DP, TP, and FP MCBs (0.5A-63A) per IEC 60898-1:2015.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Core System Requirements</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Automated R and XL Circuit Combination Module</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      High-power, automatically switched banks for precise power factor control
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">High-Current Power Source</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Transformer-based system delivering up to 10,000A with precise control
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Universal Test Station</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Universal MCB mounting with critical arc chute for safety
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Advanced Control Features</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Sophisticated Control and Data Acquisition</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      PLC/Industrial PC manages tests, captures high-speed waveforms, and analyzes data
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">User-Friendly HMI</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Parameter input interface with automatic report generation capabilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Comprehensive Safety Systems</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Integrated safety protocols for high-energy testing operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expected Solution */}
      <Card className="col-span-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
            <Target className="h-6 w-6" />
            Expected Solution Impact
          </CardTitle>
          <CardDescription className="text-green-600 dark:text-green-400">
            Transforming MCB testing through automation and precision control
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-green-800 dark:text-green-200 font-medium">
            The automated machine will perform MCB breaking capacity tests with unprecedented accuracy and repeatability, 
            fully adhering to IEC 60898-1:2015. This automation will ensure precise parameter control, significantly 
            reduce test times, and enhance safety by minimizing human intervention during high-energy fault conditions.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <strong>Ultimate Goal:</strong> This state-of-the-art facility will provide a reliable platform for MCB certification, 
              contributing directly to electrical safety and quality assurance. The system will bridge the gap between 
              current manual processes and the precision required for modern electrical safety standards, ensuring that 
              every MCB tested meets the highest standards of reliability and safety.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div className="text-xs text-green-700 dark:text-green-300">IEC Compliance</div>
            </div>
            <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">75%</div>
              <div className="text-xs text-green-700 dark:text-green-300">Time Reduction</div>
            </div>
            <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">Zero</div>
              <div className="text-xs text-green-700 dark:text-green-300">Safety Incidents</div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
