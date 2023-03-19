import { Box, Button, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import FAQ from "./compoents/Faq";
import HowItWorks from "./compoents/How";
import SlideBanner from "./compoents/SlideBanner";
import TestimonialPage from "./compoents/Testimonies";
import WhyUs from "./compoents/why";
const Landing = () => {
   const showSlideBanner = useBreakpointValue({ base: false, md: true });

  return (
    <Flex direction={`column`} justify={`space-between`} gap="3rem">
      <Box
        width="100%"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        height={{ base: "auto", md: "700px" }}
        sx={{
          borderColor: "primary",
          borderBottomStyle: "solid",
          borderBottomWidth: "2px",
        }}
      >
        <Box p={{ base: "20px", md: "50px" }} gap="2.5rem" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", width: { base: "100%", md: "60%" } }}>
          <Heading as={"h1"} ml={{ base: "0", md: "2rem" }} p={`15px`} color="primary" fontSize={{ base: "26px", md: "58px" }} fontWeight="bolder" fontFamily="Syne, Sans-serif" lineHeight="1.2em">
            Find Your Best Match
          </Heading>
          <Text
            sx={{
              fontWeight: "bold",
              fontSize: ["14px", "18px"],
              maxW: ["100%", "75%"],
              wordWrap: "break-word",
              letterSpacing: ".3rem",
              lineHeight: "2.5rem",
              marginLeft: { base: "0", md: "35px" },
              color: "secondary",
            }}
          >
            Looking for that someone special? Register with us and get ready to fill the pages of your great love story.
          </Text>
          <Box textAlign="center">
            
          <Button w={`150px`} variant="outline" colorScheme={"primary"} sx={{ fontSize: ["14px", "18px"], fontWeight: "bold", bg: "primary", color: "white" }}>
            Get Started
          </Button>
           </Box>
        </Box>
        {showSlideBanner && (
          <Box width="40%" sx={{ display: ["none", "flex"] }} height="700px" maxHeight={`600px`} marginTop="65px" position="relative">
            <SlideBanner />
          </Box>
        )}
      </Box>
      <WhyUs />
      <HowItWorks />
      <TestimonialPage />
      <FAQ />
    </Flex>
  );
};

export default Landing;
