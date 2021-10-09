import React from "react";
import { Text, Button, useColorMode } from "@chakra-ui/react";
import Header from "./components/Header";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Header />
    </>
  );
}

export default App;
