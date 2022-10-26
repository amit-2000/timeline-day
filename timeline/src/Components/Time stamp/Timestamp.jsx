import React, { useRef, useEffect } from "react";
import { Box, Divider, Stack, Text } from "@chakra-ui/react";

const Timestamp = ({ currentsDaysEvent }) => {
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.scrollIntoView({
      block: "end",
      inline: "center",
      behavior: "smooth",
    });
  }, [currentsDaysEvent]);
  const date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  const shour = hours;
  const smins = minutes;
  console.log(hours, minutes);
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;
  var strTime = hours + ":" + minutes + " " + ampm;
  return (
    <Box
      ref={myRef}
      position="absolute"
      left={shour * 264 + 4 + smins * 4.32}
      top={-2}
    >
      <Stack height={"400px"} marginTop={"34px"}>
        <Text
          color={"red"}
          marginLeft="-25px"
          width={"70px"}
          fontSize={"12px"}
          fontWeight={500}
        >
          {strTime}
        </Text>
        <Box
          marginLeft="-30px"
          position="absolute"
          left={"-4px"}
          bottom={"364px"}
        >
          <Text
            color={"red"}
            background="red"
            borderRadius={"50%"}
            width="9px"
            height={"9px"}
          ></Text>
        </Box>
        <Divider orientation="vertical" borderColor={"red"} />
      </Stack>
    </Box>
  );
};

export default Timestamp;
