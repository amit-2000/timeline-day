import React from "react";
import ClassOne from "./ClassOne";
import { Stack, HStack, Box, Text, VStack, Center } from "@chakra-ui/react";

function Cls() {
  var startTime = [0.5, 1.31, 2.41, 5, 6, 7, 8, 9, 16];
  var time = [
    1.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ];
  return (
    <HStack mt={20} pos={"relative"}>
      {startTime.map((stime) => {
        return <ClassOne stime={stime} />;
      })}
    </HStack>
  );
}

export default Cls;
