import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props{
    gameQuery: GameQuery;
}
const GameHeading = ({gameQuery}: Props) => {
    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name  || ""} Games`
  return (
    <Heading paddingLeft={10} marginY={6} fontSize={"5xl"} as={"h1"}>{heading}</Heading>
  )
}

export default GameHeading