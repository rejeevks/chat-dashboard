import React from "react";
import { Flex } from "@chakra-ui/react";
import Chats from "./Chats";
import Message from "./Message";
import SideBar from "./SideBar";
import { Navigate } from "react-router-dom";

const Dashboard = ({ authorized }: any) => {
  // if (authorized === false) {
  //   return <Navigate to="/" />;
  // }

  return (
    <Flex bg="gray.300" h="100vh">
      <SideBar />
      <Chats />
      <Message />
    </Flex>
  );
};

export default Dashboard;
