import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../Hooks/usePlatforms'
import { Platform } from '../Hooks/useGames'

interface Props{
  onSelectedItem: (platform: Platform) => void;
  SelectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectedItem, SelectedPlatform}: Props) => {

  const {data, error}=usePlatforms()
  if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>{ SelectedPlatform?.name||"platforms"}</MenuButton>
        <MenuList>
            {data.map(platform=> <MenuItem onClick={()=> onSelectedItem(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector