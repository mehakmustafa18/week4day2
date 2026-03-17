'use client'
import { useEffect } from 'react'
import { useFilterStore } from '../../store/filterStore'

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useFilterStore()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <button
      className="dark-toggle"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  )
}
