import React from "react";
import { Box } from "@chakra-ui/react";
import CurrentDate from "./CurrentDate";

const Sidebar = ({ dateList, currentDate }) => {
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
    >
      <Box
        display={"flex"}
        flexDirection="row"
        justifyContent={"center"}
        alignItems={"center"}
        // padding={1}
        // gap={1}
        position={"absolute"}
        w={"100px"}
        h="59px"
        // left={"6px"}
        left={"6px"}
        top={1}
        backgroundColor={"#F4F4F4"}
        borderRadius={"5px"}
      >
        {"<>"}
      </Box>
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
        position="relative"
        top={"68px"}
      >
        {dateList.map((item, itr) => {
          return item === currentDate ? (
            <CurrentDate item={item} styleDate={true} event={true} />
          ) : (
            <CurrentDate item={item} styleDate={false} event={false} />
          );
        })}
      </Box>
    </Box>
  );
};

export default Sidebar;
