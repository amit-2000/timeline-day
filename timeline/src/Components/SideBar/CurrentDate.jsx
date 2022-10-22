import React from "react";
import { Box } from "@chakra-ui/react";

const CurrentDate = ({ item }) => {
  //   console.log(item.start_time);
  const date = new Date(item.start_time * 1000);

  //   console.log(date.getDate(), date.getMonth(), date.getFullYear());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
