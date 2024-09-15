import React from 'react'
import {Game} from "../Hooks/useGames"
import { Card, CardBody, Heading, HStack, Image, Text, Textarea } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'

interface Props{
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent={"space-between"} >
          <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconsList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard