// pages/page.tsx
"use client"
import { Box, Heading, Input, Textarea, Checkbox, Button } from "@chakra-ui/react";

const Page = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form submission logic here
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <Box bg="white" p={8} borderRadius="md" boxShadow="md">
        <Heading as="h1" size="lg" mb={6}>
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Name" mb={4} />
          <Input type="email" placeholder="Email" mb={4} />
          <Textarea placeholder="Message" mb={4} />
          <Checkbox defaultChecked colorScheme="teal" mb={4}>
            Subscribe
          </Checkbox>
          
          <Button colorScheme="teal" size="lg" width="full" type="submit" mt={4}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Page;




