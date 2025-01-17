import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image 
                src="/img/logoissc.webp"
                alt="ISSC"
                width={150}
                height={60}
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Login Form */}
          <div>
            <h1 className="text-2xl text-gray-600 mb-6">Ingresá tus datos</h1>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="block text-gray-600">
                  DNI
                </label>
                <Input 
                  id="username"
                  type="text"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-gray-600">
                  Contraseña
                </label>
                <Input 
                  id="password"
                  type="password"
                  required
                  className="w-full"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-[#0088CC] hover:bg-[#0077B3]"
              >
                Ingresar
              </Button>
              <div className="text-sm">
                <Link href="#" className="text-[#0088CC] hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="text-sm">
                <Link href="#" className="text-[#0088CC] hover:underline">
                    Registrarme
                </Link>
              </div>
            </form>
          </div>

          {/* System Information */}
          <div>
            <h2 className="text-2xl text-gray-600 mb-6">Sistema de Gestión de Inscripciones a Exámenes Finales</h2>
            <p className="text-gray-600 mb-4">
              Algunas de las cosas que podés hacer con este sistema son:
            </p>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>Inscribirte a mesas de exámenes.</li>
              <li>Consultar el calendario de exámenes.</li>
              <li>Consultar tus inscripciones.</li>
              <li>Modificar o eliminar tus inscripciones.</li>
              <li>Recibir notificaciones sobre la disponibilidad de los exámenes y el estado de tus inscripciones.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

