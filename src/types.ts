export interface Review {
  id: string
  username: string
  rating: number
  comment: string
  date: string
}

export interface WaterFountain {
  id: string
  name: string
  description: string
  efficiency: number
  quality: number
  status: "operational" | "under maintenance" | "out of order"
  lastMaintenance: string
  reviews: Review[]
}

export interface Floor {
  number: number
  name: string
  waterFountains: WaterFountain[]
}

export interface Building {
  id: string
  name: string
  description: string
  path: string
  labelX: number
  labelY: number
  floors: Floor[]
}

