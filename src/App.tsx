import {Box, Grid, GridItem, HStack} from "@chakra-ui/react"
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import {useState} from "react";
import type {Genre} from "@/hooks/useGenre.ts";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import type {Platform} from "@/hooks/useGames.ts";
import SortSelector from "@/components/SortSelector.tsx";
import  "./index.css";
import GameHeading from "@/components/GameHeading.tsx";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
                <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
            </GridItem>
            <GridItem area='aside' paddingX={5} display={{ base: "none", lg: "block" }}>
                <GenreList
                    selectedGenre={gameQuery.genre}
                    onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
                />
            </GridItem>
            <GridItem area='main'>
                <Box paddingLeft={3}>
                    <GameHeading gameQuery={gameQuery}/>
                    <HStack gap={5}  marginBottom={5}>
                        <PlatformSelector
                            selectedPlatform={gameQuery.platform}
                            onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
                        />
                        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
                    </HStack>
                </Box>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>

        </Grid>
    )
}

export default App
