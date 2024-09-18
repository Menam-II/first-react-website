import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import CriticScore from "./CriticScore";
import SkeletonCardGames from "./SkeletonCardGames";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenres";

interface Props{
  SeletedGenre: Genre | null;
}

const GameGrid = ({SeletedGenre}: Props) => {
  const { data, error, isLoading } = useGames(SeletedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <text className="danger">{error}</text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer  key={skeleton} >
              <SkeletonCardGames/>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
