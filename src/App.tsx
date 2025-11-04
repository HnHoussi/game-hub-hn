import {Grid, GridItem} from "@chakra-ui/react"
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import {useState} from "react";
import type {Genre} from "@/hooks/useGenre.ts";

function App() {

    const [SelectedGenre, setSelectedGenre] = useState<Genre | null>(null);

    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '260px 1fr'
            }}
        >
            <GridItem area='nav'>
                <NavBar/>
            </GridItem>
            <GridItem area='aside' paddingX={5} display={{ base: "none", lg: "block" }}>
                <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
            </GridItem>
            <GridItem area='main'>
                <GameGrid selectedGenre={SelectedGenre} />
            </GridItem>

        </Grid>
    )
}

export default App
