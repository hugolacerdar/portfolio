import { Icon, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ImSun, ImBrightnessContrast } from "react-icons/im";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.800", "gray.50");

  return (
    <>
      <Text onClick={toggleColorMode} cursor="pointer" fontSize="1.5rem">
        {colorMode === "dark" ? (
          <Icon as={ImBrightnessContrast} />
        ) : (
          <Icon as={ImSun} />
        )}
      </Text>
    </>
  );
}
