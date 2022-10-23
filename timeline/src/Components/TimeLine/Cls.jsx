import React from "react";
import ClassOne from "./ClassOne";
import { HStack, Box } from "@chakra-ui/react";

const Cls = ({ currentsDaysEvent }) => {
  const classList = [];
  const iatList = [];
  const examList = [];
  const testList = [];
  const getLists = () => {
    currentsDaysEvent.forEach((item) => {
      if (item.type === "Class") {
        classList.push(item);
      }
      if (item.type === "Exam") {
        examList.push(item);
      }
      if (item.type === "IAT") {
        iatList.push(item);
      }
      if (item.type === "Test") {
        testList.push(item);
      }
    });
  };
  getLists();
  console.log("examList", examList);
  return (
    <Box mt={"46px"}>
      <HStack pos={"relative"} mb={"76.5px"}>
        {classList.map((item) => {
          return <ClassOne item={item} />;
        })}
      </HStack>
      <HStack pos={"relative"} mb={"76.5px"}>
        {examList.map((item) => {
          return <ClassOne item={item} />;
        })}
      </HStack>
      <HStack pos={"relative"} mb={"76.5px"}>
        {testList.map((item) => {
          return <ClassOne item={item} />;
        })}
      </HStack>
      <HStack pos={"relative"} mb={"75px"}>
        {iatList.map((item) => {
          return <ClassOne item={item} />;
        })}
      </HStack>
  
    </Box>
  );
};

export default Cls;
