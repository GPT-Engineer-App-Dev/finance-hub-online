import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Global Market Updates",
    image: "https://via.placeholder.com/150",
    description: "Latest updates on the global market trends.",
  },
  {
    title: "Tech Innovations 2023",
    image: "https://via.placeholder.com/150",
    description: "The most promising tech innovations to watch in 2023.",
  },
  {
    title: "Business Strategies Post-Pandemic",
    image: "https://via.placeholder.com/150",
    description: "How businesses are adapting their strategies post-pandemic.",
  },
];

const trendingTopics = [
  "Stock Market Today",
  "AI in Healthcare",
  "Cryptocurrency Trends",
  "Global Economic Outlook",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="md">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={4}>
            {articles.map((article, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
                <Image src={article.image} alt={article.title} />
                <Box p={4}>
                  <Heading size="md">{article.title}</Heading>
                  <Text mt={2}>{article.description}</Text>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" p={4} bg="gray.100">
          <Heading size="md" mb={4}>Trending Topics</Heading>
          <VStack spacing={2} align="start">
            {trendingTopics.map((topic, index) => (
              <Text key={index}>{topic}</Text>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={4}>
        <HStack spacing={4} justifyContent="center">
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
          <Link as={RouterLink} to="/privacy-policy">Privacy Policy</Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;