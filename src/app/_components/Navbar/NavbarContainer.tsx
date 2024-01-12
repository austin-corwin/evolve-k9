import { Flex } from "@chakra-ui/react";

interface INavbarContainerProps {
  children: React.ReactNode;
}

const NavbarContainer: React.FC<INavbarContainerProps> = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["green"]}
      //   bg={["primary.500", "primary.500", "transparent", "transparent"]}
      //   color={["white", "white", "primary.700", "primary.700"]}
      color={["white", "white"]}
    >
      {children}
    </Flex>
  );
};
export default NavbarContainer;
