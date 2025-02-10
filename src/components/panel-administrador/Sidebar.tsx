"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, GraduationCap, Users, ClipboardList, BookOpen, CalendarCheck, UserPlus } from "lucide-react"

const menuItems = [
  { name: "Inicio", icon: Home, path: "/admin/home" },
  { name: "Carreras", icon: GraduationCap, path: "/admin/carreras" },
  { name: "Alumnos", icon: Users, path: "/admin/alumnos" },
  { name: "Notas", icon: ClipboardList, path: "/admin/notas" },
  { name: "Materias", icon: BookOpen, path: "/admin/materias" },
  { name: "Exámenes", icon: CalendarCheck, path: "/admin/examenes" },
  { name: "Inscripciones", icon: UserPlus, path: "/admin/inscripciones" },
]

export function AdminSidebar() {
  const [userName] = useState("Admin User")
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-6 py-4">
          <Avatar>
            <AvatarImage src="/logo.png" alt="Logo" />
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <span className="text-lg font-semibold">{userName}</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={pathname === item.path}>
                <Link href={item.path} className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}


