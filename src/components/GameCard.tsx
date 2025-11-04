
import {Button, Card, HStack, Image} from "@chakra-ui/react"
import type {Game} from "@/hooks/useGames.ts";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import CriticScore from "@/components/CriticScore.tsx";
import {getCroppedImageUrl} from "@/services/image-url.ts";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card.Root>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <Card.Body gap="2">
                <Card.Title>{game.name}</Card.Title>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </Card.Body>
            <Card.Footer gap="2">
                <Button variant="solid">Buy now</Button>
                <Button variant="ghost">Add to cart</Button>
            </Card.Footer>
        </Card.Root>
    );
};

export default GameCard;