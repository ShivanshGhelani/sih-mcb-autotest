import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Lock, Eye, Zap, HardHat } from "lucide-react";

export function SafetyMonitoringPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Safety Monitoring & Protection
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Multi-layered safety architecture protecting personnel and equipment during high-energy testing
        </p>
        <Badge variant="destructive" className="text-lg px-4 py-2">
          NFPA 70E Compliant
        </Badge>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Primary Hazards Overview */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              Primary Testing Hazards
            </CardTitle>
            <CardDescription>
              Critical safety risks inherent in high-current MCB testing operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              High-current MCB testing involves extreme electrical energies that create multiple severe hazards 
              requiring comprehensive safety measures. Our multi-layered safety architecture addresses arc flash, 
              high-pressure waves, and molten metal hazards through engineered controls and protective systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-600">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Arc Flash
                </h4>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Extreme thermal energy release during fault interruption capable of causing severe burns and igniting combustible materials
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-600">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  High-Pressure Waves
                </h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Explosive pressure waves generated during arc formation can cause hearing damage and structural damage to equipment
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-600">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                  <HardHat className="h-4 w-4" />
                  Molten Metal
                </h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Vaporized conductor material and contact erosion products pose risks of severe burns and toxic gas inhalation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Physical Test Cell Enclosure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              Arc Flash Containment Enclosure
            </CardTitle>
            <CardDescription>
              Primary physical barrier for personnel protection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              The physical test cell enclosure serves as the primary barrier for arc flash containment, 
              designed to withstand and contain the extreme energies released during MCB fault testing.
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Enclosure Specifications</h5>
                <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                  <li>• Reinforced steel construction rated for 100 cal/cm² arc flash energy</li>
                  <li>• Laminated safety glass observation windows with UV protection</li>
                  <li>• Pressure relief venting system for controlled gas discharge</li>
                  <li>• Electromagnetic shielding to prevent interference</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">100 cal/cm²</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Arc Flash Rating</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">IP54</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Ingress Protection</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Failsafe Control System */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-green-600" />
              Failsafe Control Architecture
            </CardTitle>
            <CardDescription>
              Safety-rated PLC with independent control logic
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              The system implements a failsafe control architecture using a dedicated, safety-rated PLC 
              that operates independently from the supervisory HMI computer, ensuring safe operation 
              even in the event of primary system failures.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Safety PLC Features</h5>
                <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                  <li>• TÜV certified safety-rated controller (SIL 3)</li>
                  <li>• Redundant input/output channels for critical functions</li>
                  <li>• Watchdog timers and diagnostic monitoring</li>
                  <li>• Fail-safe logic ensuring safe state on any fault</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Independence Principle:</strong> The safety PLC operates completely independently 
                  from the supervisory HMI, ensuring that safety functions remain active even if the 
                  primary control system experiences failures or communication issues.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hardware Safety Features */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-purple-600" />
              Hardware & Software Safety Features
            </CardTitle>
            <CardDescription>
              Comprehensive safety systems ensuring personnel protection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our safety architecture incorporates multiple layers of hardware and software protection 
              systems, including interlocked access controls, controlled venting systems, and emergency 
              shutdown capabilities to ensure comprehensive personnel protection.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  Hardware Safety Systems
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• <strong>Interlocked Access Doors:</strong> Electromagnetic locks preventing access during energized conditions</li>
                  <li>• <strong>Emergency Power Off (EPO):</strong> Hardwired mushroom-head buttons for immediate system shutdown</li>
                  <li>• <strong>Controlled Gas Venting:</strong> Automated ventilation system for toxic gas removal</li>
                  <li>• <strong>Ground Fault Detection:</strong> Continuous monitoring of insulation integrity</li>
                  <li>• <strong>Arc Flash Detection:</strong> Optical sensors for rapid fault detection and isolation</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                  Software Safety Features
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• <strong>Pre-Test Safety Checks:</strong> Automated verification of all safety systems before test initiation</li>
                  <li>• <strong>Real-Time Monitoring:</strong> Continuous surveillance of critical safety parameters</li>
                  <li>• <strong>Automatic Fault Response:</strong> Immediate system shutdown on detection of unsafe conditions</li>
                  <li>• <strong>Safety Audit Trails:</strong> Comprehensive logging of all safety-related events and actions</li>
                  <li>• <strong>Operator Verification:</strong> Multi-step confirmation procedures for high-risk operations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Electrical Safety Procedures */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-yellow-600" />
              Automated Grounding & Verification
            </CardTitle>
            <CardDescription>
              NFPA 70E compliant electrical safety work conditions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Our system automatically establishes electrically safe work conditions through comprehensive 
              grounding and voltage verification procedures that comply with NFPA 70E electrical safety standards.
            </p>
            <div className="space-y-3">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Automated Safety Procedures</h5>
                <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
                  <li>• Visible disconnection of all energy sources</li>
                  <li>• Lockout/tagout (LOTO) of isolation devices</li>
                  <li>• Verification of zero energy state using calibrated instruments</li>
                  <li>• Application of safety grounds on all conductors</li>
                  <li>• Installation of protective barriers and warning signage</li>
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">&lt;5V</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Verified Safe Voltage</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">4-Point</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Verification Test</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">30sec</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Ground Application</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Response */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              Emergency Response Protocol
            </CardTitle>
            <CardDescription>
              Comprehensive emergency procedures and response systems
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Our emergency response protocol provides immediate and effective response to any safety incidents, 
              with automated systems and trained personnel procedures working together for optimal safety outcomes.
            </p>
            <div className="space-y-3">
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">Emergency Actions</h5>
                <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
                  <li>• Immediate power isolation and system shutdown</li>
                  <li>• Activation of fire suppression systems if required</li>
                  <li>• Emergency ventilation for toxic gas removal</li>
                  <li>• Automated notification of emergency services</li>
                  <li>• Personnel evacuation procedures and assembly points</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Response Time:</strong> All emergency systems are designed to activate within 100ms of 
                  fault detection, providing the fastest possible response to protect personnel and equipment 
                  from the severe hazards inherent in high-current testing operations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
