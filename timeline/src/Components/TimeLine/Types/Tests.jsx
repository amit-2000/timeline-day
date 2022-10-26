import React from "react";
import { HStack, Box, Text } from "@chakra-ui/react";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
const Tests = ({ item }) => {
  // console.log(item);
  var date = new Date(item.start_time * 1000);
  var start_hour = date.getHours();
  var start_minute = date.getMinutes();
  var date_end = new Date(item.end_time * 1000);
  var end_hour = date_end.getHours();
  var end_minute = date_end.getMinutes();
  //
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
  // if (newWidth < 300) {
  //   newWidth += 100;
  // }
  // console.log(newWidth);
  return (
    <HStack spacing="24px">
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
        bg={"#F6FFFE"}
        borderRadius={"5px"}
        color={"#19A392"}
        fontWeight={600}
        fontSize={"12px"}
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
          bg="#19A392"
          border-radius="28px"
          borderRadius={"50%"}
        >
          <Text
            fontWeight={500}
            fontSize={"10px"}
            lineHeight={"12px"}
            color={"#FFFFFF"}
            flex="none"
            order={0}
            flexGrow={0}
          >
            <NotificationsActiveOutlinedIcon
              style={{ width: "12px", height: "12px" }}
            />
          </Text>
        </Box>
        <Box>
          <Text
            position={"absolute"}
            width={"120px"}
            height="17px"
            left="38px"
            top="10px"
            fontSize={"15px"}
            lineHeight={"17px"}
          >
            {item.title}
            {/* {item.title} */}
          </Text>

          <Text
            position={"absolute"}
            width={"103px"}
            height="12px"
            left="38px"
            top="34px"
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
          padding={"5px 10px"}
          gap={"10px"}
          width={"71px"}
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
            // width={"31px"}
            h={"12px"}
            lineHeight={"12px"}
            flex={"none"}
            order={0}
            flexGrow={0}
          >
            Seminar Hall
            {/* {item.location} */}
          </Text>
        </Box>
      </Box>
    </HStack>
  );
};
export default Tests;
