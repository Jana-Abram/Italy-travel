export type DayMoment = {
  time: "Morning" | "Afternoon" | "Evening"
  icon: string
  plan: string
}

export type Place = {
  id: string
  name: string
  region: string
  emojiIcon: string
  image: string
  tagline: string
  description: string
  loveNote: string
  cutePoints: string[]
  perfectDay: DayMoment[]
}

export const places: Place[] = [
  {
    id: "amalfi",
    name: "Amalfi Coast",
    region: "Coast • Campania",
    emojiIcon: "🌊",
    image: "/amalfi.png",
    tagline: "Pastel houses tumbling into a turquoise sea",
    description:
      "Steep cliffs, sun-washed towns and lemon groves. We'll share lemon gelato, dangle our feet over the edge and watch the sun melt into the sea.",
    loveNote: "Wrapped in one blanket as the sky turns pink",
    cutePoints: ["A little boat for two", "Lemon gelato", "Sunset on the rocks"],
    perfectDay: [
      { time: "Morning", icon: "🍋", plan: "Lemon pastries on a tiny balcony above the water" },
      { time: "Afternoon", icon: "⛵", plan: "Row out in a little boat and swim in a hidden cove" },
      { time: "Evening", icon: "🌅", plan: "Watch the sunset melt into the sea, just us two" },
    ],
  },
  {
    id: "venice",
    name: "Venice",
    region: "Canals • Veneto",
    emojiIcon: "🚤",
    image: "/venice.png",
    tagline: "Gondolas, canals and a million little bridges",
    description:
      "We'll get lost in the narrow streets on purpose, feed the pigeons in the square and make a wish as our gondola drifts under a bridge.",
    loveNote: "Make one shared wish together",
    cutePoints: ["A gondola ride", "Keepsake masks", "Coffee by the canal"],
    perfectDay: [
      { time: "Morning", icon: "☕", plan: "Slow coffee at a quiet canal-side table" },
      { time: "Afternoon", icon: "🎭", plan: "Get lost on purpose and pick out little keepsake masks" },
      { time: "Evening", icon: "🚣", plan: "A gondola ride and one wish made together" },
    ],
  },
  {
    id: "tuscany",
    name: "Tuscany",
    region: "Nature • Rolling hills",
    emojiIcon: "🌿",
    image: "/tuscany.png",
    tagline: "Green hills and rows of cypress trees",
    description:
      "We'll grab bikes, set up a picnic in a golden field, taste the local wine and lie in the grass counting clouds shaped like hearts.",
    loveNote: "A picnic with a basket and a cozy blanket",
    cutePoints: ["A field picnic", "Bike ride together", "Heart-shaped clouds"],
    perfectDay: [
      { time: "Morning", icon: "🚲", plan: "Bike between vineyards with the windows-down kind of joy" },
      { time: "Afternoon", icon: "🧺", plan: "Picnic in a golden field with cheese and local wine" },
      { time: "Evening", icon: "☁️", plan: "Lie in the grass and count heart-shaped clouds" },
    ],
  },
  {
    id: "cinque-terre",
    name: "Cinque Terre",
    region: "Beaches • Liguria",
    emojiIcon: "🏖️",
    image: "/cinque-terre.png",
    tagline: "Five candy-colored villages by the sea",
    description:
      "We'll walk the trail between the villages hand in hand, swim in a tiny bay and find the coziest little balcony with a view of the water.",
    loveNote: "Walk the Path of Love hand in hand",
    cutePoints: ["The Path of Love", "A swim in the bay", "Candy-colored houses"],
    perfectDay: [
      { time: "Morning", icon: "🥾", plan: "Walk the Path of Love between the villages, hand in hand" },
      { time: "Afternoon", icon: "🏊", plan: "Swim in a tiny bay and dry off on warm rocks" },
      { time: "Evening", icon: "🍝", plan: "Fresh pasta on a balcony over the water" },
    ],
  },
  {
    id: "lake-como",
    name: "Lake Como",
    region: "Nature • Lombardy",
    emojiIcon: "🏔️",
    image: "/lake-como.png",
    tagline: "A calm lake tucked between mountains and villas",
    description:
      "We'll take a little boat across the lake, wander the gardens of old villas and sip hot cocoa on a terrace, wrapped up in one blanket.",
    loveNote: "One blanket for two on the terrace",
    cutePoints: ["A boat across the lake", "Villa gardens", "Cocoa for two"],
    perfectDay: [
      { time: "Morning", icon: "🛥️", plan: "A slow boat ride across the glassy lake" },
      { time: "Afternoon", icon: "🌸", plan: "Wander the gardens of an old lakeside villa" },
      { time: "Evening", icon: "☕", plan: "Hot cocoa on a terrace, wrapped in one blanket" },
    ],
  },
]
