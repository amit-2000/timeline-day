import React from "react";
import { Box } from "@chakra-ui/react";

const CurrentDate = ({ item }) => {

  return (
    <Box
      display={"flex"}
      flexDirection="row"
      justifyContent={"center"}
      alignItems={"center"}
      w={"100px"}
      h="73px"
      backgroundColor={"#F4F4F4"}
      borderRadius={"5px"}
      mb={1}
    >
      {item}
    </Box>
  );
};

export default CurrentDate;
