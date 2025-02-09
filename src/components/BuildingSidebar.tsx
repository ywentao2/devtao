"use client"

import { useState, useEffect } from "react"
import { X, Building, Droplet } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import type { Building as BuildingType, WaterFountain, Review } from "../types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Badge } from "./ui/badge"

interface BuildingSidebarProps {
  building: BuildingType | null
  onClose: () => void
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-muted p-3 rounded-md space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{review.username}</span>
        <span className="text-sm text-muted-foreground">{review.date}</span>
      </div>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Droplet
            key={i}
            className={cn("w-4 h-4", i < review.rating ? "fill-primary text-primary" : "text-muted-foreground")}
          />
        ))}
      </div>
      <p className="text-sm">{review.comment}</p>
    </div>
  )
}

function WaterFountainCard({ waterFountain }: { waterFountain: WaterFountain }) {
  return (
    <div className="bg-card rounded-lg p-4 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold">{waterFountain.name}</h4>
          <p className="text-sm text-muted-foreground">{waterFountain.description}</p>
        </div>
        <Badge variant={waterFountain.status === "operational" ? "default" : "destructive"}>
          {waterFountain.status}
        </Badge>
      </div>
      <div className="space-y-2">
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Efficiency</span>
            <span className="font-medium">{waterFountain.efficiency}/10</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${waterFountain.efficiency * 10}%` }} />
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Quality</span>
            <span className="font-medium">{waterFountain.quality}/10</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-[#8B5CF6] rounded-full" style={{ width: `${waterFountain.quality * 10}%` }} />
          </div>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">Last maintenance: {waterFountain.lastMaintenance}</div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="reviews">
          <AccordionTrigger>Reviews ({waterFountain.reviews.length})</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {waterFountain.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default function BuildingSidebar({ building, onClose }: BuildingSidebarProps) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (building) {
      setIsClosing(false)
    }
  }, [building])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 300)
  }

  if (!building) return null

  return (
    <div
      className={cn(
        "relative w-[400px] border-l bg-muted/10 p-6 space-y-8 transition-all duration-300 overflow-y-auto",
        "animate-in slide-in-from-right",
        isClosing && "animate-out slide-out-to-right fade-out",
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 h-8 w-8 hover:bg-accent"
        onClick={handleClose}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close sidebar</span>
      </Button>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Building className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-semibold">{building.name}</h2>
        </div>

        <p className="text-sm text-muted-foreground">{building.description}</p>

        {building.floors && building.floors.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {building.floors.map((floor) => (
              <AccordionItem value={`floor-${floor.number}`} key={floor.number}>
                <AccordionTrigger>{floor.name}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {floor.waterFountains.map((fountain) => (
                      <WaterFountainCard key={fountain.id} waterFountain={fountain} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-sm text-muted-foreground">No floor information available for this building.</p>
        )}
      </div>
    </div>
  )
}

