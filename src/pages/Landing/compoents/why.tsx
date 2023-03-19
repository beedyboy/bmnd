import { Box, Container, Heading, Text } from "@chakra-ui/react";

const WhyUs = () => {
  return (
    <Box bg="white" py={{ base: "6", md: "10" }}>
      <Container maxW={{ base: "container.sm", md: "container.lg" }}>
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb="4">
            Why Choose Us?
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} maxW="600px" mx="auto" px={{ base: "5px", md: "0"}}>
            At bmndconnect, our goal is to connect single men and women from different parts of the world together for a serious relationship that leads to marriage. We believe that everyone deserves to find their perfect match and build a blissful
            home, and we are here to help make that happen.
          </Text>
          <Text fontSize={{ base: "md", md: "xl" }} maxW="600px" mx="auto" mt="4">
            We stand out from other match-making services because of our commitment to transparency and trust. We take the time to get to know each of our clients and their unique needs and preferences, so we can provide personalized and tailored
            matchmaking services. We also prioritize honesty and integrity in our matches, so you can trust that the people we introduce you to are genuine and sincere in their search for love.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUs;
