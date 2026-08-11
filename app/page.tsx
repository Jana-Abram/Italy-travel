import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { PlaceCard } from "@/components/place-card"
import { Footer } from "@/components/footer"
import { places } from "@/lib/places"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Hero />

      <div className="flex flex-col gap-10 md:gap-16">
        {places.map((place, index) => (
          <PlaceCard key={place.id} place={place} index={index} />
        ))}
      </div>

      <Footer />
    </main>
  )
}
