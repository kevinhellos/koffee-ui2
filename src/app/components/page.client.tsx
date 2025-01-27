"use client"

import { Download } from "lucide-react"

export default function Pagelient() {
  return (
    <button 
        type="button" 
        className="kf-btn bg-gray-300 mt-3 flex" 
        onClick={() => alert("Coming soon")}
    >
        <Download size={18} className="me-2"/>
        Download koffee-ui2.css
    </button>
  )
}
