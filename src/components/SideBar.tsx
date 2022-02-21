import React from "react";
import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsChatDots, BsGrid } from "react-icons/bs";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { RiCalendarTodoLine } from "react-icons/ri";
import { VscChevronDown } from "react-icons/vsc";

import {
  IoSettingsOutline,
  IoPersonOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

const SideBar = () => {
  return (
    <Flex bg="white" w="20%">
      <Flex align="flex-start" direction="column">
        <Flex alignItems="center" direction="column" p={8}>
          <Flex>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              size="xl"
            />
          </Flex>
          <Flex pt={4}>
            <Heading as="h4" size="md">
              Herry Jabbawockiez
            </Heading>
            <Icon as={VscChevronDown} boxSize={6} />
          </Flex>
        </Flex>

        <Flex p={6} _hover={{ color: "blue.400", borderLeft: "4px" }}>
          <Icon as={BsGrid} boxSize={6} />
          <Text pl={4}>HOME</Text>
        </Flex>
        <Flex p={6} _hover={{ color: "blue.400", borderLeft: "4px" }}>
          <Icon as={BsChatDots} boxSize={6} />
          <Text pl={4}>CHAT</Text>
        </Flex>
        <Flex p={6} _hover={{ color: "blue.400", borderLeft: "4px" }}>
          <Icon as={IoPersonOutline} boxSize={6} />
          <Text pl={4}>CONTACT</Text>
        </Flex>
        <Flex p={6} _hover={{ color: "blue.400", borderLeft: "4px" }}>
          <Icon as={IoNotificationsOutline} boxSize={6} />
          <Text pl={4}>NOTIFICATIONS</Text>
        </Flex>
        <Flex p={6} _hover={{ color: "blue.400", borderLeft: "4px" }}>
          <Icon as={RiCalendarTodoLine} boxSize={6} />
          <Text pl={4}>CALENDAR</Text>
        </Flex>
        <Flex p={6} _hover={{ color: "blue.400", borderLeft: "4px" }}>
          <Icon as={IoSettingsOutline} boxSize={6} />
          <Text pl={4}>SETTINGS</Text>
        </Flex>
        <Flex pt={32}>
          <Flex p={6} _hover={{ color: "blue.400", borderLeft: "4px" }}>
            <Icon as={MdOutlinePowerSettingsNew} boxSize={6} />
            <Text pl={4}>LOG OUT</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
