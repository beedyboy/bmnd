import { Box, Stack, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { FaUserPlus, FaCreditCard, FaHandshake } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <Box p={{ base: "2rem", md: "5rem" }}>
      <Heading as="h2" size="2xl" mb={{ base: "1rem", md: "1.5rem" }} textAlign="center">
        How It Works
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} align="center" justify="space-between" spacing="3rem">
        <Box textAlign="center">
          <Icon as={FaUserPlus} boxSize={{ base: "2rem", md: "3rem" }} color="primary" mb={{ base: "1rem", md: "1.5rem" }} />
          <Heading as="h3" size={{ base: "md", md: "lg" }} mb={{ base: "1rem", md: "1.5rem" }}>
            Create Your Profile
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>Sign up and create a profile with your preferences and interests.</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaCreditCard} boxSize={{ base: "2rem", md: "3rem" }} color="primary" mb={{ base: "1rem", md: "1.5rem" }} />
          <Heading as="h3" size={{ base: "md", md: "lg" }} mb={{ base: "1rem", md: "1.5rem" }}>
            Subscribe
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>Choose a subscription plan that suits your needs.</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaHandshake} boxSize={{ base: "2rem", md: "3rem" }} color="primary" mb={{ base: "1rem", md: "1.5rem" }} />
          <Heading as="h3" size={{ base: "md", md: "lg" }} mb={{ base: "1rem", md: "1.5rem" }}>
            Get Matched
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>Get matched with people who share your interests and preferences.</Text>
        </Box>
      </Stack>
      <Box textAlign="center">
        <Button mx="auto" mt={{ base: "2rem", md: "4rem" }} variant="outline" colorScheme="primary" sx={{ fontSize: { base: "sm", md: "lg" }, fontWeight: "bold", bg: "primary", color: "white", py: "1rem", px: "2rem" }}>
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HowItWorks;
