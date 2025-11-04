import useData from "@/hooks/useData.ts";
import type {Genre} from "@/hooks/useGenre.ts";

// Define the shape of a Platform (Platform icons for the games)
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// Define the shape of a single game object
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (selectedGenre: Genre | null) =>
    useData<Game>('/games', { params: {genres: selectedGenre?.id} }, [
        selectedGenre?.id
    ]);

export default useGames;