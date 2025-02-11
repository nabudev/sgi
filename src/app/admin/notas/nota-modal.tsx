"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Nota = {
  id: string
  alumno: string
  materia: string
  calificacion: number
}

type NotaModalProps = {
  isOpen: boolean
  onClose: () => void
  onSave: (nota: Nota) => void
  nota: Nota | null
}

const alumnos = ["Juan Pérez", "María García", "Carlos López"]
const materias = ["Matemáticas", "Física", "Literatura"]

export function NotaModal({ isOpen, onClose, onSave, nota }: NotaModalProps) {
  const [alumno, setAlumno] = useState("")
  const [materia, setMateria] = useState("")
  const [calificacion, setCalificacion] = useState("")

  useEffect(() => {
    if (nota) {
      setAlumno(nota.alumno)
      setMateria(nota.materia)
      setCalificacion(nota.calificacion.toString())
    } else {
      setAlumno("")
      setMateria("")
      setCalificacion("")
    }
  }, [nota])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: nota?.id || "",
      alumno,
      materia,
      calificacion: Number.parseFloat(calificacion),
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{nota ? "Editar Nota" : "Añadir Nota"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="alumno">Alumno</Label>
              <Select value={alumno} onValueChange={setAlumno} required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un alumno" />
                </SelectTrigger>
                <SelectContent>
                  {alumnos.map((a) => (
                    <SelectItem key={a} value={a}>
                      {a}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="materia">Materia</Label>
              <Select value={materia} onValueChange={setMateria} required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una materia" />
                </SelectTrigger>
                <SelectContent>
                  {materias.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
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
                value={calificacion}
                onChange={(e) => setCalificacion(e.target.value)}
                required
              />
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

