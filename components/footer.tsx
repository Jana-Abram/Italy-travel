import Image from "next/image"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-20 px-4 pb-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-12 text-center text-primary-foreground">
        <Image
          src="/hearts-doodle.png"
          alt=""
          width={220}
          height={120}
          className="mx-auto mb-4 h-auto w-40 rounded-2xl opacity-90"
        />
        <h2 className="text-balance font-serif text-3xl font-semibold md:text-4xl">
          One day we&apos;ll pack our bags and go
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-primary-foreground/85">
          Five places, one map for two and a whole suitcase full of hearts. All
          that&apos;s left is choosing where to begin.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
          made with
          <Heart className="h-4 w-4 animate-float-heart" aria-hidden="true" fill="currentColor" />
          for the two of us
        </p>
      </div>
    </footer>
  )
}
