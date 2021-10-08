import { Switch, Slide, Text, useColorMode } from "@chakra-ui/react";
export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Text
        as="button"
        onClick={toggleColorMode}
        cursor="pointer"
        bgColor="gray.50"
        borderRadius="10px"
        borderColor="gray.200"
        borderWidth="1px"
        lineHeight="1.2"
        p="0"
      >
        <Text
          as="span"
          transition="opacity 0.5s"
          opacity={colorMode === "light" ? "1.0" : "0.5"}
        >
          🌝
        </Text>
        <Text
          ml="1"
          as="span"
          transition="opacity 0.5s"
          opacity={colorMode === "dark" ? "1.0" : "0.5"}
        >
          🌚
        </Text>
      </Text>
    </>
  );
}
