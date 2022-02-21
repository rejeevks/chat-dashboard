import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ChatCard = (props: any) => {
  return (
    <Flex pt={10}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        height="220px"
        width="580px"
        _hover={{ bg: "blue.200" }}
      >
        <Box display="flex" justifyContent="space-between" p={10}>
          <Box display="flex">
            <Avatar src={props.photo} boxSize={14} />
            <Text fontWeight="semibold" pl={5}>
              {props.name}
            </Text>
          </Box>

          <Text fontSize="md" color="gray.500">
            {props.time}
          </Text>
        </Box>

        <Text fontSize="md" pl={10}>
          {props.message}
        </Text>
      </Box>
    </Flex>
  );
};

export default ChatCard;
