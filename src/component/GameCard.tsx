import React from 'react'
import {Game} from "../Hooks/useGames"
import { Card, CardBody, Heading, Image, Text, Textarea } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'

interface Props{
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconsList>
      </CardBody>
    </Card>
  )
}

export default GameCard