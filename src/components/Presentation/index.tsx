import { Grid } from "@chakra-ui/react";
import Bio from "./Main/Bio";
import Name from "./Main";

export default function Presentation() {
  return (
    <Grid gridTemplateColumns={["1fr", "1fr", "1fr", "1fr"]} mx={["0", "10px"]}>
      <Name />
    </Grid>
  );
}
