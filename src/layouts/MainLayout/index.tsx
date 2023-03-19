import { Box, Flex } from "@chakra-ui/react";
import Footer from "layouts/components/Footer";
import Navbar from "layouts/components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
       {/* p={{ base: "10px", md: "30px" }} */}
      <Box h="calc(100vh - 65px)" w="100vw" overflowY="auto">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};
export default MainLayout;
