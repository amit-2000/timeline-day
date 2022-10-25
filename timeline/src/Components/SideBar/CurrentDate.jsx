import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

const CurrentDate = ({ item, styleDate, event }) => {
  return (
    <Box
      display={"flex"}
      flexDirection="row"
      justifyContent={"space-around"}
      alignItems={"center"}
      w={"100px"}
      h="73px"
      bg={styleDate ? "brown" : "#F4F4F4"}
      color={styleDate ? "white" : ""}
      borderRadius={"5px"}
      mb={1}
    >
      <Text>{item}</Text>
        <Box
          border={"1.5px solid #F4F4F4"}
          ml={-4}
          color={"white"}
          borderRadius={"50%"}
          >
          {event  && (
          <Center
            border={"3px solid red"}
            color={"red"}
            borderRadius={"50%"}
          ></Center>
          )}
        </Box>
    </Box>
  );
};

export default CurrentDate;
