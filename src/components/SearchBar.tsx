import { Search } from "lucide-react"
import { Input } from "./ui/input"

export function SearchBar() {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input type="search" placeholder="Search location..." className="pl-9" />
    </div>
  )
}

