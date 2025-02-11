"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Examen = {
  id: string
  materia: string
  fecha: string
  hora: string
  profesor: string
}

type ExamenModalProps = {
  isOpen: boolean
  onClose: () => void
  onSave: (examen: Examen) => void
  examen: Examen | null
}

const materias = ["Matemáticas Avanzadas", "Anatomía", "Derecho Civil"]

export function ExamenModal({ isOpen, onClose, onSave, examen }: ExamenModalProps) {
  const [materia, setMateria] = useState("")
  const [fecha, setFecha] = useState("")
  const [hora, setHora] = useState("")
  const [profesor, setProfesor] = useState("")

  useEffect(() => {
    if (examen) {
      setMateria(examen.materia)
      setFecha(examen.fecha)
      setHora(examen.hora)
      setProfesor(examen.profesor)
    } else {
      setMateria("")
      setFecha("")
      setHora("")
      setProfesor("")
    }
  }, [examen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: examen?.id || "",
      materia,
      fecha,
      hora,
      profesor,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{examen ? "Editar Examen" : "Añadir Examen"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
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
              <Label htmlFor="fecha">Fecha</Label>
              <Input id="fecha" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="hora">Hora</Label>
              <Input id="hora" type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="profesor">Profesor</Label>
              <Input id="profesor" value={profesor} onChange={(e) => setProfesor(e.target.value)} required />
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

