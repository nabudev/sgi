import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function InforInscripciones() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Términos y Condiciones</h2>
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                La eliminación o modificación de inscripciones está sujeta a las siguientes condiciones:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 text-left">
                <li>Las inscripciones pueden ser modificadas hasta 48 horas antes del examen.</li>
                <li>La eliminación de una inscripción solo es posible hasta 48 horas antes del examen.</li>
                <li>Después de estos plazos, deberás contactar directamente con Administración.</li>
                <li>La ausencia sin justificacion válida a un examen conlleva al aplazo y sanciones académicas.</li>
              </ul>
              <p className="dark:text-gray-400 mb-8">
                Para más información, consulta con Administración.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

