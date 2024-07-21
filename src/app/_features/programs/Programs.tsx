import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { BookOpenIcon } from "@heroicons/react/16/solid";
import React from "react";
import ProgramCard from "./ProgramCard";

interface IPrograms {
  title: {
    darkTitle: string;
    colorTitle: string;
  };
  subtitle: string;
  items: {
    title: string;
    body: string;
  }[];
  borderedItems: {
    title: string;
    body: string;
  }[];
  cta: {
    label: string;
    link: string;
  };
}

const Programs: React.FC<IPrograms> = ({
  title,
  subtitle,
  items,
  borderedItems,
  cta,
}) => {
  //   const { title, subtitle, items } = homepageConfig.programs;
  return (
    <Stack
      px={{ base: 2, md: "auto" }}
      gap={{ base: 8, md: 16 }}
      w="full"
      flexDirection={{ base: "column" }}
      id="programs"
    >
      <Heading
        fontSize={{ base: "md", lg: "6xl", xl: "7xl" }}
        fontFamily="mont"
        color="brandBlack.100"
      >
        <Box
          fontSize={{ base: "4xl", lg: "6xl", xl: "7xl" }}
          display="inline-block"
        >
          <Text display="inline-block" color="brandGreen.300">
            {title?.colorTitle}
          </Text>{" "}
        </Box>
      </Heading>
      <Stack direction={{ base: "column" }} gap={12}>
        <ProgramCard icon={BookOpenIcon} title={subtitle} action={cta}>
          <VStack gap={8} alignItems={"start"}>
            {items?.map(({ title, body }) => (
              <VStack key={title} alignItems={"start"}>
                <Text
                  color="brandOrange.300"
                  fontSize="xl"
                  fontWeight="semibold"
                >
                  {title}
                </Text>
                <Text>{body}</Text>
              </VStack>
            ))}
            <Box rounded="xl" p={6} borderWidth={2} borderColor={"green"}>
              <Text
                w="full"
                mb={4}
                color="brandGreen.300"
                fontSize="lg"
                fontWeight="semibold"
              >
                Past or Current Clients Only:
              </Text>
              <VStack gap={6}>
                {borderedItems?.map(({ title, body }) => (
                  <VStack key={title} alignItems={"start"}>
                    <Text
                      color="brandOrange.300"
                      fontSize="xl"
                      fontWeight="semibold"
                    >
                      {title}
                    </Text>
                    <Text>{body}</Text>
                  </VStack>
                ))}
              </VStack>
            </Box>
          </VStack>
        </ProgramCard>
      </Stack>
    </Stack>
  );
};
export default Programs;
