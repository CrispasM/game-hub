
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card
      borderRadius={15}
      overflow="hidden"
    >
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </CardBody>
    </Card>
  );
}

export default GameCard