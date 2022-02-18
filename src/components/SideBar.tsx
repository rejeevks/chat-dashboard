import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
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
    <Container>
      <Grid>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Heading as="h4" size="md">
          Herry Jabbawockiez
          <Icon as={VscChevronDown} />
        </Heading>
      </Grid>
      <SimpleGrid spacingX="40px" spacingY="20px" pt={36}>
        <Box height="40px">
          <Icon as={BsGrid} />
          HOME
        </Box>
        <Box height="40px">
          <Icon as={BsChatDots} />
          CHAT
        </Box>
        <Box height="40px">
          <Icon as={IoPersonOutline} />
          CONTACT
        </Box>
        <Box height="40px">
          <Icon as={IoNotificationsOutline} />
          NOTIFICATIONS
        </Box>
        <Box height="40px">
          <Icon as={RiCalendarTodoLine} />
          CALENDAR
        </Box>
        <Box height="40px">
          <Icon as={IoSettingsOutline} />
          SETTINGS
        </Box>
        <Box height="40px" pt={40}>
          <Icon as={MdOutlinePowerSettingsNew} />
          LOG OUT
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default SideBar;
