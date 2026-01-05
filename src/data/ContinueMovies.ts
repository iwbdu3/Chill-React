import dontlookup from "src/assets/images/DontLookUp.png";
import allofusaredead from "src/assets/images/AllofUsAredead.png";
import bluelock from "src/assets/images/BlueLock.png";
import amancalledotto from "src/assets/images/AManCalledOtto.png";
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
    image: dontlookup,
    rating: 4.5,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {
    id: 2,
    title: "All of Us Are Dead",
    image: allofusaredead,
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {
    id: 3,
    title: "Blue Lock",
    image: bluelock,
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
    image: amancalledotto,
    rating: 4.4,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
  {  id: 5,
    title: "All of Us Are Dead",
    image: allofusaredead,
    rating: 4.2,
    progress: 45,
    duration: "2j 33m",
    episode: "Episode 1",
    genres: ["Misteri", "Kriminal", "Fantasi"],
  },
];
