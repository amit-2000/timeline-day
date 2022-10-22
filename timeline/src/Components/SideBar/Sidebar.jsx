import React from "react";
import { Box } from "@chakra-ui/react";

function Sidebar() {
  return (
    <Box
      boxSizing="border-box"
      position={"absolute"}
      w={"112px"}
      h={"609px"}
      //   left={5}
      left={"20px"}
      top={"112px"}
      backgroundColor="#FFFFFF"
      borderRadius={5}
      bg="green"
    >
      <Box
        display={"flex"}
        flexDirection="row"
        justifyContent={"center"}
        alignItems={"center"}
        padding={1}
        gap={1}
        position={"absolute"}
        w={"90px"}
        h="55px"
        // left={"6px"}
        left={"15px"}
        top={1}
        backgroundColor={"#F4F4F4"}
        borderRadius={"5px"}
      >
        {"<>"}
      </Box>
    </Box>
  );
}

export default Sidebar;
