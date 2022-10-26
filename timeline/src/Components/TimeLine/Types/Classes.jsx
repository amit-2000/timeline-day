import React from "react";
import { HStack, Box, Text, Flex } from "@chakra-ui/react";
const Classes = ({ item }) => {
  var date = new Date(item.start_time * 1000);
  var start_hour = date.getHours();
  var start_minute = date.getMinutes();
  var date_end = new Date(item.end_time * 1000);
  var end_hour = date_end.getHours();
  var end_minute = date_end.getMinutes();
  // console.log(end_minute);
  let s = start_minute,
    e = end_minute;
  if (s < 10) {
    s = "0" + start_minute;
  }
  if (e < 10) {
    e = "0" + e;
  }
  let starting_Time =
    start_hour >= 12
      ? start_hour - 12 + ":" + s + "PM"
      : "0" + start_hour + ":" + s + "AM";
  let ending_Time =
    end_hour > 12
      ? end_hour - 12 + ":" + e + "PM"
      : "0" + end_hour + ":" + e + "AM";

  if (end_hour - 12 < 10) {
    ending_Time = "0" + ending_Time;
  }
  if (start_hour - 12 < 10) {
    starting_Time = "0" + starting_Time;
    // console.log(starting_Time, ending_Time);
  }

  var w = 264;
  var onecandle = w / 60;

  const startingTime = start_hour * w + 4 + start_minute * onecandle;
  let endingTime = end_hour * w + 4 + end_minute * onecandle;
  if (endingTime < startingTime) {
    endingTime = startingTime + 264;
  }

  let newWidth = endingTime - startingTime;
  //   if (newWidth < 300) {
  //     newWidth += 200;
  //   }
  // console.log(
  //   start_hour,
  //   ":",
  //   start_minute,
  //   end_hour,
  //   ":",
  //   end_minute,
  //   newWidth
  // );
  // console.log(newWidth);
  return (
    <HStack spacing="24px">
      {/* ---------------------------------------------------------------------------------------------------- */}

      <Flex
        w={newWidth + "px"}
        h="73px"
        pos={"absolute"}
        left={start_hour * w + 4 + start_minute * onecandle}
        direction={"row"}
        align={"flex-start"}
        p={"10px"}
        gap={"10px"}
        bg={"#F2F2FF"}
        color={"#6F6CE5"}
        borderRadius={"5px"}
        fontSize={"12px"}
        fontStyle={"normal"}
        fontWeight={500}
      >
        <Flex
          align={"flex-start"}
          direction={"column"}
          p={"5px"}
          gap={"10px"}
          pos={"absolute"}
          w={"22px"}
          h="22px"
          left="10px"
          top="10px"
          bg="#6F6CE6"
          border-radius="28px"
          borderRadius={"50%"}
        >
          <Text
            w={12}
            h={12}
            fontSize={"10px"}
            lineHeight={"12px"}
            color={"#FFFFFF"}
            flex="none"
            order={0}
            flexGrow={0}
          >
            PS
          </Text>
        </Flex>
        <Box>
          <Text
            position={"absolute"}
            w={"61px"}
            h="17px"
            left="38px"
            top="10px"
            fontSize={"14px"}
            lineHeight={"17px"}
          >
            Physics
            {/* {item.title} */}
          </Text>
          <Text
            position={"absolute"}
            w={"112px"}
            h="14px"
            left="38px"
            top="32px"
            lineHeight={"15px"}
          >
            {/* Michel Corleone */}
            {item.subtitle}
          </Text>
          <Text
            position={"absolute"}
            w={"112px"}
            h="12px"
            left="38px"
            top="54px"
            fontSize={"10px"}
            lineHeight={"12px"}
          >
            {starting_Time}-{ending_Time}
          </Text>
        </Box>
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"row"}
          p={"5px 10px"}
          gap={"10px"}
          w={"51px"}
          h="22px"
          bg="#FFFF"
          borderRadius={"8px"}
          flex={"none"}
          order={0}
          flexGrow={0}
          position={"absolute"}
          left="175px"
          top={"10px"}
        >
          <Text
            h={"12px"}
            lineHeight={"12px"}
            flex={"none"}
            order={0}
            flexGrow={0}
          >
            B -302
            {/* {item.location} */}
          </Text>
        </Box>
      </Flex>
    </HStack>
  );
};
export default Classes;
