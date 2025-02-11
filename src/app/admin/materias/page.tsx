"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Pencil, Trash2 } from "lucide-react"
import { MateriaModal } from "./materia-modal"

type Materia = {
  id: string
  nombre: string
  carrera: string
}

const materiasIniciales: Materia[] = [
  { id: "1", nombre: "Matemáticas Avanzadas", carrera: "Ingeniería Informática" },
  { id: "2", nombre: "Anatomía", carrera: "Medicina" },
  { id: "3", nombre: "Derecho Civil", carrera: "Derecho" },
]

export default function Materias() {
  const [materias, setMaterias] = useState<Materia[]>(materiasIniciales)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingMateria, setEditingMateria] = useState<Materia | null>(null)

  const handleOpenModal = (materia?: Materia) => {
    setEditingMateria(materia || null)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingMateria(null)
  }

  const handleSaveMateria = (materia: Materia) => {
    if (editingMateria) {
      setMaterias(materias.map((m) => (m.id === materia.id ? materia : m)))
    } else {
      setMaterias([...materias, { ...materia, id: Date.now().toString() }])
    }
    handleCloseModal()
  }

  const handleDeleteMateria = (id: string) => {
    setMaterias(materias.filter((m) => m.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Materias</h1>
        <Button onClick={() => handleOpenModal()}>
          <PlusCircle className="mr-2 h-4 w-4" /> Añadir Materia
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre de la Materia</TableHead>
            <TableHead>Carrera</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {materias.map((materia) => (
            <TableRow key={materia.id}>
              <TableCell>{materia.id}</TableCell>
              <TableCell>{materia.nombre}</TableCell>
              <TableCell>{materia.carrera}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleOpenModal(materia)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDeleteMateria(materia.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MateriaModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveMateria}
        materia={editingMateria}
      />
    </div>
  )
}

