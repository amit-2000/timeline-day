import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import Timeline from "./Timeline";
import Cls from "./Cls";
const Timelinehome = ({ currentsDaysEvent, typesSet }) => {
  // console.log(currentsDaysEvent, [...typesSet]);
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView({
      block: "end",
      inline: "center",
      behavior: "smooth",
    });
    // console.log("width calculated");
  }, []);

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
        </Box>
        <Box
          pl={"10px"}
          ref={myRef}
          position={"absolute"}
          w={"700px"}
          height={0.4}
          top={"400px"}
          left={3000}
          border={"1px solid #FF525"}
          transform={"rotate(90deg)"}
          bg={"red"}
          zIndex={1}
        ></Box>
      </Box>
    </Box>
  );
};

export default Timelinehome;
