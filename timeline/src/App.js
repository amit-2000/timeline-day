import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import TimeLine from "./Components/TimeLine";
import Cls from "./Components/Cls";
import { Stack, HStack, VStack, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box h={100}>
        <TimeLine />
        <Box>
          <Cls />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
