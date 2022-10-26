import React from "react";
import { HStack, Box, Text, Divider, Stack } from "@chakra-ui/react";
const TimeLineOne = ({ time }) => {
  var width = 264;

  return (
    <Box>
      <HStack>
        <Box w={width} display="flex">
          <Box display={"flex"} mt={1}>
            <Text w={width / 4} fontSize="12px">
              {time}
            </Text>
            <Box height="0">
              <Text w={width / 4} fontSize={10} height="0">
                |
              </Text>
            </Box>

            <Text w={width / 4} fontSize={15} mt={-0.9} >
              |
            </Text>
            <Text w={width / 4} fontSize={10}>
              |
            </Text>
          </Box>
          <Box height={"4px"} marginTop={"34px"}>
            <Divider borderColor={"red"} />
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default TimeLineOne;
