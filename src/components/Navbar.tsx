"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import ProfileMenu from "@/components/ProfileMenu"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/calendario", label: "Calendario de exámenes" },
  { href: "/inscripciones", label: "Mis Inscripciones" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
          <img
            src="/img/logoissc.webp"
            alt="Descripción de la imagen"
            className="h-8 w-8"
          />
            <span className="ml-2 text-xl font-bold text-gray-900">ISSC | Exámenes</span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === link.href
                    ? "border-indigo-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <ProfileMenu />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">{/* Aquí iría el botón para el menú móvil */}</div>
        </div>
      </div>
    </nav>
  )
}

