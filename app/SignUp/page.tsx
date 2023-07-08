// pages/signup.tsx
"use client"
import { Box, Heading, Input, Button } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <Box maxW="sm" mx="auto" mt={8} p={4}>
      <Heading as="h1" mb={4}>
        Sign Up
      </Heading>
      <Box bg="white" p={4} borderRadius="md">
        <Input placeholder="Email" mb={2} />
        <Input type="password" placeholder="Password" mb={2} />
        <Input type="password" placeholder="Confirm Password" mb={4} />
        <Button colorScheme="teal" width="full">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpPage;
