import { Avatar, Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const ChatCard = (props: any) => {
  return (
    <Container pt={10} height="220px" width="580px">
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box display="flex" justifyContent="space-between" p={2}>
          <Box display="flex">
            <Avatar src={props.photo} />
            <Text fontWeight="semibold">{props.name}</Text>
          </Box>

          <Text fontSize="md" color="gray.500">
            {props.time}
          </Text>
        </Box>

        <Text fontSize="md" p={10}>
          {props.message}
        </Text>
      </Box>
    </Container>
  );
};

export default ChatCard;
