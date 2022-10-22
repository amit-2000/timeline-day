import React from "react";
import ClassOne from "./ClassOne";
import { HStack, Box } from "@chakra-ui/react";

const Cls = ({ item }) => {
  var startTime = [0, 1, 2,4, 5, 6, 7, 8, 9, 16];
  //   var time = [
  //     1.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //     22, 23,
  //   ];

  return (
    <Box>
      <HStack mt={12} pos={"relative"}>
        {startTime.map((stime) => {
          return <ClassOne stime={stime} />;
        })}
      </HStack>
    </Box>
  );
};

export default Cls;
