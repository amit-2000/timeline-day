import React from "react";
import { HStack, Box } from "@chakra-ui/react";
const ClassOne = ({ stime }) => {
  var width = 264;
  var decimal = (stime + "").split(".")[1] ? (stime + "").split(".")[1] : 0;
  stime = Math.floor(stime);
  // console.log(decimal, stime);
  var onecandle = width / 60;
  var newWidth = 0;
  if (stime === 0.3) {
    newWidth = onecandle * 30;
  }

  return (
    <HStack spacing="24px" bg={"red"}>
      <Box
        w={newWidth ? newWidth : 150}
        h={73}
      
        pos={"absolute"}
        // stime * width + 24 * stime
        left={
          newWidth
            ? onecandle * decimal
            : stime * width + 24 * stime + decimal * onecandle
        }
        // h="40px"
        bg="yellow.200"
      >
        <Box display={"flex"} alignItems="center">
          {stime}
        </Box>
      </Box>
    </HStack>
  );
};

export default ClassOne;
