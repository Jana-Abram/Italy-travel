import Image from "next/image"
import { Heart, MapPin, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-14 md:pb-24 md:pt-20">
      {/* floating cute hearts */}
      <FloatingHeart className="left-[8%] top-16 text-primary/40" size="h-8 w-8" delay="0s" />
      <FloatingHeart className="right-[10%] top-24 text-accent/70" size="h-10 w-10" delay="1.2s" />
      <FloatingHeart className="left-[16%] bottom-10 text-primary/30" size="h-6 w-6" delay="0.6s" />
      <FloatingHeart className="right-[18%] bottom-16 text-primary/40" size="h-7 w-7" delay="2s" />

      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            our little plan for two
          </span>

          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-6xl">
            Our trip
            <span className="relative mx-2 inline-block">
              through Italy
              <Heart
                className="absolute -right-7 -top-3 h-6 w-6 text-primary animate-float-heart"
                aria-hidden="true"
                fill="currentColor"
              />
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground md:mx-0">
            The five most beautiful places we&apos;ll visit together — the sea,
            the hills, the canals and cozy little villages. One list for two,
            full of hearts.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#amalfi"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              See the places
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              <Heart className="h-4 w-4 text-primary" aria-hidden="true" fill="currentColor" />
              5 dream spots
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -rotate-6 rounded-[2.5rem] bg-accent/40" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-card bg-card shadow-lg">
            <Image
              src="/couple-hug.png"
              alt="A cute cartoon couple hugging and holding hands surrounded by little hearts"
              width={640}
              height={640}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingHeart({
  className,
  size,
  delay,
}: {
  className: string
  size: string
  delay: string
}) {
  return (
    <Heart
      aria-hidden="true"
      fill="currentColor"
      style={{ animationDelay: delay }}
      className={`pointer-events-none absolute hidden animate-float-heart md:block ${size} ${className}`}
    />
  )
}
