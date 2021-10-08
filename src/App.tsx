import React from "react";
import { Text, Button, useColorMode } from "@chakra-ui/react";
import ColorModeSwitch from "./components/ColorModeSwitch";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <ColorModeSwitch />
      <Text>
        Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu
        reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis
        que eu levo! Suco de cevadiss deixa as pessoas mais interessantis.
        Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
        Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito
        paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat.
        Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula
        non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique
        interdum.
      </Text>
    </>
  );
}

export default App;
