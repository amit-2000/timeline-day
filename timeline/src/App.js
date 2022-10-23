import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Components/NavBar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";
import Timelinehome from "./Components/TimeLine/TimelineHome";
import { data } from "./utils";
const App = () => {
  // const [currentDate, setCurrentDate] = useState({
  //   day: "fri 10",
  //   unixTimeStamp: 1212121212,
  // });
  // const [currentSchedule, setCurrentSchedule] = useState(data[0]);
  // const handleDate()
  // taking first item for the first time
  const date = new Date(data[0].start_time * 1000);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const selectedDay = date.getDate();
  // -------------------------------------------------
  const currentsDaysEvent = [];
  const getEventsOfTheDay = () => {
    data.forEach((item) => {
      const date = new Date(item.start_time * 1000);
      if (selectedDay === date.getDate()) {
        currentsDaysEvent.push(item);
      }
    });
  };
  getEventsOfTheDay();
  // console.log(currentsDaysEvent);
  // -------------------------------------------
  const dateList = new Set(); // got unique Dates.
  const getDateList = () => {
    data.forEach((item) => {
      const date = new Date(item.start_time * 1000);
      const newDate = date.getDate();
      const day = date.getDay();
      dateList.add(days[day] + " " + newDate);
    });
    // console.log(dateList);
  };
  getDateList();
  // ---------------------------------------------
  const typesSet = new Set();
  const getTypes = () => {
    data.forEach((item) => {
      typesSet.add(item.type);
    });
  };
  getTypes();
  console.log(typesSet);
  // ------------------------------------------
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Sidebar dateList={dateList} />
        <Timelinehome
          currentsDaysEvent={currentsDaysEvent}
          typesSet={typesSet}
        />
      </Box>
    </ChakraProvider>
  );
};

export default App;
