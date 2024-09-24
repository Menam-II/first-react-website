import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bullsEye.png"
import meh from "../assets/meh.512x512.png"
import thumbsUp from "../assets/thumbsup.450x512.png"

interface Props{
    rating: number;
}
const Emoji= ({rating}: Props) => {
    const emojiObject: {[key: number]: ImageProps}  = {
        3: {src: meh, alt: "meh"},
        4: {src: thumbsUp, alt: "recomended"},
        5: {src: bullsEye, alt: "exeptional"},
    }
    if(rating> 3) return null;
  return (
    <Image {...emojiObject[rating]} boxSize="25px"/>
  )
}

export default Emoji