import React from "react";
import { Box } from "@chakra-ui/react";
import Timeline from "./Timeline";
import Cls from "./Cls";
const Timelinehome = ({ currentsDaysEvent, typesSet }) => {
  // console.log(currentsDaysEvent, [...typesSet]);

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
        w={1128}
        scro
        h={609}
        left={137}
        top={112}
        backgroundColor={"#FFFFFF"}
        borderRadius={5}
      >
        <Timeline />
        <Box>
          <Cls currentsDaysEvent={currentsDaysEvent} />
        </Box>
      </Box>
    </Box>
  );
};

export default Timelinehome;
