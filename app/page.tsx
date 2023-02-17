"use client";
import Todo from "./todo";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraProvider>
      <Box
        mx={{ base: "20px", lg: "auto" }}
        textAlign="center"
        bg="orange"
        color="white"
        pt="90px"
        pb="250px"
      >
        <Heading fontSize={"36px"}>Welcome to Todo Application</Heading>
      </Box>
      <Todo />
    </ChakraProvider>
  );
}