import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box
      pos={"absolute"}
      width={1250}
      h={"60px"}
      top={47}
      left={15}
        backgroundColor={"#FFFFFF"}
       
      borderRadius={5}
    >
      <Box
        pos={"absolute"}
        w={159}
        h={29}
        left={41}
        top={3}
        fontFamily={"inter"}
        fontStyle={"normal"}
        fontWeight="500"
        fontSize={24}
        // lineHeight={29}
        color={"#733D47"}
      >
        <Text>January 2022</Text>
      </Box>
      <Center
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          aligntems: "center",
          padding: " 5px 8px",
          gap: " 10px",
          position: "absolute",
          width: "27px",
          height: "25px",
          left: "1160px",
          top: 18,
          h: 29,
          background: " #F4F4F4",
          borderRadius: " 5px",
        }}
      >
        {"<"}
      </Center>
      <Center
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          aligntems: "center",
          padding: " 5px 8px",
          gap: " 10px",
          position: "absolute",
          width: "27px",
          height: "25px",
          left: "1200px",
          top: 18,
          h: 29,
          background: " #F4F4F4",
          borderRadius: " 5px",
          //   transform: "matrix(-1, 0, 0, 1, 0, 0)",
        }}
      >
        {">"}
      </Center>
    </Box>
  );
}

export default Navbar;
