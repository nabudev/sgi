"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Examenes() {
  const [examen, setExamen] = useState({ materia: "", fecha: "", hora: "", profesor: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar el examen
    console.log("Examen guardado:", examen)
    setExamen({ materia: "", fecha: "", hora: "", profesor: "" })
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Exámenes</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="materia">Materia</Label>
          <Select onValueChange={(value) => setExamen({ ...examen, materia: value })}>
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
          <Label htmlFor="fecha">Fecha</Label>
          <Input
            id="fecha"
            type="date"
            value={examen.fecha}
            onChange={(e) => setExamen({ ...examen, fecha: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="hora">Hora</Label>
          <Input
            id="hora"
            type="time"
            value={examen.hora}
            onChange={(e) => setExamen({ ...examen, hora: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="profesor">Profesor</Label>
          <Input
            id="profesor"
            value={examen.profesor}
            onChange={(e) => setExamen({ ...examen, profesor: e.target.value })}
            required
          />
        </div>
        <Button type="submit">Guardar Examen</Button>
      </form>
    </div>
  )
}

