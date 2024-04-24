// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Heading, Text, Button, VStack, Link, Image } from "@chakra-ui/react";
import { FaTools, FaUserCircle, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4} bg="gray.100">
      <VStack spacing={8} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRvb2xzfGVufDB8fHx8MTcxMzk3NTE0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Operational Software" />
        <Heading as="h1" size="2xl" textAlign="center">
          Software Hub
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your one-stop platform for all operational software tools.
        </Text>
        <Flex wrap="wrap" justify="center" mt={6}>
          <Button leftIcon={<FaTools />} colorScheme="teal" variant="solid" size="lg" m={2}>
            Manage Tools
          </Button>
          <Button leftIcon={<FaUserCircle />} colorScheme="blue" variant="outline" size="lg" m={2}>
            Account
          </Button>
          <Button leftIcon={<FaSignInAlt />} colorScheme="orange" variant="ghost" size="lg" m={2}>
            Log In
          </Button>
        </Flex>
        <Text fontSize="md" color="gray.600">
          Need help?{" "}
          <Link color="teal.500" href="#">
            Contact Support
          </Link>
        </Text>
      </VStack>
    </Flex>
  );
};

export default Index;
