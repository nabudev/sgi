"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Alumno = {
  id: string
  nombre: string
  carrera: string
}

type AlumnoModalProps = {
  isOpen: boolean
  onClose: () => void
  onSave: (alumno: Alumno) => void
  alumno: Alumno | null
}

const carreras = ["Ingeniería Informática", "Medicina", "Derecho"]

export function AlumnoModal({ isOpen, onClose, onSave, alumno }: AlumnoModalProps) {
  const [nombre, setNombre] = useState("")
  const [carrera, setCarrera] = useState("")

  useEffect(() => {
    if (alumno) {
      setNombre(alumno.nombre)
      setCarrera(alumno.carrera)
    } else {
      setNombre("")
      setCarrera("")
    }
  }, [alumno])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: alumno?.id || "",
      nombre,
      carrera,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{alumno ? "Editar Alumno" : "Añadir Alumno"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="nombre">Nombre del Alumno</Label>
              <Input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="carrera">Carrera</Label>
              <Select value={carrera} onValueChange={setCarrera} required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una carrera" />
                </SelectTrigger>
                <SelectContent>
                  {carreras.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Guardar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

