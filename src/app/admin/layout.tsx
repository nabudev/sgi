import { AdminSidebar } from "@/components/panel-administrador/Sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import type React from "react" // Added import for React

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex h-screen">
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

