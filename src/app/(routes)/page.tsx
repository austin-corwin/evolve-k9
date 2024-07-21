"use client";
import React from "react";
import axios from "axios";
import { Box, Container, VStack } from "@chakra-ui/react";
import {
  homepageConfig,
  homepageConfigFunc,
} from "../_config/pages/homepageConfig";
import About from "../_features/about/About";
import Contact from "../_features/contact/Contact";
import Hero from "../_features/hero/Hero";
import Programs from "../_features/programs/Programs";
import Testimonials from "../_features/testimonials/Testimonials";
import useData from "../_state/stores/useData";
import { IAttributes, IStrapiResponse } from "../_config/types/IStrapiResponse";

const auth = `cce16500cc2de2e4c1fe3afeb9d92c329666111d8910a719f09a14c39f4f486520e9aed6b9e5e0d6b4aeb7fef6acd79b26872d8c63dead5636cf42a22bd83b82f2adfb2434f7474db6cd50264c88f1e59776b6a2bbf10db81395828ef38aeb7cf6dbab9f2d38888bc7f1a06ea76d98679ec2729460f949031adabcaf1c277506`;

const Home = ({ homepageData }: { homepageData: any }) => {
  const data = useData((state) => state.data);
  const setData = useData((state) => state.setData);
  const [config, setConfig] = React.useState<IAttributes>();
  // console.log('homepage data', homepageData)
  React.useEffect(() => {
    console.log("token is", auth);
    axios
      .get(
        // 'http://localhost:1337/api/homepages/1?populate[0]=hero.button&populate[1]=hero.bgImage&populate[2]=navigation',
        "http://localhost:1337/api/homepage?populate=deep",
        {
          headers: {
            Authorization: `Bearer 90a6149c6f1a5a877ae6e0af77f265d57849849c4a5ad726993cbf5069072290845190fa856751a12ed30188b3a728e531a443150fd7f5dd84c189d6635f405d302a4fe4967ff875edb48dcb5657ab458696bfac27b6a97f421b71f1bc914fd4c60b3fd66231a1c1da875cc1f6d11f2aa506092f1e492f34192685e7e2dff111`,
          },
        }
      )
      .then((response) => {
        const { data } = response;
        const { data: newData }: { data: IStrapiResponse } = data;
        const heroConfig = homepageConfigFunc(newData?.attributes);
        setConfig(newData?.attributes);
        // setData(data?.data?.attributes?.MainNavigation)
        console.log("the new data is ", newData);
      });
  }, []);

  return (
    <Box bg="brandTan.300">
      <Hero
        title={config?.hero?.title!}
        subtitle={config?.hero?.subtitle}
        action={{
          label: config?.hero?.button?.label!,
          href: config?.hero?.button?.link!,
        }}
        bgImage={config?.hero?.bgImage?.data?.attributes?.url!}
      />
      <Container
        display="flex"
        maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
        bg="brandTan.300"
        mt={{ base: 6, lg: 24 }}
        flexDirection="column"
        gap={24}
        px={{ base: 6, lg: 4 }}
      >
        <VStack gap={{ base: 4, lg: 12 }}>
          <About
            title={config?.about?.title!}
            bodyContent={config?.about.body!}
            imgSrc={config?.about?.image?.data?.attributes?.url!}
            // imgSrc="/assets/marcus-with-summit.jpg"
          />
        </VStack>
      </Container>
      <Contact />
      {/* Leave until we have a community page */}
      {/* <Container
                display='flex'
                maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
                bg='brandTan.300'
                mt={{ base: 16, lg: 24 }}
                flexDirection='column'
                gap={24}
            >
                <Community
                    body={`Unlock a world of canine excellence by connecting with our vibrant community. Dive into a wealth of training resources, exclusive content, and exciting company updates tailored just for you. Join us in fostering a community bound by a shared passion for dog training and a commitment to the evolving journey of our beloved canine companions. Your connection with Evolve K9 goes beyond training—it's a shared experience, a source of inspiration, and a gateway to a world where every tail wags with joy. Embrace the journey; connect, learn, and evolve with us!`}
                />
            </Container> */}
      <Container
        display="flex"
        maxW={{ base: 500, md: 800, lg: 1000, xl: 1280 }}
        bg="brandTan.300"
        mt={{ base: 16, lg: 24 }}
        flexDirection="column"
        gap={24}
        pb={24}
      >
        <Programs
          title={config?.programs?.title!}
          subtitle={config?.programs?.subtitle!}
          items={config?.programs?.titledParagraphs!}
          borderedItems={config?.programs?.titledParagraphsBorder!}
          cta={config?.programs?.cta!}
        />
        <Testimonials body="test" />
      </Container>
    </Box>
  );
};

// Home.getInitialProps = async () => {
//     try {
//         const res = await axios.get('http://localhost:1337/api/hero?populate=*', {
//             headers: {
//                 Authorization: `Bearer cce16500cc2de2e4c1fe3afeb9d92c329666111d8910a719f09a14c39f4f486520e9aed6b9e5e0d6b4aeb7fef6acd79b26872d8c63dead5636cf42a22bd83b82f2adfb2434f7474db6cd50264c88f1e59776b6a2bbf10db81395828ef38aeb7cf6dbab9f2d38888bc7f1a06ea76d98679ec2729460f949031adabcaf1c277506`,
//             },
//         })
//         const homepageData = res.data
//         return { homepageData }
//     } catch (error) {
//         return { error }
//     }
// }
export default Home;
