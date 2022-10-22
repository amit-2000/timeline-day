import React from "react";
import { Box } from "@chakra-ui/react";
import Timeline from "./Timeline";
import Cls from "./Cls";
function Timelinehome() {
  return (
    <Box
      // pos={"absolute"}
      // w={1212}
      // scro
      // // h={609}
      // left={137}
      // top={112}
      // backgroundColor={"#FFFFFF"}
      // borderRadius={5}
    >
      <Box
        overflowX="scroll"
        pos={"absolute"}
        w={1212}
        scro
        h={609}
        left={137}
        top={112}
        backgroundColor={"#FFFFFF"}
        borderRadius={5}
      >
        <Timeline />
        <Cls />
      </Box>
    </Box>
  );
}

export default Timelinehome;
