'use client';
import Link from "next/link"

export default function Hero() {

  //efecto de desplazamiento
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const calendario = document.getElementById("calendario");
    if (calendario) {
      calendario.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-800 dark:text-gray-300 sm:text-7xl">
        Sistema de Gestión de Inscripciones de{" "}
        <span className="relative whitespace-nowrap text-gray-600 dark:text-gray-300">Exámenes Finales</span>{" "}
        <span className="relative whitespace-nowrap text-blue-500 dark:text-orange-300">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-500 dark:fill-orange-300/60"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">ISSC</span>
        </span>
      </h1>
      <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-600 text-gray-500 dark:text-gray-300 leading-7">
      Aquí podrás gestionar tus inscripciones de manera rápida y sencilla. Accede a las mesas de exámenes disponibles y confirma tus inscripciones con solo unos clics. ¡Comienza ahora y organiza tu próximo examen fácilmente!
      </h2>
      <Link
        onClick={handleScroll}
        href="#"
        className="bg-blue-600 dark:bg-gray-800 rounded-xl text-white dark:text-gray-300 font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 dark:hover:bg-gray-600 transition"
      >
        Comenzar
      </Link>
    </div>
  )
}

