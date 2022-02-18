import React from "react";
import Chats from "./components/Chats";
import SideBar from "./components/SideBar";
import Message from "./components/Message";
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Spacer,
} from "@chakra-ui/react";

function App() {
  return (
    <Grid pt={10} display="flex">
      <GridItem w="40%">
        <SideBar />
      </GridItem>
      <GridItem w="100%">
        <Chats />
      </GridItem>
      <GridItem w="100%">
        <Message />
      </GridItem>
    </Grid>
  );
}

export default App;
