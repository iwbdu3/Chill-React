export interface ContinueMovie {
  id: number;
  title: string;
  image: string;
  rating: number;
  badge?: string;
  progress: number; // 0 - 100
  duration: string;
  episode: string;
  genres: string[];
}

export const continueMovies: ContinueMovie[] = [
  {
    id: 1,
    title: "Don't Look Up",
    image: "images/DontLookUp.png",
    rating: 4.5,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {
    id: 2,
    title: "All of Us Are Dead",
    image: "images/AllofUsAreDead.png",
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {
    id: 3,
    title: "Blue Lock",
    image: "images/BlueLock.png",
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
    image: "images/AManCalledOtto.png",
    rating: 4.4,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {  id: 5,
    title: "All of Us Are Dead",
    image: "images/AllofUsAreDead.png",
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
];
