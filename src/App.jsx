import { useState } from 'react'
import Scene from './components/Scene'
import './App.css'

const OPTIONS = [
  { value: 'esp32', label: 'ESP32 Dev Board' },
  { value: 'hbridge', label: 'L298N H-Bridge Motor Driver' },
  { value: 'irrobot', label: 'Line Follower Robot (Full Assembly)' },
]

const CREDITS = {
  irrobot: (
    <>
      "Aula 33 - Seguidor de Linha - Kit 2023" by{' '}
      <a href="https://sketchfab.com/roboticaparana" target="_blank" rel="noreferrer">
        Robótica Paraná
      </a>{' '}
      licensed under{' '}
      <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">
        CC-BY-4.0
      </a>
    </>
  ),
}

export default function App() {
  const [selected, setSelected] = useState('esp32')

  return (
    <div className="app">
      <header className="toolbar">
        <h1>Component Viewer</h1>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </header>
      <div className="viewport">
        <Scene selected={selected} />
        {CREDITS[selected] && <div className="credit">{CREDITS[selected]}</div>}
      </div>
    </div>
  )
}
