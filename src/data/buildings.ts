import type { Building } from "../types"

export const buildings: Building[] = [
  {
    id: "low-library",
    name: "Low Library",
    description: "The central library and administrative building",
    path: "M51.24,36.88 L56.24,36.88 L56.24,40.12 L51.24,40.12 Z",
    labelX: 51,
    labelY: 30,
    floors: [
      {
        number: 1,
        name: "First Floor",
        waterFountains: [
          {
            id: "low-1-1",
            name: "Main Entrance Fountain",
            description: "Located near the main entrance",
            efficiency: 8,
            quality: 7,
            status: "operational",
            lastMaintenance: "2025-01-15",
            reviews: [
              {
                id: "r1",
                username: "LibraryLover",
                rating: 4,
                comment: "Water is always cold and refreshing!",
                date: "2025-02-01",
              },
              {
                id: "r2",
                username: "HydrationHero",
                rating: 5,
                comment: "Best fountain on campus, hands down.",
                date: "2025-02-05",
              },
            ],
          },
          {
            id: "low-1-2",
            name: "East Wing Fountain",
            description: "Near the east wing study area",
            efficiency: 6,
            quality: 8,
            status: "under maintenance",
            lastMaintenance: "2025-02-08",
            reviews: [
              {
                id: "r3",
                username: "BookwormBob",
                rating: 3,
                comment: "Water pressure is a bit low, but tastes great.",
                date: "2025-01-28",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        name: "Second Floor",
        waterFountains: [
          {
            id: "low-2-1",
            name: "Central Fountain",
            description: "In the central hallway",
            efficiency: 7,
            quality: 6,
            status: "operational",
            lastMaintenance: "2025-01-20",
            reviews: [
              {
                id: "r4",
                username: "ThirstyThomas",
                rating: 4,
                comment: "Convenient location, but could be colder.",
                date: "2025-02-03",
              },
            ],
          },
        ],
      },
      {
        number: 3,
        name: "Third Floor",
        waterFountains: [
          {
            id: "low-3-1",
            name: "North Wing Fountain",
            description: "Near the north wing elevators",
            efficiency: 9,
            quality: 8,
            status: "operational",
            lastMaintenance: "2025-01-25",
            reviews: [
              {
                id: "r7",
                username: "AquaEnthusiast",
                rating: 4,
                comment: "Great fountain, but often crowded.",
                date: "2025-02-02",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "butler-library",
    name: "Butler Library",
    description: "Main library for humanities and history",
    path: "M50.49,64.82 L57.61,64.82 L57.61,69.00 L50.49,69 Z",
    labelX: 52.55,
    labelY: 64.85,
    floors: [
      {
        number: 1,
        name: "First Floor",
        waterFountains: [
          {
            id: "butler-1-1",
            name: "Lobby Fountain",
            description: "Located in the main lobby",
            efficiency: 9,
            quality: 9,
            status: "operational",
            lastMaintenance: "2025-02-01",
            reviews: [
              {
                id: "r8",
                username: "HistoryBuff",
                rating: 5,
                comment: "Always clean and refreshing!",
                date: "2025-02-07",
              },
            ],
          },
        ],
      },
      {
        number: 2,
        name: "Second Floor",
        waterFountains: [
          {
            id: "butler-2-1",
            name: "Reading Room Fountain",
            description: "Near the main reading room",
            efficiency: 7,
            quality: 8,
            status: "operational",
            lastMaintenance: "2025-01-28",
            reviews: [
              {
                id: "r9",
                username: "LiteratureLover",
                rating: 4,
                comment: "Good water, but can be noisy.",
                date: "2025-02-06",
              },
            ],
          },
        ],
      },
    ],
  },
  // ... (other buildings data)
]

