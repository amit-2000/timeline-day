import React from "react";
import { HStack, Box } from "@chakra-ui/react";
import Classes from "./Types/Classes";
import Tests from "./Types/Tests";
import Exams from "./Types/Exams";
import IAT from "./Types/IAT";
const Schedules = ({ currentsDaysEvent }) => {
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
  // console.log("examList", examList);
  return (
    <Box mt={"46px"}>
      <HStack pos={"relative"} mb={"76.5px"}>
        {classList.map((item) => {
          return <Classes item={item} />;
        })}
      </HStack>
      <HStack pos={"relative"} mb={"76.5px"}>
        {examList.map((item) => {
          return <Exams item={item} />;
        })}
      </HStack>

      <HStack pos={"relative"} mb={"75px"}>
        {iatList.map((item) => {
          return <IAT item={item} />;
        })}
      </HStack>
      <HStack pos={"relative"} mb={"76.5px"}>
        {testList.map((item) => {
          return <Tests item={item} />;
        })}
      </HStack>
    </Box>
  );
};

export default Schedules;
