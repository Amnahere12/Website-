// components/Navbar.js
"use client"
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" p={4} bg="gray.100" color="white">
      <Box>
        <Link as={NextLink} href="/" fontWeight="bold" color={'teal'}>
          Home
        </Link>
      </Box>
      <Box>
        <Link as={NextLink} href="/SignIn" mr={4} color={'teal'}>
          Sign In
        </Link>
        <Link as={NextLink} href="/SignUp">
        <Button colorScheme="teal">Sign Up</Button>
        </Link>
        
      </Box>
    </Flex>
  );
};

export default Navbar;
