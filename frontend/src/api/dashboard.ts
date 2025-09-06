import api from './base';
import type { AxiosResponse } from 'axios';

// Type definitions for dashboard data
export interface DashboardStats {
  testsExecuted: number;
  activeSessions: number;
  systemUptime: number;
  complianceRate: number;
}

export interface DashboardResponse {
  success: boolean;
  data: DashboardStats;
  message?: string;
}

// Dashboard API service
export const dashboard = {
  // Get dashboard statistics
  getStats: async (): Promise<DashboardStats> => {
    try {
      const response: AxiosResponse<DashboardResponse> = await api.get('/dashboard/stats');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      
      // Return mock data on error for development
      return {
        testsExecuted: 1234,
        activeSessions: 3,
        systemUptime: 99.8,
        complianceRate: 98.5
      };
    }
  }
};
