import { useState } from "react"
import { buildings } from "../data/buildings"
import { cn } from "../lib/utils"
import type { Building } from "../types"
import campusMap from "../assets/map.jpg"

interface CampusMapProps {
  onBuildingClick: (building: Building) => void
}

export default function CampusMap({ onBuildingClick }: CampusMapProps) {
  const [hoveredBuilding, setHoveredBuilding] = useState<string | null>(null)

  return (
    <div className="relative w-full" style={{ paddingBottom: "129.41%" }}>
      <img
        src={campusMap || "/placeholder.svg"}
        alt="Columbia University Campus Map"
        className="absolute inset-0 w-full h-full object-contain"
      />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {buildings.map((building) => (
          <g key={building.id}>
            <path
              d={building.path}
              fill={hoveredBuilding === building.id ? "rgba(59, 130, 246, 0.4)" : "rgba(59, 130, 246, 0.1)"}
              stroke={hoveredBuilding === building.id ? "rgba(59, 130, 246, 0.8)" : "rgba(59, 130, 246, 0.4)"}
              strokeWidth="0.2"
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHoveredBuilding(building.id)}
              onMouseLeave={() => setHoveredBuilding(null)}
              onClick={() => onBuildingClick(building)}
            />
            <text
              x={`${building.labelX}%`}
              y={`${building.labelY}%`}
              className={cn(
                "text-[1px] fill-primary font-medium transition-all duration-200",
                hoveredBuilding === building.id ? "opacity-100" : "opacity-0",
              )}
              textAnchor="middle"
            >
              {building.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

