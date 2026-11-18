"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeSelector() {
  const { setTheme } = useTheme()

  return (
    <div className="flex gap-2" role="group" aria-label="Elegir tema">
      <Button variant="outline" onClick={() => setTheme("light")}>
        Claro
      </Button>

      <Button variant="outline" onClick={() => setTheme("dark")}>
        Oscuro
      </Button>

      <Button variant="outline" onClick={() => setTheme("system")}>
        Sistema
      </Button>
    </div>
  )
}