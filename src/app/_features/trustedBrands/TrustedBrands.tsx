import { homepageConfig } from "@/app/_config/pages/homepageConfig";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface ITrustedBrands {}

const TrustedBrands: React.FC<ITrustedBrands> = () => {
  const { logos, title } = homepageConfig.trustedBrands;
  return (
    <VStack gap={8}>
      <Heading
        id="testimonials"
        fontSize={{ base: "4xl", lg: "6xl", xl: "7xl" }}
        fontFamily="mont"
        color="brandGreen.300"
      >
        <Box display="inline-block">{title}</Box>
      </Heading>
      <Box display="flex">
        {logos.map((logo, i) => (
          <Box key={logo} mx={4}>
            <Image key={logo} src={logo} width={100} height={100} alt="logo" />
          </Box>
        ))}
      </Box>
    </VStack>
  );
};
export default TrustedBrands;
