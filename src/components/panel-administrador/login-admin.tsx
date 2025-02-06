"use client"

import { useState } from "react"
import Image from "next/image"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log("Intento de login con:", { username, password })
  }

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <Image
            className="w-20 mx-auto mb-5"
            src="/img/logoissc-sinfondo.webp"
            alt="Logo"
            width={80}
            height={80}
          />
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="username">
              Usuario
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Contraseña
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer"
                >
                Ingresar
            </button>
          </div>
        </form>
        <footer>
        </footer>
      </div>
    </div>
  )
}

