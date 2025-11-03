
import {Button, Card, Image } from "@chakra-ui/react"
import type {Game} from "@/hooks/useGames.ts";
import PlatformIconList from "@/components/PlatformIconList.tsx";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card.Root maxW="sm" overflow="hidden">
            <Image src={game.background_image}/>
            <Card.Body gap="2">
                <Card.Title>{game.name}</Card.Title>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            </Card.Body>
            <Card.Footer gap="2">
                <Button variant="solid">Buy now</Button>
                <Button variant="ghost">Add to cart</Button>
            </Card.Footer>
        </Card.Root>
    );
};

export default GameCard;