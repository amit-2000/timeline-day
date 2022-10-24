import React from "react";
import { HStack, Box, Text } from "@chakra-ui/react";
//
const Exams = ({ item }) => {
  // console.log(item);
  var date = new Date(item.start_time * 1000);
  var start_hour = date.getHours();
  var start_minute = date.getMinutes();
  var date_end = new Date(item.end_time * 1000);
  var end_hour = date_end.getHours();
  var end_minute = date_end.getMinutes();
  // console.log(end_minute);
//   console.log(
//     start_hour,
//     ":",
//     start_minute,
//     end_hour,
//     ":",
//     end_minute,
//     item.end_time
//   );

  var width = 264;
  var onecandle = width / 60;

  const startingTime = start_hour * width + 4 + start_minute * onecandle;
  let endingTime = end_hour * width + 4 + end_minute * onecandle;
  if (endingTime < startingTime) {
    endingTime = startingTime + 264;
  }

  let newWidth = endingTime - startingTime;
  if (newWidth < 300) {
    newWidth += 100;
  }
  // console.log(newWidth);
  return (
    <HStack spacing="24px" bg={"red"}>
      {/* ---------------------------------------------------------------------------------------------------- */}

      <Box
        w={newWidth}
        h="73px"
        pos={"absolute"}
        left={start_hour * width + 4 + start_minute * onecandle}
        // bg="yellow.200"
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-start"}
        padding={"10px"}
        gap={"10px"}
        bg={"#F7EDFF"}
        color={"#B251FF"}
        borderRadius={"5px"}
      >
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          padding={"5px"}
          gap={"10px"}
          pos={"absolute"}
          width={"22px"}
          height="22px"
          left="10px"
          top="10px"
          bg="#B251FF"
          border-radius="28px"
          borderRadius={"50%"}
        >
          <Text
            w={12}
            h={12}
            fontFamily="Inter"
            fontStyle={"normal"}
            fontWeight={500}
            fontSize={"10px"}
            lineHeight={"12px"}
            color={"#FFFFFF"}
            flex="none"
            order={0}
            flexGrow={0}
          >
            PS
          </Text>
        </Box>
        <Box>
          <Text
            position={"absolute"}
            width={"130px"}
            height="17px"
            left="38px"
            top="10px"
            // color={item.color}
            border-radius="28px"
            borderRadius={"50%"}
            fontFamily="Inter"
            fontStyle={"normal"}
            fontWeight={500}
            fontSize={"15px"}
            lineHeight={"17px"}
          >
            Physics Examination
            {/* {item.title} */}
          </Text>
          {/* <Text
            position={"absolute"}
            width={"99px"}
            height="14px"
            left="38px"
            top="32px"
            // color={"#6F6CE5"}
            border-radius="28px"
            borderRadius={"50%"}
            fontFamily="Inter"
            fontStyle={"normal"}
            fontWeight={400}
            fontSize={"12px"}
            lineHeight={"15px"}
          >
            Michel Corleone
            {/* {item.subtitle} */}
          {/* </Text> */}
          <Text
            position={"absolute"}
            width={"103px"}
            height="12px"
            left="38px"
            top="34px"
            // color={"#6F6CE5"}
            fontFamily="Inter"
            fontStyle={"normal"}
            fontWeight={400}
            fontSize={"10px"}
            lineHeight={"12px"}
          >
            09:00AM-10:00AM
          </Text>
        </Box>
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"row"}
          padding={"5px 10px"}
          gap={"10px"}
          width={"51px"}
          height="22px"
          bg="#FFFF"
          borderRadius={"8px"}
          flex={"none"}
          order={0}
          flexGrow={0}
          position={"absolute"}
          left="181px"
          top={"10px"}
        >
          <Text
            width={"31px"}
            h={"12px"}
            fontFamily={"Inter"}
            fontStyle={"normal"}
            fontWeight={500}
            fontSize={"10px"}
            lineHeight={"12px"}
            // color={"#6F6CE5"}
            flex={"none"}
            order={0}
            flexGrow={0}
          >
            B -302
            {/* {item.location} */}
          </Text>
        </Box>
      </Box>
      {/* ---------------------------------------------------------------------------------------------------- */}
      {/* <Box
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
      ></Box> */}
    </HStack>
  );
};
export default Exams;
