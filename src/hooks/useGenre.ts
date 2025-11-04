import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";
import {CanceledError} from "axios";

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

interface Genre {
    id: number;
    name: string;
}

const useGenre = () => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();

        setIsLoading(true);
        apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then(res => {
                setGenres(res.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
}

export default useGenre;