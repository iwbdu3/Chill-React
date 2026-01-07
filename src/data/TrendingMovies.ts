export interface TrendingMovie {
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

export const trendingMovies: TrendingMovie[] = [
  {
    id: 1,
    title: "The Tomorrow War",
    image: "images/TheTomorrowWar.png",
    rating: 4.5,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {
    id: 2,
    title: "Ant Man and The Wasp",
    image: "images/AntMan.png",
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {
    id: 3,
    title: "Guardians of the Galaxy Vol. 3",
    image: "images/GuardiansofTheGalaxy.png",
    rating: 4.6,
    badge: "Episode Baru",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {
    id: 4,
    title: "A Man Called Otto",
    image: "images/AManCalledOtto2.png",
    rating: 4.4,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {  
    id: 5,
    title: "The Little Mermaid",
    image: "images/TheLittleMermaid.png",
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {  
    id: 6,
    title: "Suzume",
    image: "images/Suzume.png",
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {  
    id: 7,
    title: "Jurassic",
    image: "images/JurassicWorld.png",
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
];
