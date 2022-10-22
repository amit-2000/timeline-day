import React from "react";
import {  HStack, } from "@chakra-ui/react";
import TimeLineOne from "./TimeLineOne";
function Timeline() {
  var time = [
    0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 13, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ];

  return (
    <HStack spacing="24px" h={"60px"} >
      {time.map((item) => {
        return <TimeLineOne time={item} />;
      })}
    </HStack>
  );
}

export default Timeline;
