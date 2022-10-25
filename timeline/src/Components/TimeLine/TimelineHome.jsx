import React, { useRef, useEffect } from "react";
import { Box, Center, Divider, Stack, Text } from "@chakra-ui/react";
import Timeline from "./Timeline";
import Cls from "./Cls";
const Timelinehome = ({ currentsDaysEvent, typesSet }) => {
  // console.log(currentsDaysEvent, [...typesSet]);
  // console.log(item);
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
    // pos={"absolute"}
    // w={1212}
    // scro
    // // h={609}
    // left={137}
    // top={112}
    // backgroundColor={"#FFFFFF"}
    // borderRadius={5}
    >
      <Box
        overflowX="scroll"
        // overflowY="hidden"
        pos={"absolute"}
        w={1128}
        scro
        h={609}
        left={137}
        top={112}
        backgroundColor={"#FFFFFF"}
        borderRadius={5}
      >
        <Timeline />
        <Box>
          <Cls currentsDaysEvent={currentsDaysEvent} />
          <Center>
            <Box
              ref={myRef}
              position="absolute"
              // left={'4118px'}
              left={shour * 264 + 4 + smins * 4.32}
              top={0}

              // marginTop="140px"
            >
              <Stack height={"400px"} marginTop={"34px"}>
                <Text
                  color={"red"}
                  marginLeft="-30px"
                  // marginBottom={"0px"}
                  width={"70px"}
                  fontWeight={600}
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
                    // border={"1.5px solid white"}
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
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default Timelinehome;
