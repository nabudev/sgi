"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"

// Tipo para las inscripciones
type Inscripcion = {
  id: string
  alumno: string
  examen: string
  fecha: string
  estado: "pendiente" | "confirmada" | "rechazada"
}

// Datos de ejemplo
const inscripcionesIniciales: Inscripcion[] = [
  { id: "1", alumno: "Juan Pérez", examen: "Matemáticas Avanzadas", fecha: "2023-06-15", estado: "pendiente" },
  { id: "2", alumno: "María García", examen: "Física Cuántica", fecha: "2023-06-16", estado: "pendiente" },
  { id: "3", alumno: "Carlos López", examen: "Literatura Contemporánea", fecha: "2023-06-17", estado: "pendiente" },
]

export default function Inscripciones() {
  const [inscripciones, setInscripciones] = useState<Inscripcion[]>([])

  useEffect(() => {
    setInscripciones(inscripcionesIniciales)
  }, [])

  const handleConfirmar = (id: string) => {
    setInscripciones(
      inscripciones.map((inscripcion) =>
        inscripcion.id === id ? { ...inscripcion, estado: "confirmada" } : inscripcion,
      ),
    )
  }

  const handleRechazar = (id: string) => {
    setInscripciones(
      inscripciones.map((inscripcion) =>
        inscripcion.id === id ? { ...inscripcion, estado: "rechazada" } : inscripcion,
      ),
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inscripciones</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Alumno</TableHead>
            <TableHead>Examen</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inscripciones.map((inscripcion) => (
            <TableRow key={inscripcion.id}>
              <TableCell>{inscripcion.alumno}</TableCell>
              <TableCell>{inscripcion.examen}</TableCell>
              <TableCell>{inscripcion.fecha}</TableCell>
              <TableCell>{inscripcion.estado}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleConfirmar(inscripcion.id)}
                    disabled={inscripcion.estado !== "pendiente"}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleRechazar(inscripcion.id)}
                    disabled={inscripcion.estado !== "pendiente"}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


