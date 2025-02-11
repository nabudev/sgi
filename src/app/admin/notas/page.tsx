"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Pencil, Trash2 } from "lucide-react"
import { NotaModal } from "./nota-modal"

type Nota = {
  id: string
  alumno: string
  materia: string
  calificacion: number
}

const notasIniciales: Nota[] = [
  { id: "1", alumno: "Juan Pérez", materia: "Matemáticas", calificacion: 8.5 },
  { id: "2", alumno: "María García", materia: "Física", calificacion: 9.0 },
  { id: "3", alumno: "Carlos López", materia: "Literatura", calificacion: 7.5 },
]

export default function Notas() {
  const [notas, setNotas] = useState<Nota[]>(notasIniciales)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingNota, setEditingNota] = useState<Nota | null>(null)

  const handleOpenModal = (nota?: Nota) => {
    setEditingNota(nota || null)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingNota(null)
  }

  const handleSaveNota = (nota: Nota) => {
    if (editingNota) {
      setNotas(notas.map((n) => (n.id === nota.id ? nota : n)))
    } else {
      setNotas([...notas, { ...nota, id: Date.now().toString() }])
    }
    handleCloseModal()
  }

  const handleDeleteNota = (id: string) => {
    setNotas(notas.filter((n) => n.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notas</h1>
        <Button onClick={() => handleOpenModal()}>
          <PlusCircle className="mr-2 h-4 w-4" /> Añadir Nota
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Alumno</TableHead>
            <TableHead>Materia</TableHead>
            <TableHead>Calificación</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notas.map((nota) => (
            <TableRow key={nota.id}>
              <TableCell>{nota.id}</TableCell>
              <TableCell>{nota.alumno}</TableCell>
              <TableCell>{nota.materia}</TableCell>
              <TableCell>{nota.calificacion}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleOpenModal(nota)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDeleteNota(nota.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <NotaModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveNota} nota={editingNota} />
    </div>
  )
}

