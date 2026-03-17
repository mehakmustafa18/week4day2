'use client'
import { useFilterStore } from '../../store/filterStore'

export default function Header() {
  const darkMode = useFilterStore((s) => s.darkMode)

  return (
    <header className="header">
      <div className="header-pattern" />
      {/* Right decorative SVG circles */}
      <svg viewBox="0 0 1440 156" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}>
        <circle cx="1410" cy="20" r="180" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
        <circle cx="1380" cy="130" r="90" stroke="white" strokeWidth="2" fill="none" opacity="0.2"/>
        <circle cx="30" cy="140" r="120" stroke="white" strokeWidth="2" fill="none" opacity="0.2"/>
        <circle cx="50" cy="20" r="60" stroke="white" strokeWidth="2" fill="none" opacity="0.15"/>
      </svg>
    </header>
  )
}
