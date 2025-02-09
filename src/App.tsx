"use client"

import { useState } from "react"
import CampusMap from "./components/CampusMap"
import BuildingSidebar from "./components/BuildingSidebar"
import { SearchBar } from "./components/SearchBar"
import type { Building } from "./types"
import { BarChart3, Home, LayoutGrid, MessageSquare, Settings, Users } from "lucide-react"

function App() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null)
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  const handleBuildingClick = (building: Building) => {
    setSelectedBuilding(building)
    setIsSidebarVisible(true)
  }

  const handleCloseSidebar = () => {
    setIsSidebarVisible(false)
    setTimeout(() => {
      setSelectedBuilding(null)
    }, 300)
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="w-16 border-r bg-background flex flex-col items-center py-4 gap-6">
        <div className="w-8 h-8 rounded-full bg-primary/20">
          <div className="w-full h-full rounded-full bg-[#8B5CF6] opacity-75" />
        </div>
        <nav className="flex flex-col gap-4">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent">
            <Home className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent">
            <LayoutGrid className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent">
            <MessageSquare className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent">
            <BarChart3 className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent">
            <Users className="w-5 h-5 text-muted-foreground" />
          </button>
        </nav>
        <div className="mt-auto">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="flex-1">
        <header className="flex items-center justify-between p-4 border-b">
          <SearchBar />
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Devtao Yang</span>
            <div className="w-8 h-8 rounded-full bg-muted" />
          </div>
        </header>
        <main className="p-4">
          <CampusMap onBuildingClick={handleBuildingClick} />
        </main>
      </div>

      {isSidebarVisible && <BuildingSidebar building={selectedBuilding} onClose={handleCloseSidebar} />}
    </div>
  )
}

export default App

