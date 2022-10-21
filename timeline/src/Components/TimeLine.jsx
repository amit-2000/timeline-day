import React from "react";
import { Stack, HStack, VStack, Box } from "@chakra-ui/react";
import TimeLineOne from "./TimeLineOne";
function TimeLine() {
  var time = [
    0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 13, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ];

  return (
    <HStack spacing="24px" mt={20} >
      {time.map((item) => {
        return <TimeLineOne time={item} />;
      })}
    </HStack>
  );
}

export default TimeLine;
