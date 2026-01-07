export interface TopRatingMovie {
  id: number;
  title: string;
  image: string;
  rating: number;
  badge?: string;
  progress: number;
  duration: string;
  episode: string;
  genres: string[];
}

export const topRatingMovies: TopRatingMovie[] = [
  {
    id: 1,
    title: "Suzume",
    image: "src/assets/images/Suzume.png",
    rating: 4.5,
    badge: "Top 10",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {
    id: 2,
    title: "Jurassic World Dominion",
    image: "src/assets/images/JurassicWorld.png",
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {
    id: 3,
    title: "Sonic the Hedgehog 2",
    image: "src/assets/images/Sonic2.png",
    rating: 4.6,
    badge: "Episode Baru",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {
    id: 4,
    title: "All of Us Are Dead",
    image: "src/assets/images/AllofUsAredead2.png",
    rating: 4.4,
    badge: "Episode Baru",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {  
    id: 5,
    title: "Big Hero 6",
    image: "src/assets/images/BigHero6.png",
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {  
    id: 6,
    title: "A Man Called Otto",
    image: "src/assets/images/AManCalledOtto2.png",
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {  
    id: 7,
    title: "The Little Mermaid",
    image: "src/assets/images/TheLittleMermaid.png",
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
];
