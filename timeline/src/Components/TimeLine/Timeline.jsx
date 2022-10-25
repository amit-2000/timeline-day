import React from "react";
import { HStack, Box } from "@chakra-ui/react";
import TimeLineOne from "./TimeLineOne";
function Timeline() {
  var time = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ];

  return (
    <Box>
      <HStack spacing="0" h={"60px"} position={"sticky"}>
        {time.map((item) => {
          return <TimeLineOne time={item} />;
        })}
      </HStack>
    </Box>
  );
}

export default Timeline;
