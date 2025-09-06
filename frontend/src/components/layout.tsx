import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router-dom"

interface LayoutProps {
  children?: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <div className="flex items-center gap-2 px-6 py-3 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <SidebarTrigger className="-ml-1" />
          <div className="h-4 w-px bg-sidebar-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Building Your Application</span>
            <span>/</span>
            <span>Dashboard</span>
          </div>
        </div>
        <div className="p-6">
          {children || <Outlet />}
        </div>
      </main>
    </SidebarProvider>
  )
}
