import React from "react";
import Chats from "./components/Chats";
import SideBar from "./components/SideBar";
import Message from "./components/Message";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex bg="gray.300" h="100vh">
      <SideBar />
      <Chats />
      <Message />
    </Flex>
  );
}

export default App;
