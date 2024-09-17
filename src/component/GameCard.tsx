import React from "react";
import { Game } from "../Hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroopedImages from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
      <Card>
        <Image src={getCroopedImages(game.background_image)}></Image>
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconsList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
  );
};

export default GameCard;
