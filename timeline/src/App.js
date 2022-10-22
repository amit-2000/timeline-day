import { ChakraProvider } from "@chakra-ui/react";
// import TimeLine from "./Components/TimeLine";
// import Cls from "./Components/Cls";
import { Box } from "@chakra-ui/react";
import Navbar from "./Components/NavBar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";
import Timelinehome from "./Components/TimeLine/TimelineHome";
function App() {
  return (
    <ChakraProvider>
      <Box>
        <Sidebar />
        <Navbar />
        <Timelinehome />
        {/* <Content/> */}
        {/* <Box>
        <TimeLine />
        <Box>
        <Cls />
        </Box>
      </Box> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
