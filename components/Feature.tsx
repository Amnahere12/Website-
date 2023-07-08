// components/Features.tsx
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

interface FeatureItemProps {
  title: string;
  description: string;
}

const Features = () => {
  return (
    <Box mt={8} mb={60}>
      <Heading size="lg" mb={4} textAlign={"center"}>
        Features
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        <FeatureItem
          title="Feature 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <FeatureItem
          title="Feature 2"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
        />
        <FeatureItem
          title="Feature 3"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
        />
      </SimpleGrid>
    </Box>
  );
};

const FeatureItem = ({ title, description }: FeatureItemProps) => (
  <Box borderWidth="1px" borderRadius="lg" p={4}>
    <Heading size="md" mb={2}>
      {title}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

export default Features;

