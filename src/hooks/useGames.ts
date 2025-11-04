import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";
import {CanceledError} from "axios";

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
    metacritic: number
}

// Define what the API returns when fetching games
interface FetchGamesResponse {
    count: number;
    results: Game[];
}

// Custom Hook for fetching a list of games from the API
const useGames = () => {

    // stores fetched game data
    const [games, setGames] = useState<Game[]>([]);
    // stores any potential error message from the request
    const [error, setError] = useState('');

    // useEffect runs once when the component using this hook mounts
    useEffect(() => {

        // Create an AbortController to cancel the request if the component unmounts
        const controller = new AbortController();

        // Make GET request to the /games endpoint
        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
            // Store the list of games from the API response
            .then(res => setGames(res.data.results))
            .catch((error) => {
                // If the request was canceled, do nothing
                if (error instanceof CanceledError) return;
                // Otherwise, store the error message
                setError(error.message)
            });

        // Cleanup: abort the API request if the component unmounts early
        return () => controller.abort();
    }, []); // [] ensures this effect runs only once (on mount)

    // Return the data and error so components can use them
    return { games, error };
}

export default useGames;