import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./Hooks/useGames";

export interface GameQuery {
  Genre: Genre | null;
  Platform: Platform | null;
}

function App() {
  const [gameQuery, setGamequery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //1024px
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.Genre}
            onSelcetGenre={(genre) => setGamequery({...gameQuery, Genre: genre})}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          SelectedPlatform={gameQuery.Platform}
          onSelectedItem={(platform) =>
            setGamequery({ ...gameQuery, Platform: platform })
          }
        />
        <GameGrid
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
