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
      bg={["primary.400"]}
      color={["white"]}
    >
      {children}
    </Flex>
  );
};
export default NavbarContainer;
