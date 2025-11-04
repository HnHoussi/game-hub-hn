import {SimpleGrid, Text} from "@chakra-ui/react"
import useGames from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";


const GameGrid = () => {

    const {data, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl:5}} gap={10} padding='10px'>
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton}/>
                    </GameCardContainer>
                ))}
                {data.map(game => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;