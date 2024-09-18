import {
  FaWindows,
  FaLinux,
  FaApple,
  FaPlaystation,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../Hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
    const iconMap: {[key:string] : IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        mac: FaApple,
        andriod: FaAndroid,
        xbox: FaXbox,
        web: BsGlobe,
        linux: FaLinux,
        ios: MdPhoneIphone,
        nintedno: SiNintendo
    }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"/>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
