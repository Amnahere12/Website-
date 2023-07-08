// pages/signin.tsx
"use client"
import { Box, Heading, Input, Button } from "@chakra-ui/react";

const SignInPage = () => {
  return (
    <Box maxW="sm" mx="auto" mt={8} p={4}>
      <Heading as="h1" mb={4}>
        Sign In
      </Heading>
      <Box bg="white" p={4} borderRadius="md">
        <Input placeholder="Email" mb={2} />
        <Input type="password" placeholder="Password" mb={4} />
        <Button colorScheme="teal" width="full">
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default SignInPage;


