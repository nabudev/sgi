"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Pencil, Trash2 } from "lucide-react"
import { CarreraModal } from "./carrera-modal"

type Carrera = {
  id: string
  nombre: string
}

const carrerasIniciales: Carrera[] = [
  { id: "1", nombre: "Ingeniería Informática" },
  { id: "2", nombre: "Medicina" },
  { id: "3", nombre: "Derecho" },
]

export default function Carreras() {
  const [carreras, setCarreras] = useState<Carrera[]>(carrerasIniciales)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCarrera, setEditingCarrera] = useState<Carrera | null>(null)

  const handleOpenModal = (carrera?: Carrera) => {
    setEditingCarrera(carrera || null)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingCarrera(null)
  }

  const handleSaveCarrera = (carrera: Carrera) => {
    if (editingCarrera) {
      setCarreras(carreras.map((c) => (c.id === carrera.id ? carrera : c)))
    } else {
      setCarreras([...carreras, { ...carrera, id: Date.now().toString() }])
    }
    handleCloseModal()
  }

  const handleDeleteCarrera = (id: string) => {
    setCarreras(carreras.filter((c) => c.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Carreras</h1>
        <Button onClick={() => handleOpenModal()}>
          <PlusCircle className="mr-2 h-4 w-4" /> Añadir Carrera
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre de la Carrera</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {carreras.map((carrera) => (
            <TableRow key={carrera.id}>
              <TableCell>{carrera.id}</TableCell>
              <TableCell>{carrera.nombre}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleOpenModal(carrera)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDeleteCarrera(carrera.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CarreraModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveCarrera}
        carrera={editingCarrera}
      />
    </div>
  )
}

