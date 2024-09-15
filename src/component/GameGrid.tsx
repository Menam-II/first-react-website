import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import CriticScore from "./CriticScore";


const GameGrid = () => {
  const {games, error}=useGames()
  return (
    <>
    {error && <text className="danger">{error}</text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 3}} padding={10} spacing={10}>
      {games.map((game) => (
        <GameCard key={game.id} game={game}/>
      ))}
    </SimpleGrid>
    </>
    
  );
};

export default GameGrid;
