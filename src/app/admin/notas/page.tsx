"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Notas() {
  const [nota, setNota] = useState({ alumno: "", materia: "", calificacion: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar la nota
    console.log("Nota guardada:", nota)
    setNota({ alumno: "", materia: "", calificacion: "" })
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notas</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="alumno">Alumno</Label>
          <Select onValueChange={(value) => setNota({ ...nota, alumno: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un alumno" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="juan">Juan Pérez</SelectItem>
              <SelectItem value="maria">María García</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="materia">Materia</Label>
          <Select onValueChange={(value) => setNota({ ...nota, materia: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una materia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="matematicas">Matemáticas</SelectItem>
              <SelectItem value="fisica">Física</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="calificacion">Calificación</Label>
          <Input
            id="calificacion"
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={nota.calificacion}
            onChange={(e) => setNota({ ...nota, calificacion: e.target.value })}
            required
          />
        </div>
        <Button type="submit">Guardar Nota</Button>
      </form>
    </div>
  )
}

