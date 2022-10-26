import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "./Components/NavBar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";
import Timelinehome from "./Components/TimeLine/TimelineHome";
// import { data } from "./utils";
const App = ({ data }) => {
  console.log(data);
  const datesRef = useRef();
  const [currentsDaysEvent, setCurrentsDaysEvent] = useState([]);
  const [currentDate, setCurrentDate] = useState([]);
  let [dates, setDates] = useState([]);
  let [i, setI] = useState(0);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // const [data, setData] = useState([]);
  // const dataRef = useRef();

  useEffect(() => {
    // Get types of item
    const typesSet = new Set();
    const getTypes = () => {
      data?.forEach((item) => {
        typesSet.add(item.type);
      });
    };

    getTypes();
    // get unique Dates.
    const dateList = new Set();
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
    //eslint-disable-next-line
  }, []);
  //
  useEffect(() => {
    // Get all events of the praticaular Date.
    function getEventsOfTheDay() {
      // debugger;
      var events = [];
      data.forEach((item) => {
        const date = new Date(item.start_time * 1000);
        const newDate = date.getDate();
        const day = date.getDay();
        if (datesRef.current === days[day] + " " + newDate) {
          events.push(item);
        }
      });
      setCurrentsDaysEvent(events);
    }
    getEventsOfTheDay();
    //eslint-disable-next-line
  }, [datesRef.current]);

  // Arrow Button Handler on navbar.
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

  // console.log(currentDate);
  return (
    <ChakraProvider>
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
