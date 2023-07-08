// components/Section.tsx
"use client"
import { Box, Heading, Text, Flex, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Section = () => {
  return (
    <Box>
      <Flex align="center" justify="center" minHeight="calc(100vh - 64px)" p={4}>
        <Box textAlign="center">
          <Heading color="teal">Hello!</Heading> <br />
          <Heading>Welcome to Coding World</Heading>

          <Text mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue neque nec velit lobortis
            lacinia. Mauris eu lectus ac orci tristique elementum. Sed ut libero eros. Vivamus euismod, nunc
            vel consequat malesuada, dui turpis cursus ante, non dictum tortor justo nec mi.
          </Text>

          <Flex justify="center" mt={8}>
            <Link as={NextLink} href="/LearnMore">
              <Button colorScheme="teal" mr={4}>
                Learn More
              </Button>
            </Link>


            <Link as={NextLink} href="/Form">
              <Button colorScheme="gray">Get Started</Button>

            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Section;
