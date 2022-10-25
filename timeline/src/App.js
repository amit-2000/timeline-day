import React, { useState, useEffect, useRef } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Center, Divider, Stack } from "@chakra-ui/react";
import Navbar from "./Components/NavBar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";
import Timelinehome from "./Components/TimeLine/TimelineHome";
import { data } from "./utils";
import { extendTheme } from "@chakra-ui/react";

const App = () => {
  const datesRef = useRef();

  const [currentsDaysEvent, setCurrentsDaysEvent] = useState([]);
  const [currentDate, setCurrentDate] = useState([]);
  let [dates, setDates] = useState([]);
  let [i, setI] = useState(0);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const typesSet = new Set();
    const getTypes = () => {
      data.forEach((item) => {
        typesSet.add(item.type);
      });
    };

    getTypes();
    // console.log(typesSet);
    const dateList = new Set(); // got unique Dates.
    function getDateList() {
      data.forEach((item) => {
        const date = new Date(item.start_time * 1000);
        const newDate = date.getDate();
        const day = date.getDay();

        dateList.add(days[day] + " " + newDate);
      });
      let arr = [...dateList];
      setDates([...dateList]);
      datesRef.current = arr[0];
      setCurrentDate(arr[0]);
    }
    getDateList();
  }, []);
  //
  useEffect(() => {
    function getEventsOfTheDay() {
      // debugger;
      var events = [];
      data.forEach((item) => {
        const date = new Date(item.start_time * 1000);
        const newDate = date.getDate();
        const day = date.getDay();
        // console.log(currentDate);
        if (datesRef.current === days[day] + " " + newDate) {
          events.push(item);
          // console.log(date);
        }
      });
      setCurrentsDaysEvent(events);
    }
    getEventsOfTheDay();
  }, [datesRef.current]);
  // ------------------------------------------

  // -------------------------------
  // handleClick
  const handleClick = (action) => {
    if (action === "prev") {
      if (i > 0) {
        const date = dates[i - 1];
        datesRef.current = date;
        setCurrentDate(date);
        setI(i - 1);
        console.log("hhgh");
      }
    } else {
      if (i < dates.length - 1) {
        const date = dates[i + 1];
        datesRef.current = date;
        setCurrentDate(date);
        setI(i + 1);
        console.log(date);
      }
    }
  };
  const theme = extendTheme({
    colors: {
      brand: {
        100: "#343434",
        // ...
        900: "#1a202c",
      },
    },
  });
  console.log(currentDate);
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar handleClick={handleClick} />
        <Sidebar dateList={dates} currentDate={currentDate} />
        <Timelinehome
          currentsDaysEvent={currentsDaysEvent}
          // typesSet={typesSet}
        />
      </Box>
      
    </ChakraProvider>
  );
};

export default App;
