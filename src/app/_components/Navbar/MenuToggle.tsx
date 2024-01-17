import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import * as HeroIcons from '@heroicons/react/24/outline'

interface IMenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}
const MenuToggle: React.FC<IMenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {/* {isOpen ? <CloseIcon /> : <MenuIcon />} */}
      {isOpen ? <Icon as={HeroIcons.XMarkIcon} /> : <Icon as={HeroIcons.Bars3Icon} />}
    </Box>
  );
};
export default MenuToggle;
