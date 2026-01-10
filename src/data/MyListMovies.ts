export interface MyListMovie {
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

export const myListMovies: MyListMovie[] = [
  {
    id: 1,
    title: "Suzume",
    image: "images/Suzume.png",
    rating: 4.5,
    badge: "Top 10",
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
    badge: "Episode Baru",
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
    badge: "Episode Baru",
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
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
    ageRating: "13+",
  },
  {
    id: 8,
    title: "The Tomorrow War",
    image: "images/TheTomorrowWar.png",
    rating: 4.5,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
    ageRating: "13+",
  },
  {
    id: 9,
    title: "Ant Man and The Wasp",
    image: "images/AntMan.png",
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
    ageRating: "13+",
  },
  {
    id: 10,
    title: "Guardians of the Galaxy Vol. 3",
    image: "images/GuardiansofTheGalaxy.png",
    rating: 4.6,
    badge: "Episode Baru",
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
    ageRating: "13+",
  },
];
