// pages/learnmore.tsx
"use client"
import { Box, Heading, Text } from "@chakra-ui/react";

const LearnMorePage = () => {
  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <Heading as="h1" mb={4}>
        More About Us
      </Heading>
      <Box bg="white" p={4} borderRadius="md">
        <Text mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue neque nec velit lobortis lacinia.
          Mauris eu lectus ac orci tristique elementum. Sed ut libero eros. Vivamus euismod, nunc vel consequat
          malesuada, dui turpis cursus ante, non dictum tortor justo nec mi.
        </Text>
        <Text mb={4}>
          Sed commodo fermentum massa at pharetra. Phasellus ac facilisis metus, sed sollicitudin mauris. Aliquam
          nec ex id leo volutpat fermentum. Mauris ultrices nisi nisl, et eleifend neque efficitur et.
        </Text>
        <Text mb={4}>
          Fusce maximus nulla euismod sagittis hendrerit. Curabitur eu semper elit. Proin pellentesque, ligula
          ut tempor gravida, metus velit euismod nunc, vitae malesuada lectus tortor ac mi. Curabitur bibendum
          dui et nulla dapibus, et suscipit erat sodales.
        </Text>
      </Box>
    </Box>
  );
};

export default LearnMorePage;
