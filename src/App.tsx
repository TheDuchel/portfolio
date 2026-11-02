import { useState } from 'react'
import './App.css'

function App() {
  const [poste, setposte] = useState("Développeur Fullstack")

  return (
    <>
      <h1 className="text-4xl font-bold text-blue-600 p-8">Portfolio de Wemo Wessisse Duchel Christian</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Poste: {poste}</h2>

      <button onClick={() => setposte("Développeur Backend")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  >

        Changer le poste

      </button>

    </>
  )

}

export default App
