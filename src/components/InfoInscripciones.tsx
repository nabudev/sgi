import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TerminosYCondiciones() {
  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <Image
          src="/img/logoissc.webp?height=100&width=300"
          alt="Logo de la institución"
          width={300}
          height={100}
          className="mx-auto mb-4"
        />
        <CardTitle className="text-3xl font-bold">Términos y Condiciones</CardTitle>
      </CardHeader>
      <CardContent className="lg:flex lg:gap-8">
        <div className="lg:w-1/2">
          <p className="mb-4 text-lg">
            La eliminación o modificación de inscripciones está sujeta a las siguientes condiciones:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Las inscripciones pueden ser eliminadas o modificadas hasta 48 horas antes del examen.</li>
            <li>Después de estos plazos, deberás contactar directamente con Administración.</li>
            <li>La ausencia sin justificación válida a un examen conlleva al aplazo y sanciones académicas.</li>
          </ul>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <Card className="bg-primary/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Información Importante</h3>
              <p className="text-lg">
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>No se permitirá rendir sin libreta.</li>
                <li>Respetar la vestimenta acorde.</li>
              </ul>
              </p>
              <p className="mt-4 text-lg font-semibold">
                Para más información contactar con Administración:{" "}
                <a href="mailto:admin@ejemplo.com" className="text-primary hover:underline">
                  institutosancristobal@hotmail.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

