import { Flex } from "@chakra-ui/react";
import React from "react";
import Chats from "./Chats";
import Message from "./Message";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <Flex bg="gray.300" h="100vh">
      <SideBar />
      <Chats />
      <Message />
    </Flex>
  );
};

export default Dashboard;
