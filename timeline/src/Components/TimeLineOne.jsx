import React from "react";
import { Stack, HStack, Box, Text, VStack, Center } from "@chakra-ui/react";
const TimeLineOne = ({ time }) => {
  var width = 200;
  return (
    <HStack>
      <Box
        w={width}
        h="40px"
        bg="yellow.200"
      >
        <Box display={"flex"} mt={1}>
          <Text w={width / 4}>{time}</Text>
          <Text w={width / 4}>|</Text>
          <Text w={width / 4} color={"red"}>
            |
          </Text>
          <Text w={width / 4}>|</Text>
        </Box>
      </Box>
    </HStack>
  );
};

export default TimeLineOne;
