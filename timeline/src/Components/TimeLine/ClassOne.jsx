import React, { useState } from "react";
import { HStack, Box } from "@chakra-ui/react";
const ClassOne = ({ item }) => {
  var date = new Date(item.start_time * 1000);
  var start_hour = date.getHours();
  var start_minute = date.getMinutes();
  console.log(item);
  var width = 264;
  // var decimal = (stime + "").split(".")[1] ? (stime + "").split(".")[1] : 0;
  // stime = Math.floor(stime);
  // console.log(decimal, stime);
  var onecandle = width / 60;
  // var newWidth = 0;
  // if (stime === 0.3) {
  //   newWidth = onecandle * 30;
  // }

  return (
    <HStack spacing="24px" bg={"red"}>
      <Box
        w={width}
        h="73px"
        pos={"absolute"}
        left={start_hour * width + 2 * start_hour + start_minute * onecandle}
        bg="yellow.200"
      >
        <Box display={"flex"} alignItems="center">
          {item.title}
        </Box>
      </Box>
    </HStack>
  );
};

export default ClassOne;
