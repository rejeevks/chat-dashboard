import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { VscAdd, VscChevronDown } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";

import { Icon } from "@chakra-ui/react";
import ChatCard from "./ChatCard";

const Chats = () => {
  const peoples = [
    {
      name: "AAAA",
      time: "10 minute ago",
      message: "hai",
      photo: "https://bit.ly/dan-abramov",
    },
    {
      name: "BBBB",
      time: "20 minute ago",
      message: "hello",
      photo: "https://bit.ly/code-beast",
    },
    {
      name: "CCCC",
      time: "30 minute ago",
      message: "TEST",
      photo: "https://bit.ly/kent-c-dodds",
    },
    {
      name: "DDDDD",
      time: "40 minute ago",
      message: "test hai",
      photo: "https://bit.ly/ryan-florence",
    },
    {
      name: "EEEEE",
      time: "50 minute ago",
      message: "test hai hello",
      photo: "https://bit.ly/prosper-baba",
    },
  ];
  return (
    <Container>
      <Flex justifyContent="space-between">
        <Grid>
          <Heading size="lg" fontSize="40px">
            Chats
          </Heading>
          <Text>
            Recent Chats <Icon as={VscChevronDown} />
          </Text>
        </Grid>
        <Grid>
          <Button
            size="md"
            height="60px"
            width="240px"
            colorScheme="twitter"
            leftIcon={<Icon as={VscAdd} />}
          >
            Create New Chat
          </Button>
        </Grid>
      </Flex>
      <Grid pt={5}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FiSearch} color="gray.500" />}
          />
          <Input type="" placeholder="Search" size="lg" />
          <InputRightAddon
            children={"Messages"}
            style={{ background: "white", height: "48px" }}
          />
        </InputGroup>
      </Grid>
      <Grid>
        <Box pb={10}>
          {peoples.map((item: any) => (
            <ChatCard
              name={item.name}
              time={item.time}
              message={item.message}
              photo={item.photo}
            />
          ))}
        </Box>
      </Grid>
    </Container>
  );
};

export default Chats;
