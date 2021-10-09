import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

export default function Header() {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Flex width="100%" justify="flex-end" bgColor={bgColor}>
      <Box my="3" mx="4">
        <ColorModeSwitch />
      </Box>
    </Flex>
  );
}
