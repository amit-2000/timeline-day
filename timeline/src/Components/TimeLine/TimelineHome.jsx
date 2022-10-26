import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Timeline from "./Timeline";
import Schedules from "./Schedules";
import Timestamp from "../Time stamp/Timestamp";
const Timelinehome = ({ currentsDaysEvent, typesSet }) => {
  // console.log(currentsDaysEvent, [...typesSet]);

  return (
    <Box>
      <Box
        overflowX="scroll"
        pos={"absolute"}
        w={1128}
        h={609}
        left={137}
        top={112}
        backgroundColor={"#FFFFFF"}
        borderRadius={5}
      >
        <Timeline />

        <Box>
          <Schedules currentsDaysEvent={currentsDaysEvent} />
          <Center>
            <Timestamp currentsDaysEvent={currentsDaysEvent} />
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default Timelinehome;
