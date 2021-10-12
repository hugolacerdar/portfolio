import { Box, useColorModeValue } from "@chakra-ui/react";

export default function HDivider() {
  const bgColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box w={["60px", "90px"]} mx="auto" h="2px" bg={bgColor} my={["9", "20"]} />
  );
}
