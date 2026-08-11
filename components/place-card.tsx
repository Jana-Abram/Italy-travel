import Image from "next/image"
import { Heart, Sparkles, Sun } from "lucide-react"
import type { Place } from "@/lib/places"

export function PlaceCard({ place, index }: { place: Place; index: number }) {
  const flipped = index % 2 === 1
  const number = String(index + 1).padStart(2, "0")

  return (
    <section id={place.id} className="scroll-mt-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div
          className={`flex flex-col gap-8 rounded-[2.5rem] border border-border/70 bg-card p-5 shadow-sm md:p-8 lg:flex-row lg:items-center lg:gap-12 ${
            flipped ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Photo */}
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -left-3 -top-3 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl shadow-md">
              <span aria-hidden="true">{place.emojiIcon}</span>
            </div>
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src={place.image || "/placeholder.svg"}
                alt={`${place.name}, Italy`}
                width={900}
                height={640}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl font-semibold text-primary/50">{number}</span>
              <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {place.region}
              </span>
            </div>

            <h2 className="mt-2 flex items-center gap-2 font-serif text-3xl font-semibold text-foreground md:text-4xl">
              {place.name}
              <Heart className="h-6 w-6 text-primary animate-float-heart" aria-hidden="true" fill="currentColor" />
            </h2>

            <p className="mt-1 text-lg font-medium text-secondary-foreground">{place.tagline}</p>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{place.description}</p>

            {/* cute points */}
            <ul className="mt-5 flex flex-wrap gap-2">
              {place.cutePoints.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                >
                  <Heart className="h-3.5 w-3.5 text-primary" aria-hidden="true" fill="currentColor" />
                  {point}
                </li>
              ))}
            </ul>

            {/* love note */}
            <div className="mt-5 flex items-start gap-2 rounded-2xl bg-accent/40 px-4 py-3">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold text-accent-foreground">{place.loveNote}</p>
            </div>

            {/* our perfect day here */}
            <PerfectDay place={place} />
          </div>
        </div>
      </div>
    </section>
  )
}

function PerfectDay({ place }: { place: Place }) {
  return (
    <div className="mt-6">
      <p className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-foreground">
        <Sun className="h-4 w-4 text-primary" aria-hidden="true" fill="currentColor" />
        Our perfect day here
      </p>
      <ol className="relative flex flex-col gap-3 border-l-2 border-dashed border-primary/30 pl-5">
        {place.perfectDay.map((moment) => (
          <li key={moment.time} className="relative">
            <span
              className="absolute -left-[1.85rem] flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-base shadow-sm"
              aria-hidden="true"
            >
              {moment.icon}
            </span>
            <div className="rounded-2xl bg-secondary/40 px-4 py-2.5">
              <span className="block text-xs font-semibold uppercase tracking-wide text-primary">{moment.time}</span>
              <span className="block text-sm leading-relaxed text-secondary-foreground">{moment.plan}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
