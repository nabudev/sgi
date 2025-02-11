"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Pencil, Trash2 } from "lucide-react"
import { ExamenModal } from "./examen-modal"

type Examen = {
  id: string
  materia: string
  fecha: string
  hora: string
  profesor: string
}

const examenesIniciales: Examen[] = [
  { id: "1", materia: "Matemáticas Avanzadas", fecha: "2023-07-15", hora: "10:00", profesor: "Dr. Smith" },
  { id: "2", materia: "Anatomía", fecha: "2023-07-16", hora: "09:00", profesor: "Dra. Johnson" },
  { id: "3", materia: "Derecho Civil", fecha: "2023-07-17", hora: "11:00", profesor: "Dr. García" },
]

export default function Examenes() {
  const [examenes, setExamenes] = useState<Examen[]>(examenesIniciales)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingExamen, setEditingExamen] = useState<Examen | null>(null)

  const handleOpenModal = (examen?: Examen) => {
    setEditingExamen(examen || null)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingExamen(null)
  }

  const handleSaveExamen = (examen: Examen) => {
    if (editingExamen) {
      setExamenes(examenes.map((e) => (e.id === examen.id ? examen : e)))
    } else {
      setExamenes([...examenes, { ...examen, id: Date.now().toString() }])
    }
    handleCloseModal()
  }

  const handleDeleteExamen = (id: string) => {
    setExamenes(examenes.filter((e) => e.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Exámenes</h1>
        <Button onClick={() => handleOpenModal()}>
          <PlusCircle className="mr-2 h-4 w-4" /> Añadir Examen
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Materia</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Hora</TableHead>
            <TableHead>Profesor</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {examenes.map((examen) => (
            <TableRow key={examen.id}>
              <TableCell>{examen.id}</TableCell>
              <TableCell>{examen.materia}</TableCell>
              <TableCell>{examen.fecha}</TableCell>
              <TableCell>{examen.hora}</TableCell>
              <TableCell>{examen.profesor}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleOpenModal(examen)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDeleteExamen(examen.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ExamenModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveExamen} examen={editingExamen} />
    </div>
  )
}

