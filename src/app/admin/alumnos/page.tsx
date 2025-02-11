"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Pencil, Trash2 } from "lucide-react"
import { AlumnoModal } from "./alumno-modal"

type Alumno = {
  id: string
  nombre: string
  carrera: string
}

const alumnosIniciales: Alumno[] = [
  { id: "1", nombre: "Juan Pérez", carrera: "Ingeniería Informática" },
  { id: "2", nombre: "María García", carrera: "Medicina" },
  { id: "3", nombre: "Carlos López", carrera: "Derecho" },
]

export default function Alumnos() {
  const [alumnos, setAlumnos] = useState<Alumno[]>(alumnosIniciales)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingAlumno, setEditingAlumno] = useState<Alumno | null>(null)

  const handleOpenModal = (alumno?: Alumno) => {
    setEditingAlumno(alumno || null)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingAlumno(null)
  }

  const handleSaveAlumno = (alumno: Alumno) => {
    if (editingAlumno) {
      setAlumnos(alumnos.map((a) => (a.id === alumno.id ? alumno : a)))
    } else {
      setAlumnos([...alumnos, { ...alumno, id: Date.now().toString() }])
    }
    handleCloseModal()
  }

  const handleDeleteAlumno = (id: string) => {
    setAlumnos(alumnos.filter((a) => a.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Alumnos</h1>
        <Button onClick={() => handleOpenModal()}>
          <PlusCircle className="mr-2 h-4 w-4" /> Añadir Alumno
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre del Alumno</TableHead>
            <TableHead>Carrera</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alumnos.map((alumno) => (
            <TableRow key={alumno.id}>
              <TableCell>{alumno.id}</TableCell>
              <TableCell>{alumno.nombre}</TableCell>
              <TableCell>{alumno.carrera}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleOpenModal(alumno)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDeleteAlumno(alumno.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AlumnoModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveAlumno} alumno={editingAlumno} />
    </div>
  )
}

