import useData from "@/hooks/useData.ts";
import type {GameQuery} from "@/App.tsx";

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

const useGames = (gameQuery: GameQuery) =>
    useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id
        } },
        [gameQuery]
    );

export default useGames;