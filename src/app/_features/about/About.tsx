import { IRichTextBody } from "@/app/_config/types/IStrapiResponse";
import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface IAbout {
  title: {
    darkTitle: string;
    colorTitle: string;
  };
  bodyContent: IRichTextBody[];
  imgSrc: string;
}

const About: React.FC<IAbout> = ({ title, bodyContent, imgSrc }) => {
  //   const { darkTitle = "", colorTitle = "" } = title;
  console.log("imgSrc", `http://localhost:1337${imgSrc}`);
  return (
    <>
      <Box id="about">
        <Heading
          // fontSize={{ base: 'md', lg: '3xl', xl: '4xl' }}
          // fontSize={{ base: 'md', lg: '6xl', xl: '7xl' }}
          fontSize={{ base: "4xl", lg: "6xl", xl: "7xl" }}
          fontFamily="mont"
          color="brandBlack.100"
        >
          <Box display="inline-block">
            {title?.darkTitle}{" "}
            <Text display="inline" color="brandGreen.300">
              {title?.colorTitle}
            </Text>{" "}
          </Box>
        </Heading>
      </Box>
      <Stack gap={16} w="full" flexDirection={{ base: "column", lg: "row" }}>
        <VStack gap={4} justifyContent="start" alignItems="start">
          {bodyContent?.map((paragraph, index) => (
            <Text
              key={index}
              color="brandBlack.300"
              fontWeight="medium"
              fontSize={{ xl: "2xl" }}
            >
              {paragraph?.children.map((child) => {
                if (child.type === "text") {
                  return child.text;
                }
                return null;
              })}
            </Text>
          ))}
          {/* {body} */}
        </VStack>
        <VStack w="full">
          <Box
            pos={"relative"}
            w="full"
            h="full"
            minW={{ base: 100, lg: 500 }}
            minH={{ base: 300, lg: 500 }}
            overflow="hidden"
            rounded="xl"
          >
            {imgSrc && (
              <Image
                src={`http://localhost:1337${imgSrc}`}
                fill
                style={{ objectFit: "cover" }}
                alt="Picture of marcus"
                unoptimized
              />
            )}
          </Box>
        </VStack>
      </Stack>
    </>
  );
};
export default About;
