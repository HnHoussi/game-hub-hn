import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react"
import useGenres, {type Genre} from "@/hooks/useGenre.ts";
import {getCroppedImageUrl} from "@/services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {

    const {data, isLoading, error} = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <List.Root  unstyled={true}>
            {data.map(genre => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image
                            boxSize='32px'
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button
                            variant='ghost'
                            fontSize='lg'
                            onClick={() => onSelectGenre(genre)}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List.Root>
    );
};

export default GenreList;