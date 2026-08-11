"use client"

import { Heart } from "lucide-react"
import { places } from "@/lib/places"

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground animate-wiggle">
            <Heart className="h-5 w-5 fill-current" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-semibold text-foreground">
            Our Italy
          </span>
        </a>

        <ul className="flex flex-wrap items-center gap-1.5">
          {places.map((place) => (
            <li key={place.id}>
              <a
                href={`#${place.id}`}
                className="group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary"
              >
                <span aria-hidden="true" className="text-base leading-none transition-transform group-hover:scale-125">
                  {place.emojiIcon}
                </span>
                <span>{place.name}</span>
                <Heart
                  className="h-3.5 w-3.5 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                  fill="currentColor"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
