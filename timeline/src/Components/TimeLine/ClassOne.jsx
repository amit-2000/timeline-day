import React from "react";
import { HStack, Box, Text } from "@chakra-ui/react";
//
const ClassOne = ({ item }) => {
  var date = new Date(item.start_time * 1000);
  var start_hour = date.getHours();
  var start_minute = date.getMinutes();
  var date_end = new Date(item.end_time * 1000);
  var end_hour = date_end.getHours();
  var end_minute = date_end.getMinutes();
  // console.log(
  //   start_hour,
  //   ":",
  //   start_minute,
  //   end_hour,
  //   ":",
  //   end_minute,
  //   item.end_time
  // );

  var width = 400;
  var onecandle = width / 60;

  const startingTime = start_hour * width + 4 + start_minute * onecandle;
  let endingTime = end_hour * width + 4 + end_minute * onecandle;
  if (endingTime < startingTime) {
    endingTime = startingTime + 264;
  }

  const newWidth = endingTime - startingTime;
  console.log(newWidth);
  return (
    <HStack spacing="24px" bg={"red"}>
      <Box
        w={newWidth}
        h="73px"
        pos={"absolute"}
        left={start_hour * width + 4 + start_minute * onecandle}
        bg="yellow.200"
      >
        <Box display={"flex"} alignItems="center">
          {item.title}
          <Text>{item.type}</Text>
        </Box>
      </Box>
      <Box
        position={"absolute"}
        w={"561px"}
        height={0.4}
        top={"220px"}
        left={
          new Date().getHours() * width +
          4 +
          (new Date().getMinutes() - 6) * onecandle -
          299
        }
        border={"1px solid #FF525"}
        transform={"rotate(90deg)"}
        bg={"red"}
        zIndex={1}
      ></Box>
    </HStack>
  );
};
export default ClassOne;
