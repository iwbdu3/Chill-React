export interface SeriesFromChill {
  id: number;
  title: string;
  image: string;
  rating: number;
  badge?: string;
  progress: number;
  duration: string;
  episode: string;
  genres: string[];
  ageRating?: string;
}

export const seriesFromChills: SeriesFromChill[] = [
  {
    id: 1,
    title: "Suzume",
    image: "images/Suzume.png",
    rating: 4.5,
    badge: "Premium",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
    ageRating: "13+",
  },
  {
    id: 2,
    title: "Jurassic World Dominion",
    image: "images/JurassicWorld.png",
    rating: 4.2,
    badge: "Premium",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
    ageRating: "13+",
  },
  {
    id: 3,
    title: "Sonic the Hedgehog 2",
    image: "images/Sonic2.png",
    rating: 4.6,
    badge: "Premium",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
    ageRating: "13+",
  },
  {
    id: 4,
    title: "All of Us Are Dead",
    image: "images/AllofUsAreDead2.png",
    rating: 4.4,
    badge: "Premium",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
    ageRating: "13+",
  },
  {  
    id: 5,
    title: "Big Hero 6",
    image: "images/BigHero6.png",
    rating: 4.2,
    badge: "Premium",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
    ageRating: "13+",
  },
  {  
    id: 6,
    title: "A Man Called Otto",
    image: "images/AManCalledOtto2.png",
    rating: 4.2,
    badge: "Premium",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
    ageRating: "13+",
  },
  {  
    id: 7,
    title: "The Little Mermaid",
    image: "images/TheLittleMermaid.png",
    rating: 4.2,
    badge: "Premium",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
    ageRating: "13+",
  },
];
