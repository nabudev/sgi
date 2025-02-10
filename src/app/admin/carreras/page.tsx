"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Carreras() {
  const [carrera, setCarrera] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar la carrera
    console.log("Carrera guardada:", carrera)
    setCarrera("")
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Carreras</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="carrera">Nombre de la Carrera</Label>
          <Input id="carrera" value={carrera} onChange={(e) => setCarrera(e.target.value)} required />
        </div>
        <Button type="submit">Guardar Carrera</Button>
      </form>
    </div>
  )
}

