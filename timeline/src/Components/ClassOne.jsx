import React from "react";
import { Stack, HStack, Box, Text, VStack, Center } from "@chakra-ui/react";
const ClassOne = ({ stime }) => {
  var width = 200;
  var decimal = (stime + "").split(".")[1] ? (stime + "").split(".")[1] : 0;
  stime = Math.floor(stime);
  console.log(decimal, stime);
  var onecandle = width / 60;
  var newWidth = 0;
  if (stime === 0.3) {
    newWidth = onecandle * 30;
  }

  return (
    <HStack spacing="24px">
      <Box
        w={newWidth ? newWidth : 150}
        // w={width}
        pos={"absolute"}
        // stime * width + 24 * stime
        left={
          newWidth
            ? onecandle * decimal
            : stime * width + 24 * stime + decimal * onecandle
        }
        h="40px"
        bg="yellow.200"
      >
        <Box display={"flex"} mt={1}>
          {stime}
        </Box>
      </Box>
    </HStack>
  );
};

export default ClassOne;
