"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Alumnos() {
  const [alumno, setAlumno] = useState({ nombre: "", carrera: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar el alumno
    console.log("Alumno guardado:", alumno)
    setAlumno({ nombre: "", carrera: "" })
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Alumnos</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="nombre">Nombre del Alumno</Label>
          <Input
            id="nombre"
            value={alumno.nombre}
            onChange={(e) => setAlumno({ ...alumno, nombre: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="carrera">Carrera</Label>
          <Select onValueChange={(value) => setAlumno({ ...alumno, carrera: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una carrera" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ingenieria">Ingeniería</SelectItem>
              <SelectItem value="medicina">Medicina</SelectItem>
              <SelectItem value="derecho">Derecho</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Guardar Alumno</Button>
      </form>
    </div>
  )
}

