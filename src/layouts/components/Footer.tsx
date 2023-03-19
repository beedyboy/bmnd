import { Box, Flex, Text, IconButton, Button, Input, Stack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      bg="gray.800"
      color="white"
      py="6"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Flex justifyContent="space-between" alignItems="center" px="15px" flexDirection={["column", "column", "row"]}>
        <Flex flexDirection={`column`} justifyContent="space-between" alignItems="center" mb={[4, 4, 0]}>
          <Text fontSize={["2xl", "2xl", "xl"]} fontWeight="bold">
            bmndconnect
          </Text>
          <Flex flexDirection={`column`} justifyContent="center" mt="4" ml="2">
            <Text fontSize={["sm", "sm", "md"]} textAlign="center">
              Follow us:
            </Text>
            <Box display="flex" ml="2">
              <IconButton aria-label="Facebook" icon={<FaFacebook />} variant="ghost" mr="2" />
              <IconButton aria-label="Twitter" icon={<FaTwitter />} variant="ghost" mr="2" />
              <IconButton aria-label="Instagram" icon={<FaInstagram />} variant="ghost" mr="2" />
            </Box>
          </Flex>
        </Flex>

        <Stack gap={["1rem", "3rem"]} fontSize={["sm", "sm", "md"]} direction={["column", "column", "row"]} justifyContent="space-between" mb={[4, 4, 0]}>
          <Box gap="2rem" fontSize={`sm`} display="flex" flexDirection={`column`} justifyContent="space-between">
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>
          </Box>
          <Box gap="2rem" fontSize={`sm`} display="flex" flexDirection={`column`} justifyContent="space-between">
            <a href="/get-started">Get started</a>
            <a href="/">Success Story</a>
            <a href="/">Terms & Condtion</a>
          </Box>
        </Stack>
        {/* Subscribe section */}

        <Flex flexDirection={`column`} gap="1rem" justifyContent="center" alignItems="center">
          <Box>
            <Text fontSize={["sm", "sm", "md"]} fontWeight="bold" textAlign={["center", "center", "left"]} mb="2">
              Subscribe to our newsletter
            </Text>
          </Box>
          <Box display="flex" flexDirection={["column", "column", "row"]} alignItems="center" gap={[2, 2, 4]}>
            <Input type="email" placeholder="Enter your email address" />
            <Button bgColor={`primary`} type="submit">
              Subscribe
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex justifyContent="center" mt="4">
        <Box>
          <Text fontSize={["sm", "sm", "md"]} textAlign="center">
            © {year} bmndconnect. All rights reserved.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
