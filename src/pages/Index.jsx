import React from "react";
import { Box, Button, Container, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        Snack Haven
      </Heading>

      <Flex direction="column" align="center" mb={8}>
        <Image src="https://images.unsplash.com/photo-1676801371068-9c4586f18c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbmFjayUyMHNob3B8ZW58MHx8fHwxNzEwMjg0NjQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={4} alt="Snack Shop" />
        <Text fontSize="xl">Welcome to Snack Haven, your one-stop shop for delicious and mouth-watering snacks!</Text>
      </Flex>

      <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }} gap={6}>
        {/* Repeat this box for each product */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1623660053975-cf75a8be0908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBiYXJ8ZW58MHx8fHwxNzEwMjg0NjQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Chocolate Bar" fit="cover" w="100%" h={200} />
          <VStack p={4} align="stretch">
            <Heading size="md">Chocolate Bar</Heading>
            <Text>Deliciously rich and creamy chocolate to satisfy your sweet tooth.</Text>
            <Button colorScheme="teal" leftIcon={<FaShoppingCart />}>
              Add to Cart
            </Button>
          </VStack>
        </Box>
        {/* End of product box */}
      </Grid>
    </Container>
  );
};

export default Index;
