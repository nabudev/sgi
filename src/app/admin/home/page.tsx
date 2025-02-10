"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Tipos para nuestros datos
type Carrera = {
  nombre: string
  inscriptos: number
}

type Estadisticas = {
  totalAlumnos: number
  carrerasInscriptos: Carrera[]
  solicitudesAceptadas: number
  solicitudesRechazadas: number
}

// Datos de ejemplo
const estadisticasIniciales: Estadisticas = {
  totalAlumnos: 1500,
  carrerasInscriptos: [
    { nombre: "Ingeniería", inscriptos: 500 },
    { nombre: "Medicina", inscriptos: 400 },
    { nombre: "Derecho", inscriptos: 300 },
    { nombre: "Economía", inscriptos: 200 },
    { nombre: "Psicología", inscriptos: 100 },
  ],
  solicitudesAceptadas: 1200,
  solicitudesRechazadas: 300,
}

export default function Home() {
  const [estadisticas, setEstadisticas] = useState<Estadisticas | null>(null)

  useEffect(() => {
    // Aquí simularemos una carga de datos
    setTimeout(() => {
      setEstadisticas(estadisticasIniciales)
    }, 1000)
  }, [])

  if (!estadisticas) {
    return <div>Cargando estadísticas...</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Panel de Control</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alumnos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{estadisticas.totalAlumnos}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solicitudes Aceptadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{estadisticas.solicitudesAceptadas}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solicitudes Rechazadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{estadisticas.solicitudesRechazadas}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Inscriptos por Carrera</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={estadisticas.carrerasInscriptos}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nombre" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="inscriptos" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

