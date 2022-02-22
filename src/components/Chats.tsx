import React from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { VscAdd, VscChevronDown } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";

import { Icon } from "@chakra-ui/react";
import ChatCard from "./ChatCard";

const Chats = () => {
  const peoples = [
    {
      name: "name1",
      time: "10 minute ago",
      message: "hai",
      photo: "https://bit.ly/dan-abramov",
    },
    {
      name: "name2",
      time: "20 minute ago",
      message: "hello",
      photo: "https://bit.ly/code-beast",
    },
    {
      name: "name3",
      time: "30 minute ago",
      message: "TEST",
      photo: "https://bit.ly/kent-c-dodds",
    },
    {
      name: "name4",
      time: "40 minute ago",
      message: "test hai",
      photo: "https://bit.ly/ryan-florence",
    },
    {
      name: "name5",
      time: "50 minute ago",
      message: "test hai hello",
      photo: "https://bit.ly/prosper-baba",
    },
  ];
  return (
    <Flex w="40%" bg="gray.100" pt={8} direction="column">
      <Flex direction="column">
        <Flex>
          <Flex direction="column" pl={10}>
            <Text fontSize="4xl">Chats</Text>
            <Text>
              Recent Chats <Icon as={VscChevronDown} />
            </Text>
          </Flex>
          <Flex pl={72}>
            <Button
              size="md"
              height="60px"
              width="240px"
              colorScheme="twitter"
              leftIcon={<Icon as={VscAdd} />}
            >
              Create New Chat
            </Button>
          </Flex>
        </Flex>
        <Flex p={10}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FiSearch} color="gray.500" />}
            />
            <Input type="" placeholder="Search" size="lg" bg="white" />
            <InputRightAddon
              children={"Messages"}
              style={{ background: "white", height: "48px" }}
            />
          </InputGroup>
        </Flex>
      </Flex>
      <Flex overflow="scroll">
        <Box pb={10} pl={10}>
          {peoples.map((item: any) => (
            <ChatCard
              name={item.name}
              time={item.time}
              message={item.message}
              photo={item.photo}
            />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Chats;
