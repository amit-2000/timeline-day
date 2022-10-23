import React from "react";
import ClassOne from "./ClassOne";
import { HStack, Box } from "@chakra-ui/react";

const Cls = ({ currentsDaysEvent }) => {
  var startTime = [0];
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
  console.log(classList);

  return (
    <Box  mt={'46px'}>
      <HStack pos={"relative"} mb={"76.5px"}>
        {startTime.map((stime) => {
          return <ClassOne stime={stime} />;
        })}
      </HStack>
      <HStack  pos={"relative"} mb={"76.5px"}>
        {startTime.map((stime) => {
          return <ClassOne stime={stime} />;
        })}
      </HStack>
      <HStack   pos={"relative"} mb={"76.5px"}>
        {startTime.map((stime) => {
          return <ClassOne stime={stime} />;
        })}
      </HStack>
      <HStack  pos={"relative"} mb={"75px"}>
        {startTime.map((stime) => {
          return <ClassOne stime={stime} />;
        })}
      </HStack>
    </Box>
  );
};

export default Cls;
