import { ChakraProvider } from "@chakra-ui/react";
// import TimeLine from "./Components/TimeLine";
// import Cls from "./Components/Cls";
import { Box } from "@chakra-ui/react";
// import { useState } from "react";
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
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Sidebar data={data} />
        <Timelinehome  />
      </Box>
    </ChakraProvider>
  );
};

export default App;
