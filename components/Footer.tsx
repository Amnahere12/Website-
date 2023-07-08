// components/Footer.tsx
import { Box, Flex, Link, Text, IconButton } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.200" py={4} px={8}>
      <Flex align="center" justify="center">
        <Box>
          <Text fontSize="sm" fontWeight="bold" textAlign="center" mb={2}>
            Follow us on social media:
          </Text>
          <Flex align="center" justify="center">
            <IconButton
              as={Link}
              href="https://github.com"
              aria-label="GitHub"
              icon={<FaGithub />}
              colorScheme="gray"
              variant="ghost"
              mx={2}
            />
            <IconButton
              as={Link}
              href="https://twitter.com"
              aria-label="Twitter"
              icon={<FaTwitter />}
              colorScheme="gray"
              variant="ghost"
              mx={2}
            />
            <IconButton
              as={Link}
              href="https://linkedin.com"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              colorScheme="gray"
              variant="ghost"
              mx={2}
            />
          </Flex>
          <Text fontSize="sm" textAlign="center" mt={2}>
            &copy; 2023 My Website. All rights reserved.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
