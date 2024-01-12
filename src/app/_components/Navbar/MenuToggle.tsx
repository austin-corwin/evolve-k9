import React from "react";
import { Box } from "@chakra-ui/react";

interface IMenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}
const MenuToggle: React.FC<IMenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {/* {isOpen ? <CloseIcon /> : <MenuIcon />} */}
    </Box>
  );
};
export default MenuToggle;
