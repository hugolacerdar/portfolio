import { Text, Box, Flex, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

export default function Header() {
  const top = useColorModeValue("gray.600", "gray.400");
  const bottom = useColorModeValue("gray.700", "gray.300");

  return (
    <Flex width="100%" justify="flex-end">
      <Box my="3" mx="4">
        <Text as="strong" color={top}>
          HUGO LACERDA'S WEBSITE
        </Text>
        <Text color={bottom}>currently unavailable for work</Text>
      </Box>
      <Box my="3" mx="4">
        <ColorModeSwitch />
      </Box>
    </Flex>
  );
}
