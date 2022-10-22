import React from "react";
import { HStack, Box, Text } from "@chakra-ui/react";
const TimeLineOne = ({ time }) => {
  var width = 264;
  return (
    <HStack>
      {/* bg="yellow.200" */}
      <Box w={width}>
        <Box display={"flex"} mt={1}>
          <Text w={width / 4}>{time}</Text>
          <Text w={width / 4} fontSize={13}>
            |
          </Text>
          <Text w={width / 4} fontSize={17} mt={-0.9} color={"red"}>
            |
          </Text>
          <Text w={width / 4} fontSize={13}>
            |
          </Text>
        </Box>
      </Box>
    </HStack>
  );
};

export default TimeLineOne;
