"use client"

import * as React from "react"
import {
  LayoutDashboard,
  ClipboardList,
  SlidersHorizontal,
  History,
  BrainCircuit,
  Cog,
  Users,
  GalleryVerticalEnd,
  Lightbulb,
  TestTube2,
  AlertTriangle,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is the navigation data for the MCB Testing System
const data = {
  teams: [
    {
      name: "AmpereX MCB Testing",
      logo: GalleryVerticalEnd,
      plan: "IEC 60898-1:2015 Compliant",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      description: "System status, live monitor, and summary of the last MCB test execution."
    },
    {
      title: "Standard Tests",
      url: "/standard-tests",
      icon: ClipboardList,
      description: "Pre-configured IEC 60898-1:2015 compliant test cases for MCB breaking capacity.",
      items: [
        {
          title: "Ics Breaking Capacity Test",
          url: "/tests/ics-breaking",
        },
        {
          title: "Overcurrent Protection Test",
          url: "/tests/overcurrent",
        },
        {
          title: "Short-Circuit Test (10kA)",
          url: "/tests/short-circuit",
        },
        {
          title: "Single Pole MCB Test",
          url: "/tests/single-pole",
        },
        {
          title: "Multi-Pole MCB Test",
          url: "/tests/multi-pole",
        },
      ],
    },
    {
      title: "Live Diagnostics",
      url: "/live-diagnostics",
      icon: SlidersHorizontal,
      description: "Real-time monitoring of R/XL circuit parameters, high-speed waveform analysis, and fault simulation controls."
    },
    {
      title: "Test History",
      url: "/test-history",
      icon: History,
      description: "Complete log of MCB test executions with IEC compliance reports and certification data."
    },
    {
      title: "AI Analytics",
      url: "/ai-analytics",
      icon: BrainCircuit,
      description: "Predictive maintenance analysis and MCB electrical signature health assessment for quality assurance."
    },
    {
      title: "System Settings",
      url: "/system-settings",
      icon: Cog,
      description: "PLC/Industrial PC configuration, high-current power source settings, and safety system parameters.",
      items: [
        {
          title: "PLC Configuration",
          url: "/system-settings/plc",
        },
        {
          title: "Power Source Settings",
          url: "/system-settings/power-source",
        },
        {
          title: "R/XL Circuit Banks",
          url: "/system-settings/circuit-banks",
        },
        {
          title: "Safety Systems",
          url: "/system-settings/safety",
        },
        {
          title: "Calibration",
          url: "/system-settings/calibration",
        },
      ],
    },
    {
      title: "The Team",
      url: "/team",
      icon: Users,
      description: "Development team members, their roles, and the project vision for automated MCB testing.",
      items: [
        {
          title: "Team Overview",
          url: "/team",
        },
        {
          title: "Contributors",
          url: "/team/contributors",
        },
        {
          title: "Project Vision",
          url: "/team/vision",
        },
        {
          title: "Technical Specs",
          url: "/team/specs",
        },
      ],
    },
  ],
  project: [
    {
      name: "IEC 60898-1 Compliance",
      url: "/projects/iec-compliance",
      icon: ClipboardList,
    },
    {
      name: "High-Current Testing",
      url: "/projects/high-current",
      icon: BrainCircuit,
    },
    {
      name: "Safety Monitoring",
      url: "/projects/safety",
      icon: SlidersHorizontal,
    },
    {
      name: "Problem Statement",
      url: "/projects/problem-statement",
      icon: AlertTriangle,
    },
    {
      name: "Our Proposed Solution",
      url: "/projects/solution",
      icon: Lightbulb,
    },
    {
      name: "Test Cases & Diagnostics",
      url: "/projects/diagnostics",
      icon: TestTube2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Get user data from localStorage
  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : {
    name: "Guest User",
    email: "guest@example.com",
    avatar: "/avatars/guest.jpg",
  };

  // Use proper name and email from user data
  const displayUser = {
    name: user.username || user.name || "Guest User",
    email: user.email || "guest@example.com",
    avatar: user.avatar || "/avatars/default.jpg"
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects project={data.project} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={displayUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
