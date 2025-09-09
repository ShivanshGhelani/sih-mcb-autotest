/**
 * Dashboard Data Types and Mock Data for SIH MCB Testing System
 * 
 * This file contains all TypeScript interfaces and dummy data for the
 * Automated High-Current MCB Test System dashboard and related components.
 * 
 * @author SIH MCB Testing Team
 * @version 1.0.0
 */

// ===== CONSTANTS =====

export const SystemStatus = {
  READY: 'READY',
  TESTING: 'TESTING',
  FAULT: 'FAULT',
  MAINTENANCE: 'MAINTENANCE',
  CALIBRATING: 'CALIBRATING'
} as const;

export const TestResult = {
  PASS: 'PASS',
  FAIL: 'FAIL',
  PENDING: 'PENDING',
  ABORTED: 'ABORTED'
} as const;

export const TestType = {
  ICS_BREAKING_CAPACITY: 'ICS_BREAKING_CAPACITY',
  OVERCURRENT_PROTECTION: 'OVERCURRENT_PROTECTION',
  SHORT_CIRCUIT_10KA: 'SHORT_CIRCUIT_10KA',
  SINGLE_POLE_MCB: 'SINGLE_POLE_MCB',
  MULTI_POLE_MCB: 'MULTI_POLE_MCB',
  THERMAL_OVERLOAD: 'THERMAL_OVERLOAD'
} as const;

export const MCBRating = {
  A_0_5: '0.5A',
  A_1: '1A',
  A_2: '2A',
  A_4: '4A',
  A_6: '6A',
  A_10: '10A',
  A_16: '16A',
  A_20: '20A',
  A_25: '25A',
  A_32: '32A',
  A_40: '40A',
  A_50: '50A',
  A_63: '63A'
} as const;

export const AIVerdict = {
  HEALTHY: 'HEALTHY',
  ANOMALY_DETECTED: 'ANOMALY_DETECTED',
  DEGRADATION_WARNING: 'DEGRADATION_WARNING',
  MAINTENANCE_REQUIRED: 'MAINTENANCE_REQUIRED'
} as const;

// ===== TYPE DEFINITIONS =====

export type SystemStatusType = typeof SystemStatus[keyof typeof SystemStatus];
export type TestResultType = typeof TestResult[keyof typeof TestResult];
export type TestTypeType = typeof TestType[keyof typeof TestType];
export type MCBRatingType = typeof MCBRating[keyof typeof MCBRating];
export type AIVerdictType = typeof AIVerdict[keyof typeof AIVerdict];

// ===== INTERFACES =====

export interface LiveMetrics {
  timestamp: string;
  voltage: number; // Volts
  current: number; // Amperes
  power: number; // Watts
  frequency: number; // Hz
  temperature: number; // Celsius
  resistance: number; // Ohms
  reactance: number; // Ohms
  breakingCurrent: number; // Amperes (instantaneous)
  arcVoltage: number; // Volts
  contactResistance: number; // Milliohms
}

export interface TestParameters {
  testVoltage: number; // Volts
  prospectiveCurrent: number; // Amperes
  powerFactor: number; // Decimal (0.0-1.0)
  numberOfOperations: number;
  testDuration: number; // Seconds
  ambientTemperature: number; // Celsius
  humidity: number; // Percentage
}

export interface TestResult_Data {
  testId: string;
  testType: TestTypeType;
  mcbRating: MCBRatingType;
  manufacturer: string;
  modelNumber: string;
  serialNumber: string;
  testDate: string;
  operator: string;
  result: TestResultType;
  parameters: TestParameters;
  measurements: {
    peakCurrent: number; // Amperes
    breakingTime: number; // Milliseconds
    arcDuration: number; // Milliseconds
    energyDissipated: number; // Joules
    contactWear: number; // Micrometers
    insulationResistance: number; // Megohms
  };
  complianceStandard: string;
  failureReason?: string;
  notes?: string;
  duration: number; // Seconds
  attachments?: string[]; // File paths to waveforms, photos, etc.
}

export interface SystemStatusInfo {
  status: SystemStatusType;
  lastUpdated: string;
  uptime: number; // Hours
  version: string;
  components: {
    plcController: boolean;
    powerSource: boolean;
    circuitBanks: boolean;
    safetySystem: boolean;
    dataAcquisition: boolean;
    coolingSystem: boolean;
  };
  activeAlarms: string[];
  nextMaintenance: string;
}

export interface AIAnalysisResult {
  analysisId: string;
  timestamp: string;
  testId: string;
  verdict: AIVerdictType;
  confidenceLevel: number; // Percentage
  predictiveInsights: {
    estimatedRemainingLife: number; // Percentage
    performanceTrend: 'IMPROVING' | 'STABLE' | 'DEGRADING';
    anomalyScore: number; // 0-100
    maintenanceRecommendation: string;
  };
  riskFactors: {
    factor: string;
    severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    description: string;
  }[];
  historicalComparison: {
    averagePerformance: number;
    deviationFromNorm: number; // Percentage
    similarFailures: number;
  };
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  testType: TestTypeType;
  estimatedDuration: number; // Minutes
  icon: string; // Lucide icon name
  isAvailable: boolean;
  requiredMCBRating?: MCBRatingType[];
}

export interface DashboardStats {
  testsExecuted: number;
  activeSessions: number;
  systemUptime: number; // Percentage
  complianceRate: number; // Percentage
  averageTestDuration: number; // Minutes
  totalEnergyConsumed: number; // kWh
  passFailRatio: {
    pass: number;
    fail: number;
  };
  monthlyTrends: {
    month: string;
    tests: number;
    passRate: number;
  }[];
}

export interface RecentActivity {
  id: string;
  timestamp: string;
  type: 'TEST_COMPLETED' | 'SYSTEM_ALERT' | 'MAINTENANCE' | 'CALIBRATION' | 'USER_ACTION';
  title: string;
  description: string;
  severity: 'INFO' | 'WARNING' | 'ERROR' | 'SUCCESS';
  user?: string;
  relatedTestId?: string;
}

// ===== MAIN DASHBOARD DATA INTERFACE =====

export interface DashboardData {
  systemStatus: SystemStatusInfo;
  liveMetrics: LiveMetrics;
  lastTestResult: TestResult_Data;
  testHistory: TestResult_Data[];
  aiAnalysis: AIAnalysisResult;
  quickActions: QuickAction[];
  dashboardStats: DashboardStats;
  recentActivity: RecentActivity[];
}

// ===== MOCK DATA =====

export const mockDashboardData: DashboardData = {
  // System Status
  systemStatus: {
    status: SystemStatus.READY,
    lastUpdated: new Date().toISOString(),
    uptime: 247.5,
    version: "v2.1.4",
    components: {
      plcController: true,
      powerSource: true,
      circuitBanks: true,
      safetySystem: true,
      dataAcquisition: true,
      coolingSystem: true
    },
    activeAlarms: [],
    nextMaintenance: "2025-09-15T08:00:00Z"
  },

  // Live Metrics (Current Sensor Data)
  liveMetrics: {
    timestamp: new Date().toISOString(),
    voltage: 230.4,
    current: 0.0,
    power: 0.0,
    frequency: 50.02,
    temperature: 23.8,
    resistance: 0.0,
    reactance: 0.0,
    breakingCurrent: 0.0,
    arcVoltage: 0.0,
    contactResistance: 0.0
  },

  // Last Test Result
  lastTestResult: {
    testId: "MCB-2025-09-09-001",
    testType: TestType.ICS_BREAKING_CAPACITY,
    mcbRating: MCBRating.A_32,
    manufacturer: "Schneider Electric",
    modelNumber: "C60N-C32",
    serialNumber: "SE2025090901",
    testDate: "2025-09-09T08:45:32Z",
    operator: "admin",
    result: TestResult.PASS,
    parameters: {
      testVoltage: 230,
      prospectiveCurrent: 6000,
      powerFactor: 0.85,
      numberOfOperations: 3,
      testDuration: 45,
      ambientTemperature: 23.5,
      humidity: 65
    },
    measurements: {
      peakCurrent: 5947,
      breakingTime: 8.2,
      arcDuration: 12.5,
      energyDissipated: 2850,
      contactWear: 2.1,
      insulationResistance: 125.8
    },
    complianceStandard: "IEC 60898-1:2015",
    duration: 47,
    notes: "Test completed successfully. All parameters within specification."
  },

  // Test History (5 previous tests with mixed results)
  testHistory: [
    {
      testId: "MCB-2025-09-08-005",
      testType: TestType.SHORT_CIRCUIT_10KA,
      mcbRating: MCBRating.A_16,
      manufacturer: "ABB",
      modelNumber: "S201-C16",
      serialNumber: "ABB2025090801",
      testDate: "2025-09-08T16:20:15Z",
      operator: "engineer",
      result: TestResult.FAIL,
      parameters: {
        testVoltage: 230,
        prospectiveCurrent: 10000,
        powerFactor: 0.9,
        numberOfOperations: 1,
        testDuration: 30,
        ambientTemperature: 24.2,
        humidity: 68
      },
      measurements: {
        peakCurrent: 9650,
        breakingTime: 15.8,
        arcDuration: 28.3,
        energyDissipated: 4200,
        contactWear: 8.7,
        insulationResistance: 89.2
      },
      complianceStandard: "IEC 60898-1:2015",
      failureReason: "Breaking time exceeded maximum limit (15ms)",
      duration: 32,
      notes: "Contact degradation observed. Recommend replacement."
    },
    {
      testId: "MCB-2025-09-08-004",
      testType: TestType.OVERCURRENT_PROTECTION,
      mcbRating: MCBRating.A_25,
      manufacturer: "Siemens",
      modelNumber: "5SY4125-6",
      serialNumber: "SIE2025090802",
      testDate: "2025-09-08T14:15:22Z",
      operator: "operator",
      result: TestResult.PASS,
      parameters: {
        testVoltage: 230,
        prospectiveCurrent: 500,
        powerFactor: 0.95,
        numberOfOperations: 5,
        testDuration: 120,
        ambientTemperature: 23.8,
        humidity: 62
      },
      measurements: {
        peakCurrent: 487,
        breakingTime: 2.1,
        arcDuration: 3.8,
        energyDissipated: 150,
        contactWear: 0.3,
        insulationResistance: 145.6
      },
      complianceStandard: "IEC 60898-1:2015",
      duration: 125,
      notes: "Excellent performance. All parameters nominal."
    },
    {
      testId: "MCB-2025-09-07-008",
      testType: TestType.MULTI_POLE_MCB,
      mcbRating: MCBRating.A_40,
      manufacturer: "Legrand",
      modelNumber: "DX3-C40-3P",
      serialNumber: "LEG2025090701",
      testDate: "2025-09-07T11:30:45Z",
      operator: "engineer",
      result: TestResult.PASS,
      parameters: {
        testVoltage: 400,
        prospectiveCurrent: 4500,
        powerFactor: 0.8,
        numberOfOperations: 2,
        testDuration: 60,
        ambientTemperature: 25.1,
        humidity: 70
      },
      measurements: {
        peakCurrent: 4389,
        breakingTime: 6.5,
        arcDuration: 9.2,
        energyDissipated: 1950,
        contactWear: 1.8,
        insulationResistance: 132.4
      },
      complianceStandard: "IEC 60898-1:2015",
      duration: 63,
      notes: "3-pole MCB test successful. Balanced operation across all poles."
    },
    {
      testId: "MCB-2025-09-07-007",
      testType: TestType.THERMAL_OVERLOAD,
      mcbRating: MCBRating.A_10,
      manufacturer: "Hager",
      modelNumber: "MCN110",
      serialNumber: "HAG2025090701",
      testDate: "2025-09-07T09:45:12Z",
      operator: "viewer",
      result: TestResult.FAIL,
      parameters: {
        testVoltage: 230,
        prospectiveCurrent: 200,
        powerFactor: 1.0,
        numberOfOperations: 1,
        testDuration: 300,
        ambientTemperature: 26.5,
        humidity: 75
      },
      measurements: {
        peakCurrent: 195,
        breakingTime: 1800000, // 30 minutes in milliseconds
        arcDuration: 0.0,
        energyDissipated: 85,
        contactWear: 0.0,
        insulationResistance: 156.8
      },
      complianceStandard: "IEC 60898-1:2015",
      failureReason: "Thermal trip time out of specification (required: 1200-1800s, actual: 1800s)",
      duration: 305,
      notes: "Thermal element response too slow. Calibration required."
    },
    {
      testId: "MCB-2025-09-06-012",
      testType: TestType.SINGLE_POLE_MCB,
      mcbRating: MCBRating.A_6,
      manufacturer: "Schneider Electric",
      modelNumber: "C60N-C6",
      serialNumber: "SE2025090601",
      testDate: "2025-09-06T15:22:38Z",
      operator: "admin",
      result: TestResult.PASS,
      parameters: {
        testVoltage: 230,
        prospectiveCurrent: 1000,
        powerFactor: 0.95,
        numberOfOperations: 3,
        testDuration: 35,
        ambientTemperature: 22.8,
        humidity: 58
      },
      measurements: {
        peakCurrent: 987,
        breakingTime: 4.2,
        arcDuration: 6.1,
        energyDissipated: 420,
        contactWear: 0.8,
        insulationResistance: 168.9
      },
      complianceStandard: "IEC 60898-1:2015",
      duration: 37,
      notes: "Standard single-pole test. Performance within expected range."
    }
  ],

  // AI Analysis
  aiAnalysis: {
    analysisId: "AI-2025-09-09-001",
    timestamp: new Date().toISOString(),
    testId: "MCB-2025-09-09-001",
    verdict: AIVerdict.HEALTHY,
    confidenceLevel: 94.7,
    predictiveInsights: {
      estimatedRemainingLife: 87.3,
      performanceTrend: 'STABLE',
      anomalyScore: 12.5,
      maintenanceRecommendation: "Continue normal operation. Next inspection in 6 months."
    },
    riskFactors: [
      {
        factor: "Contact Resistance",
        severity: 'LOW',
        description: "Contact resistance within normal range but showing slight upward trend"
      },
      {
        factor: "Arc Duration",
        severity: 'LOW',
        description: "Arc extinction time consistent with previous tests"
      }
    ],
    historicalComparison: {
      averagePerformance: 92.8,
      deviationFromNorm: 2.1,
      similarFailures: 0
    }
  },

  // Quick Actions
  quickActions: [
    {
      id: "qa-001",
      title: "ICS Breaking Capacity",
      description: "Standard breaking capacity test per IEC 60898-1",
      testType: TestType.ICS_BREAKING_CAPACITY,
      estimatedDuration: 45,
      icon: "Zap",
      isAvailable: true,
      requiredMCBRating: [MCBRating.A_16, MCBRating.A_32, MCBRating.A_40, MCBRating.A_63]
    },
    {
      id: "qa-002",
      title: "Short Circuit 10kA",
      description: "High current short circuit interruption test",
      testType: TestType.SHORT_CIRCUIT_10KA,
      estimatedDuration: 30,
      icon: "AlertTriangle",
      isAvailable: true,
      requiredMCBRating: [MCBRating.A_32, MCBRating.A_40, MCBRating.A_50, MCBRating.A_63]
    },
    {
      id: "qa-003",
      title: "Overcurrent Protection",
      description: "Verify overcurrent protection characteristics",
      testType: TestType.OVERCURRENT_PROTECTION,
      estimatedDuration: 90,
      icon: "Shield",
      isAvailable: true
    },
    {
      id: "qa-004",
      title: "Thermal Overload",
      description: "Long-duration thermal trip test",
      testType: TestType.THERMAL_OVERLOAD,
      estimatedDuration: 300,
      icon: "Thermometer",
      isAvailable: false // System cooling required
    }
  ],

  // Dashboard Statistics
  dashboardStats: {
    testsExecuted: 1247,
    activeSessions: 0,
    systemUptime: 99.8,
    complianceRate: 94.2,
    averageTestDuration: 67.5,
    totalEnergyConsumed: 2847.6,
    passFailRatio: {
      pass: 1174,
      fail: 73
    },
    monthlyTrends: [
      { month: "Jan", tests: 89, passRate: 92.1 },
      { month: "Feb", tests: 107, passRate: 94.4 },
      { month: "Mar", tests: 134, passRate: 91.8 },
      { month: "Apr", tests: 156, passRate: 95.5 },
      { month: "May", tests: 142, passRate: 93.7 },
      { month: "Jun", tests: 178, passRate: 96.1 },
      { month: "Jul", tests: 165, passRate: 94.8 },
      { month: "Aug", tests: 189, passRate: 95.2 },
      { month: "Sep", tests: 87, passRate: 94.2 }
    ]
  },

  // Recent Activity
  recentActivity: [
    {
      id: "act-001",
      timestamp: "2025-09-09T08:45:32Z",
      type: 'TEST_COMPLETED',
      title: "ICS Breaking Capacity Test Completed",
      description: "MCB 32A test passed all specifications",
      severity: 'SUCCESS',
      user: "admin",
      relatedTestId: "MCB-2025-09-09-001"
    },
    {
      id: "act-002",
      timestamp: "2025-09-09T08:15:22Z",
      type: 'CALIBRATION',
      title: "System Calibration Started",
      description: "R/XL circuit banks calibration in progress",
      severity: 'INFO',
      user: "engineer"
    },
    {
      id: "act-003",
      timestamp: "2025-09-08T16:25:45Z",
      type: 'TEST_COMPLETED',
      title: "Short Circuit Test Failed",
      description: "MCB 16A exceeded breaking time limit",
      severity: 'ERROR',
      user: "engineer",
      relatedTestId: "MCB-2025-09-08-005"
    },
    {
      id: "act-004",
      timestamp: "2025-09-08T14:20:12Z",
      type: 'TEST_COMPLETED',
      title: "Overcurrent Protection Test Passed",
      description: "MCB 25A performed within specifications",
      severity: 'SUCCESS',
      user: "operator",
      relatedTestId: "MCB-2025-09-08-004"
    },
    {
      id: "act-005",
      timestamp: "2025-09-08T09:30:00Z",
      type: 'MAINTENANCE',
      title: "Preventive Maintenance Completed",
      description: "Cooling system serviced and filters replaced",
      severity: 'INFO',
      user: "admin"
    }
  ]
};

export default mockDashboardData;
