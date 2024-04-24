// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Heading, Text, Button, VStack, Link, Image } from "@chakra-ui/react";
import { FaTools, FaUserCircle, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="flex-start" minH="100vh" p={4} bg="gray.100">
      <Flex justify="space-between" w="full" p={4}>
        <Flex>
          <Button leftIcon={<FaTools />} colorScheme="teal" variant="solid" size="lg" m={2} as={Link} href="/manage-tools">
            Manage Tools
          </Button>
          <Button leftIcon={<FaUserCircle />} colorScheme="blue" variant="outline" size="lg" m={2}>
            Account
          </Button>
        </Flex>
        <Button leftIcon={<FaSignInAlt />} colorScheme="orange" variant="ghost" size="lg" m={2}>
          Log In
        </Button>
      </Flex>
      <VStack spacing={8} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRvb2xzfGVufDB8fHx8MTcxMzk3NTE0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Operational Software" />
        <VStack spacing={8} align="center" bgGradient="linear(to-r, teal.300, blue.500)" p={10} borderRadius="lg" boxShadow="xl">
          <Heading as="h1" size="4xl" bgClip="text" bgGradient="linear(to-r, red.500, yellow.500)" textAlign="center">
            Welcome to Software Hub
          </Heading>
          <Text fontSize="2xl" color="white" textAlign="center">
            Your one-stop platform for all operational software tools.
          </Text>
        </VStack>

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
