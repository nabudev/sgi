"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

type Carrera = {
  id: string
  nombre: string
}

type CarreraModalProps = {
  isOpen: boolean
  onClose: () => void
  onSave: (carrera: Carrera) => void
  carrera: Carrera | null
}

export function CarreraModal({ isOpen, onClose, onSave, carrera }: CarreraModalProps) {
  const [nombre, setNombre] = useState("")

  useEffect(() => {
    if (carrera) {
      setNombre(carrera.nombre)
    } else {
      setNombre("")
    }
  }, [carrera])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: carrera?.id || "",
      nombre,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{carrera ? "Editar Carrera" : "Añadir Carrera"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="nombre">Nombre de la Carrera</Label>
              <Input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
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

