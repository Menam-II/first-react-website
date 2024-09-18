import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroopedImages from "../services/image-url";

interface Props{
  onSelcetGenre: (genre: Genre)=> void;
  selectedGenre: Genre |null;
}

const GenreList = ({selectedGenre, onSelcetGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroopedImages(genre.image_background)}
            />
            <Button fontWeight={genre.id===selectedGenre?.id? "bold": "normal"} onClick={()=> onSelcetGenre(genre)
            } fontSize="lg" variant={"link"}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
