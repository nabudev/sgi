"use client"

import { useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CalendarIcon } from "lucide-react"

const examenes = [
  {
    id: 1,
    carrera: "Ingeniería Informática",
    curso: "3er año",
    espacioCurricular: "Bases de Datos",
    profesor: "Dra. María García",
    fecha: "2023-07-15",
    hora: "09:00",
  },
  {
    id: 2,
    carrera: "Medicina",
    curso: "2do año",
    espacioCurricular: "Anatomía",
    profesor: "Dr. Juan Pérez",
    fecha: "2023-07-16",
    hora: "10:30",
  },
  {
    id: 3,
    carrera: "Derecho",
    curso: "4to año",
    espacioCurricular: "Derecho Penal",
    profesor: "Dra. Ana Martínez",
    fecha: "2023-07-17",
    hora: "14:00",
  },
  {
    id: 4,
    carrera: "Arquitectura",
    curso: "5to año",
    espacioCurricular: "Diseño Urbano",
    profesor: "Arq. Carlos Rodríguez",
    fecha: "2023-07-18",
    hora: "11:00",
  },
  {
    id: 5,
    carrera: "Psicología",
    curso: "1er año",
    espacioCurricular: "Psicología General",
    profesor: "Lic. Laura Sánchez",
    fecha: "2023-07-19",
    hora: "08:30",
  },
]

export default function CalendarioExamenes() {
  const [selectedExam, setSelectedExam] = useState(null)

  const handleInscripcion = (examen) => {
    // Aquí iría la lógica para inscribir al estudiante al examen
    console.log(`Inscripción realizada para el examen de ${examen.espacioCurricular}`)
    setSelectedExam(null)
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-4">Calendario de Exámenes</h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
          Consulta las fechas y detalles de los próximos exámenes de tu carrera. Mantente informado y
          prepárate adecuadamente para tus evaluaciones.
        </p>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <Table>
            <TableCaption>Listado de exámenes programados</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Carrera</TableHead>
                <TableHead>Curso</TableHead>
                <TableHead>Espacio Curricular</TableHead>
                <TableHead>Profesor/a</TableHead>
                <TableHead>Fecha y Hora</TableHead>
                <TableHead>Acción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {examenes.map((examen) => (
                <TableRow key={examen.id} className="hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <TableCell className="font-medium">{examen.carrera}</TableCell>
                  <TableCell>{examen.curso}</TableCell>
                  <TableCell>{examen.espacioCurricular}</TableCell>
                  <TableCell>{examen.profesor}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {new Date(`${examen.fecha}T${examen.hora}`).toLocaleString("es-ES", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Inscribirme</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirmar Inscripción</DialogTitle>
                          <DialogDescription>
                            ¿Estás seguro que deseas inscribirte al examen de {examen.espacioCurricular}?
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end space-x-2 pt-4">
                          <Button variant="outline" onClick={() => setSelectedExam(null)}>
                            Cancelar
                          </Button>
                          <Button onClick={() => handleInscripcion(examen)}>Confirmar</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

