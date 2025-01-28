"use client"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { Edit, Trash } from "lucide-react"

const examenes = [
  {
    id: 1,
    carrera: "Ingeniería Informática",
    curso: "3er año",
    espacioCurricular: "Bases de Datos",
    profesor: "Dra. María García",
    fecha: "2023-07-15",
    hora: "09:00",
    estado:"pendiente",
  },
  {
    id: 2,
    carrera: "Medicina",
    curso: "2do año",
    espacioCurricular: "Anatomía",
    profesor: "Dr. Juan Pérez",
    fecha: "2023-07-16",
    hora: "10:30",
    estado:"rechazado",
  },
  {
    id: 3,
    carrera: "Derecho",
    curso: "4to año",
    espacioCurricular: "Derecho Penal",
    profesor: "Dra. Ana Martínez",
    fecha: "2023-07-17",
    hora: "14:00",
    estado:"aceptado",
  },
  {
    id: 4,
    carrera: "Arquitectura",
    curso: "5to año",
    espacioCurricular: "Diseño Urbano",
    profesor: "Arq. Carlos Rodríguez",
    fecha: "2023-07-18",
    hora: "11:00",
    estado:"pendiente",
  },
  {
    id: 5,
    carrera: "Psicología",
    curso: "1er año",
    espacioCurricular: "Psicología General",
    profesor: "Lic. Laura Sánchez",
    fecha: "2023-07-19",
    hora: "08:30",
    estado:"rechazado",
  },
]

export default function MisInscripciones() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-4">Registro de mis inscripciones</h2>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <Table>
            <TableCaption>Listado de exámenes inscriptos</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Carrera</TableHead>
                <TableHead>Curso</TableHead>
                <TableHead>Espacio Curricular</TableHead>
                <TableHead>Profesor/a</TableHead>
                <TableHead>Fecha y Hora</TableHead>
                <TableHead>Estado</TableHead>
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
                  <TableCell>{examen.estado}</TableCell>
                  <TableCell>
                  <Button variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <Trash className="h-4 w-4" />
                  </Button>
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

