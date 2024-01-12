import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface ILogoProps {
  w: string;
  color: string;
}

const Logo: React.FC<ILogoProps> = ({ w, color }) => {
  return (
    <Box w={w} color={color}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
};
export default Logo;
