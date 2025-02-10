"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Materias() {
  const [materia, setMateria] = useState({ nombre: "", carrera: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar la materia
    console.log("Materia guardada:", materia)
    setMateria({ nombre: "", carrera: "" })
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Materias</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="nombre">Nombre de la Materia</Label>
          <Input
            id="nombre"
            value={materia.nombre}
            onChange={(e) => setMateria({ ...materia, nombre: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="carrera">Carrera</Label>
          <Select onValueChange={(value) => setMateria({ ...materia, carrera: value })}>
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
        <Button type="submit">Guardar Materia</Button>
      </form>
    </div>
  )
}

